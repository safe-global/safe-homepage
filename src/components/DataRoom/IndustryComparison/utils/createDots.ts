const ROWS = 30
const MOBILE_COLS = 15
const DESKTOP_COLS = 60

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
