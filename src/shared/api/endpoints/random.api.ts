import { httpClient } from '@/shared/api/httpClient'
import { quotesConfig } from '@/shared/config'
import type { Quote } from '@/shared/api/quotes.types.ts'
import type { QueryParams } from '@/shared/api/httpClient/httpClient.types.ts'

export const getRandomQuotes = async (
  params: QueryParams,
): Promise<Quote[]> => {
  try {
    return await httpClient('quotes/random', {
      baseUrl: quotesConfig.BASE_URL,
      params,
    })
  } catch (error) {
    console.error('Failed to fetch random quotes:', error)
    throw error
  }
}
