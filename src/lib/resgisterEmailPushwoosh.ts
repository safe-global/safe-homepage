import { PUSHWOOSH_REGISTRATION_ENDPOINT } from '@/config/constants'

export const registerEmail = async (email: string, applicationCode: string, tags?: Record<string, string>) => {
  const response = await fetch(PUSHWOOSH_REGISTRATION_ENDPOINT, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      email,
      application: applicationCode,
      tags,
    }),
  })

  if (!response.ok) {
    const errorData = await response.json()
    throw new Error(errorData.description)
  }

  return response.json()
}
