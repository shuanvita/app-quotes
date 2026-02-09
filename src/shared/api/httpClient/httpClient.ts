import type { HttpOptions } from './httpClient.types'

export const httpClient = async <T = unknown>(
  url: string,
  {
    method = 'GET',
    params,
    data,
    headers = {},
    baseUrl = '',
  }: HttpOptions = {},
): Promise<T> => {
  const urlObj = new URL(url, baseUrl)

  if (method === 'GET' && params) {
    for (const [key, value] of Object.entries(params)) {
      urlObj.searchParams.append(key, String(value))
    }
  }

  const fetchOptions: RequestInit = {
    method,
    headers: {
      'Content-Type': 'application/json',
      ...headers,
    },
  }

  if (data) {
    fetchOptions.body = JSON.stringify(data)
  }

  const response = await fetch(urlObj.toString(), fetchOptions)
  if (!response.ok) throw new Error(`HTTP ${response.status}: ${response.statusText}`)
  return (await response.json()) as T
}
