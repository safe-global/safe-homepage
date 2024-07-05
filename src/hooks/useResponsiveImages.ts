import { useIsMediumScreen } from '@/hooks/useMaxWidth'
import { getImageSource, type ImageObj } from '@/lib/getImageSource'

const useResponsiveImages = (backgroundImage: ImageObj, image: ImageObj) => {
  const isMediumScreen = useIsMediumScreen()

  const bgImage = getImageSource(isMediumScreen, backgroundImage)
  const imageSrc = getImageSource(isMediumScreen, image)

  return { bgImage, imageSrc }
}

export default useResponsiveImages
