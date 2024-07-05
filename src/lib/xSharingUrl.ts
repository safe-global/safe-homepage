export const xSharingUrl = (currentUrl: string, sharingText: string) =>
  `https://twitter.com/intent/tweet?url=${encodeURIComponent(currentUrl)}&text=${encodeURIComponent(sharingText)}`
