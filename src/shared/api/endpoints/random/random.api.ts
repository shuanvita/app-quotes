import { httpClient } from '@/shared/api/httpClient'
import { quotesConfig } from '@/shared/config'
import type { RandomQuoteResponse } from '@/shared/api/endpoints/random/random.types.ts'

export const getRandomQuote = (): Promise<RandomQuoteResponse> =>
  httpClient('quotes/random', {
    baseUrl: quotesConfig.BASE_URL,
  })
