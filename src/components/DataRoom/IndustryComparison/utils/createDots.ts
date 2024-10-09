const ROWS = 30
const MOBILE_COLS = 15
const DESKTOP_COLS = 60

/**
 * Creates an array of dot coordinates based on given dimensions and device type.
 * @param dimensions - The width and height of the container.
 * @param isMobile - Boolean indicating if the device is mobile.
 * @returns An array of objects containing x and y coordinates for each dot.
 */
export const createDots = (dimensions: { width: number; height: number }, isMobile: boolean) => {
  const cols = isMobile ? MOBILE_COLS : DESKTOP_COLS
  const newDots = []
  for (let row = 0; row < ROWS; row++) {
    for (let col = 0; col < cols; col++) {
      const x = (dimensions.width / (cols - 1)) * col + dimensions.width / cols / 2
      const y = (dimensions.height / (ROWS - 1)) * row + dimensions.height / ROWS / 2
      newDots.push({ x, y })
    }
  }

  return newDots
}
