export type HttpMethod = 'GET' | 'POST' | 'PUT' | 'DELETE'

export interface HttpOptions {
  method?: 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH'
  params?: Record<string, string | number | boolean>
  data?: unknown
  headers?: Record<string, string>
  baseUrl?: string
}
