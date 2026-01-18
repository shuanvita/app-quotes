import { httpClient } from '@/shared/api/httpClient'
import { quotesConfig } from '@/shared/config'
import type { QuotesResponse } from '@/shared/api/endpoints/quotes/quotes.types.ts'

export const getQuotes = (): Promise<QuotesResponse> =>
  httpClient('quotes/random', {
    baseUrl: quotesConfig.BASE_URL,
  })
