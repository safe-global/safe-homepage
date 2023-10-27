const GUARDIANS_IMAGE_URL = 'https://safe-claiming-app-data.safe.global/guardians/images'

export const getDelegateImage = (address: string) => `${GUARDIANS_IMAGE_URL}/${address}_1x.png`
