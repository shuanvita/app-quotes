import { httpClient } from '@/shared/api/httpClient'
import { quotesConfig } from '@/shared/config'
import type { QueryParams } from '@/shared/api/httpClient/httpClient.types.ts'
import type { Quotes } from '@/shared/api/quotes.types.ts'

export const getQuotes = async (params: QueryParams): Promise<Quotes> => {
  try {
    return await httpClient<Quotes>('quotes', {
      baseUrl: quotesConfig.BASE_URL,
      params,
    })
  } catch (error) {
    console.error('Failed to fetch random quotes:', error)
    throw error
  }
}
