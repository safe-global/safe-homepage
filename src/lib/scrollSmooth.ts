export const scrollToElement = (elementId: string, offset: number) => {
  if (typeof window === 'undefined') return

  const target = document.querySelector(elementId)
  if (target) {
    const topOffset = target.getBoundingClientRect().top + window.scrollY - offset

    window.scrollTo({
      top: topOffset,
      behavior: 'smooth',
    })
  }
}
