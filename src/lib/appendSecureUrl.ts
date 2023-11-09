export const appendUrlSecure = (url: string) => {
  return url.startsWith('//') ? `https:${url}` : url
}
