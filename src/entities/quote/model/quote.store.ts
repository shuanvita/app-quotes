import { defineStore } from 'pinia'
import { computed, ref } from 'vue'
import type { QuoteCardProps} from '@/entities/quote/model/QuoteCard.types.ts'
import type { Quote } from '@/shared/api/quotes.types.ts'
import { getRandomQuotes } from '@/shared/api/endpoints/random.api.ts'

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
  const randomQuote = computed(() => randomQuotes.value?.[0])

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
    randomQuote,
    randomLoading,
    randomError,
    loadRandomQuotes,
  }
})
