import { httpClient } from '@/shared/api/httpClient'
import { quotesConfig } from '@/shared/config'
import type { Quote } from '@/shared/api/quotes.types.ts'
import type { QueryParams } from '@/shared/api/httpClient/httpClient.types.ts'
import { adaptQuote, type KurokeitaQuote } from './_adapter'

interface KurokeitaRandomResponse {
  quote: KurokeitaQuote
}

export const getRandomQuotes = async (
  params: QueryParams,
): Promise<Quote[]> => {
  try {
    const limit = Math.max(1, Number(params.limit) || 1)
    const { limit: _limit, ...rest } = params as QueryParams & { limit?: number }
    void _limit

    const requests = Array.from({ length: limit }, () =>
      httpClient<KurokeitaRandomResponse>('quotes/random', {
        baseUrl: quotesConfig.BASE_URL,
        params: rest,
      }),
    )

    const responses = await Promise.all(requests)
    return responses.map((r) => adaptQuote(r.quote))
  } catch (error) {
    console.error('Failed to fetch random quotes:', error)
    throw error
  }
}
