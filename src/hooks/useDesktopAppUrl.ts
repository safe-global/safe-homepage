import { useEffect, useState } from 'react'

const URL_DOWNLOAD_MAC = 'https://github.com/safe-global/safe-react/releases/download/v3.33.2%2Bdesktop/Safe-3.33.2.dmg'
const URL_DOWNLOAD_WINDOWS =
  'https://github.com/safe-global/safe-react/releases/download/v3.33.2%2Bdesktop/Safe-Setup-3.33.2.exe'
const URL_DOWNLOAD_LINUX =
  'https://github.com/safe-global/safe-react/releases/download/v3.33.2%2Bdesktop/safe-react_3.33.2_amd64.deb'

const useDesktopAppUrl = () => {
  const [desktopAppUrl, setDesktopAppUrl] = useState<string>()

  useEffect(() => {
    const isMac = navigator.userAgent.includes('Mac')
    const isWindows = navigator.userAgent.includes('Windows')
    const isLinux = navigator.userAgent.includes('Linux')
    const isX11 = navigator.userAgent.includes('X11')

    if (isMac) {
      setDesktopAppUrl(URL_DOWNLOAD_MAC)
    } else if (isWindows) {
      setDesktopAppUrl(URL_DOWNLOAD_WINDOWS)
    } else if (isLinux || isX11) {
      setDesktopAppUrl(URL_DOWNLOAD_LINUX)
    }
  }, [])

  return desktopAppUrl
}

export default useDesktopAppUrl
