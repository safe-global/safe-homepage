export const selectIndex = (scrollYProgress: number) => {
  if (scrollYProgress >= 0 && scrollYProgress <= 0.4) {
    return 0
  } else if (scrollYProgress > 0.4 && scrollYProgress <= 0.6) {
    return 1
  } else {
    return 2
  }
}
