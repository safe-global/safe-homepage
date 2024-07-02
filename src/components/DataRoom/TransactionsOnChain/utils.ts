// This function calculates the Y position for individual digits in the counter animation.
// It creates a smooth rolling effect from 0 to the targetNumber.

export function calculateYPosition(latest: number, targetNumber: number, digitHeight: number): number {
  const currentDigit = latest % 10
  const digitDifference = (10 + targetNumber - currentDigit) % 10

  let yOffset = digitDifference * digitHeight

  // Adjust for shortest path (up or down)
  if (digitDifference > 5) {
    yOffset -= 10 * digitHeight
  }

  return yOffset
}
