/**
 * Performs linear interpolation between two numbers.
 *
 * @param {number} start - The starting value.
 * @param {number} end - The ending value.
 * @param {number} factor - The interpolation factor (0-1).
 * @returns {number} The interpolated value.
 */

export const lerp = (start: number, end: number, factor: number) => {
  return start + (end - start) * factor
}
