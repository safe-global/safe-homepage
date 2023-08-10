import { useEffect } from 'react'

// Ease-out easing function
function easeOut(t: number) {
  return 1 - Math.pow(1 - t, 3)
}

/**
 * Custom React hook for triggering a delayed scroll animation with easing.
 *
 * @param {string} elementId - The ID of the target element to scroll to.
 * @param {number} duration - Duration of the scroll animation in milliseconds.
 * @param {number} delay - Delay in milliseconds before starting the scroll animation.
 * @param {number} factor - The viewport factor to subtract to the target element top.
 *
 * @returns {void}
 */
export const useDelayedScrollAnimation = (elementId: string, duration: number, delay: number, factor: number) => {
  useEffect(() => {
    if (window === undefined) return

    // Set a timeout to trigger the scroll animation after the delay
    const timeoutId = setTimeout(() => {
      const startTime = performance.now()
      const startScrollY = window.scrollY
      const targetElement = document.getElementById(elementId)

      if (!targetElement) {
        console.error(`Target element ${elementId} not found.`)
        return
      }

      // Target scroll position is the target element top minus the viewport factor
      const targetScrollY = targetElement.getBoundingClientRect().top - window.innerHeight * factor

      // Define a function for the scroll animation
      function animateScroll(currentTime: number) {
        const elapsedTime = currentTime - startTime
        if (elapsedTime < duration) {
          const scrollProgress = elapsedTime / duration
          const easedProgress = easeOut(scrollProgress)

          const scrollDelta = targetScrollY * easedProgress
          const newScrollY = startScrollY + scrollDelta

          window.scrollTo(0, newScrollY)
          requestAnimationFrame(animateScroll)
        } else {
          window.scrollTo(0, targetScrollY)
        }
      }

      // Start the animation
      requestAnimationFrame(animateScroll)
    }, delay)

    return () => clearTimeout(timeoutId)
  }, [delay, duration, elementId, factor])
}
