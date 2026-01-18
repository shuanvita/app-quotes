// TODO доработать для POST, PUT, DELETE, PATCH

import type { HttpOptions } from './httpClient.types'

export const httpClient = async (
  url: string,
  { method = 'GET', params = {}, baseUrl = '' }: HttpOptions = {},
) => {
  const searchParams = new URLSearchParams(params as Record<string, string>)
  const urlObj = new URL(url, baseUrl)
  urlObj.search = searchParams.toString()

  const response = await fetch(urlObj.toString(), { method })
  if (!response.ok) throw new Error(`HTTP ${response.status}: ${response.statusText}`)
  return await response.json()
}
