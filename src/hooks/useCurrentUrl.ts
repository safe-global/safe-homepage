import { useState, useEffect } from 'react'

/**
 * A custom hook to get the current URL
 * @returns {string} The current URL
 */
const useCurrentUrl = () => {
  const [currentUrl, setCurrentUrl] = useState('')

  useEffect(() => {
    // Check if running in the browser environment
    if (typeof window !== 'undefined') {
      setCurrentUrl(window.location.href)
    }
  }, [])

  return currentUrl
}

export default useCurrentUrl
