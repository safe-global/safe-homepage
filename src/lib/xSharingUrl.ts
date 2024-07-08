export const xSharingUrl = (currentUrl: string, sharingText: string) =>
  `https://x.com/intent/tweet?url=${encodeURIComponent(currentUrl)}&text=${encodeURIComponent(sharingText)}`
