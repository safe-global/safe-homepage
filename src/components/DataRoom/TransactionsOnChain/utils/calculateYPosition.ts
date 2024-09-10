/**
 * Calculates the vertical position for a number in a rolling counter animation.
 *
 * @param {number} latest - The current value of the counter.
 * @param {number} number - The number for which to calculate the position.
 * @returns {string} The calculated vertical position as a CSS em value.
 *
 * This function determines the offset between the current counter value and the
 * given number, then calculates an appropriate vertical position. The result
 * is used to create a rolling number effect in the counter animation.
 */
export function calculateYPosition(latest: number, number: number): string {
  let placeValue = latest % 10
  let offset = (10 + number - placeValue) % 10

  let memo = offset * 1.5

  if (offset > 5) {
    memo -= 10 * 1.5
  }

  return `${memo}em`
}
