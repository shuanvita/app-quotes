import { httpClient } from '@/shared/api/httpClient'
import { quotesConfig } from '@/shared/config'
import type { RandomQuoteResponse } from './random.types.ts'

export const getRandomQuote = async (): Promise<RandomQuoteResponse> => {
  try {
    return await httpClient('quotes/random', {
      baseUrl: quotesConfig.BASE_URL,
    })
  } catch (error) {
    console.error('Failed to fetch random quote:', error)
    throw error
  }
}
