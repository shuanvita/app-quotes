import type { HttpOptions } from './httpClient.types'

export const httpClient = async <T = unknown>(
  url: string,
  {
    method = 'GET' as HttpOptions['method'],
    params = {},
    data,
    headers = {},
    baseUrl = '',
  }: HttpOptions = {},
): Promise<T> => {
  const urlObj = new URL(url, baseUrl)

  if (method === 'GET') {
    const searchParams = new URLSearchParams(params as Record<string, string>)
    urlObj.search = searchParams.toString()
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
