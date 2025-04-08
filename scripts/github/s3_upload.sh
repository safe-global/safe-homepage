#!/bin/bash

set -ev

cd out

# First, upload the new files w/o deleting the old ones
aws s3 sync . $BUCKET

# Second, upload them again but delete the old files this time
# This allows for a no-downtime deployment
aws s3 sync . $BUCKET --delete

function parallel_limit {
    local max="$1"
    while (( $(jobs -rp | wc -l) >= max )); do
        sleep 0.1
    done
}

export BUCKET  

MAX_JOBS=10

# Finally, upload all HTML files again but w/o an extention so that URLs like /welcome open the right page
find . -name '*.html' -print0 | while IFS= read -r -d '' file; do
    filepath="${file#./}"
    noext="${filepath%.html}"

    # Throttle jobs when max limit is hit
    parallel_limit "$MAX_JOBS"

    # Upload files to S3 using parallel threads
    aws s3 cp "$filepath" "$BUCKET/$noext" --content-type 'text/html' &
done

wait

cd -
