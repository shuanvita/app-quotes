import { defineStore } from 'pinia'
import { ref } from 'vue'
import type { QuoteCardProps} from '@/entities/quote/model/QuoteCard.types.ts'
import type { Quote } from '@/shared/api'
import { getRandomQuotes } from '@/shared/api'

interface QuoteOptions {
  limit?: number
  minLength?: number
  maxLength?: number
}

export const useQuoteStore = defineStore('quotes', () => {
  const quotes = ref<QuoteCardProps[]>([])
  const favorites = ref<QuoteCardProps[]>([])
  const randomQuotes = ref<Quote[] | null>(null)
  const randomLoading = ref(false)
  const randomError = ref<string | null>(null)
  const bannerQuote = ref<Quote | null>(null)
  const bannerLoading = ref(false)
  const bannerError = ref<string | null>(null)

  const loadRandomQuotes = async (params: QuoteOptions = {}) => {
    randomLoading.value = true
    randomError.value = null
    try {
      randomQuotes.value = await getRandomQuotes({
        limit: params.limit || 9,
        minLength: params.minLength || 0,
        maxLength: params.maxLength || 140,
        ...params,
      })
    } catch (err) {
      randomError.value = 'Ошибка получения случайных цитат'
      console.error(err)
    } finally {
      randomLoading.value = false
    }
  }

  const loadBannerQuote = async (params: Omit<QuoteOptions, 'limit'> = {}) => {
    bannerLoading.value = true
    bannerError.value = null
    try {
      const [quote] = await getRandomQuotes({
        limit: 1,
        minLength: params.minLength || 0,
        maxLength: params.maxLength || 140,
      })
      bannerQuote.value = quote ?? null
    } catch (err) {
      bannerError.value = 'Ошибка получения случайной цитаты'
      console.error(err)
    } finally {
      bannerLoading.value = false
    }
  }

  const toggleFavorite = (quote: QuoteCardProps) => {
    const index = quotes.value.findIndex((q) => q._id === quote._id)
    if (index === -1) {
      quotes.value.push(quote)
    } else {
      quotes.value.splice(index, 1)
    }
  }

  const isFavorite = (quoteId: string) => {
    return quotes.value.some((item) => item._id === quoteId)
  }

  return {
    favorites,
    quotes,
    toggleFavorite,
    isFavorite,
    randomQuotes,
    randomLoading,
    randomError,
    loadRandomQuotes,
    bannerQuote,
    bannerLoading,
    bannerError,
    loadBannerQuote,
  }
})
