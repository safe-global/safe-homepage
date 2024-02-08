import words from 'lodash/words'
import { documentToPlainTextString } from '@contentful/rich-text-plain-text-renderer'
import type { Document } from '@contentful/rich-text-types'

const averageWPM = 200

/**
 * Calculates the estimated reading time in minutes for a document.
 *
 * @param {Document} content - The Contentful RichText document.
 * @returns {number} - Estimated reading time in minutes.
 */
export function calculateReadingTime(content: Document) {
  const allText = documentToPlainTextString(content)

  const wordCount = words(allText).length

  return Math.round(wordCount / averageWPM)
}
