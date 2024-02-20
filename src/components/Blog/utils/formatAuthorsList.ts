import { type TypeAuthorSkeleton } from '@/contentful/types'
import { type Entry } from 'contentful'

/**
 * Formats a list of authors into a string with proper punctuation.
 * If there is only one author, returns their name.
 * If there are multiple authors, joins their names with commas and uses an ampersand before the last author's name.
 *
 * @param {Entry<TypeAuthorSkeleton, undefined, string>[]} authors - An array of author entries.
 * @returns {string} The formatted list of authors.
 */
export const formatAuthorsList = (authors: Entry<TypeAuthorSkeleton, undefined, string>[]) => {
  if (authors.length === 1) return authors[0].fields.name

  // Join all authors except the last one with a comma
  const formattedAuthors = authors
    .map((author) => author.fields.name)
    .slice(0, -1)
    .join(', ')

  return `${formattedAuthors} & ${authors[authors.length - 1].fields.name}`
}
