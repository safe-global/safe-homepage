// Fist group: SEP number
// Second group: SEP title
const snapshotRegex = /SEP #?(\d+)\]?[^A-Za-z[]*(.*)/

/**
 * Parses a snapshot title to extract the numeric identifier and description.
 *
 * @param {string} title - The snapshot title to parse.
 * @returns {[string, string]} - An array containing the numeric identifier and description.
 *   - If both groups are not present, it returns ['0', title].
 */
export function parseSnapshotTitle(title: string): [string, string] {
  const match = title.match(snapshotRegex)

  // If both groups are not present, return undefined
  if (match?.length !== 3) {
    return ['0', title]
  }

  return [match[1], match[2]]
}
