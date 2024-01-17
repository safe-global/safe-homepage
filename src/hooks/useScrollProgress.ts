import { useEffect, useState } from 'react'

const useScrollProgress = () => {
  const [readProgress, setReadProgress] = useState(0)

  const handleScroll = () => {
    const windowHeight = window.innerHeight
    const documentHeight = document.documentElement.scrollHeight
    const scrollTop = window.scrollY || document.documentElement.scrollTop
    const scrollPercent = (scrollTop / (documentHeight - windowHeight)) * 100

    setReadProgress(scrollPercent)
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return readProgress
}

export default useScrollProgress
