export type HttpMethod = 'GET' | 'POST' | 'PUT' | 'DELETE'

export interface HttpOptions {
  method?: HttpMethod
  params?: Record<string, string | number | boolean>
  baseUrl?: string
}
