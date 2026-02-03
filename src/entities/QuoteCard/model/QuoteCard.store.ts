import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useQuotesStore = defineStore('quotes', () => {
  const quotes = ref([])

  const toggleQuote = (quote) => {
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
    toggleQuote,
    isFavorite,
  }
})
