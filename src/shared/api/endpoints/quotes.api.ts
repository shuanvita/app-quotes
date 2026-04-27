import { httpClient } from '@/shared/api/httpClient'
import { quotesConfig } from '@/shared/config'
import type { QueryParams } from '@/shared/api/httpClient/httpClient.types.ts'
import type { Quotes } from '@/shared/api/quotes.types.ts'
import { adaptQuote, type KurokeitaQuote } from './_adapter'

interface KurokeitaQuotesResponse {
  data: KurokeitaQuote[]
  metadata: {
    total: number
    page: number
    lastPage: number
    hasNextPage: boolean
    hasPreviousPage: boolean
  }
}

const ALLOWED_LIMITS = [10, 25, 50, 100] as const

export const getQuotes = async (params: QueryParams): Promise<Quotes> => {
  try {
    const requestedLimit = Number(params.limit) || 10
    const limit =
      ALLOWED_LIMITS.find((l) => l === requestedLimit) ?? 10
    const uiPage = Number(params.page) || 0
    // UI pages are 0-indexed; Kurokeita pages are 1-indexed
    const apiPage = uiPage + 1

    const response = await httpClient<KurokeitaQuotesResponse>('quotes', {
      baseUrl: quotesConfig.BASE_URL,
      params: { ...params, page: apiPage, limit },
    })

    const results = response.data.map(adaptQuote)
    const page = response.metadata.page - 1

    return {
      count: results.length,
      totalCount: response.metadata.total,
      page,
      totalPages: response.metadata.lastPage,
      lastItemIndex: page * limit + results.length,
      results,
    }
  } catch (error) {
    console.error('Failed to fetch quotes:', error)
    throw error
  }
}
