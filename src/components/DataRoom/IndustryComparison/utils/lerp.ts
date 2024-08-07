const LERP_FACTOR = 0.1

export const lerp = (start: number, end: number) => {
  return start + (end - start) * LERP_FACTOR
}
