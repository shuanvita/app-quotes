export type HttpMethod = 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH'
export type QueryParams = Record<string, string | number | boolean>

export interface HttpOptions {
  method?: HttpMethod
  params?: QueryParams
  data?: unknown
  headers?: Record<string, string>
  baseUrl?: string
}
