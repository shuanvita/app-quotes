import { defineStore } from 'pinia'
import { ref } from 'vue'
import type { QuoteCardProps} from '@/entities/QuoteCard/model/QuoteCard.types.ts'

export const useQuoteFavoritesStore = defineStore('quoteFavorites', () => {
  const quotes = ref<QuoteCardProps[]>([])

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
    quotes,
    toggleFavorite,
    isFavorite,
  }
})
