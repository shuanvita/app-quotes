import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useQuotesStore = defineStore(
  'quotes',
  () => {
    const quotes = ref([])

    // ✅ ДОБАВИТЬ цитату (НЕ удаляет дубликаты)
    const addQuote = (quote) => {
      quotes.value.push({ ...quote }) // Всегда добавляем
    }

    // ✅ УДАЛИТЬ конкретную цитату
    const removeQuote = (quoteId: string) => {
      quotes.value = quotes.value.filter((q) => q.id !== quoteId)
    }

    // ✅ ПЕРЕКЛЮЧИТЬ (добавляет/удаляет разные цитаты)
    const toggleQuote = (quote) => {
      const exists = quotes.value.some((q) => q.id === quote.id)

      if (exists) {
        // Удаляем ВСЕ экземпляры с таким id
        quotes.value = quotes.value.filter((q) => q.id !== quote.id)
      } else {
        // Добавляем новую цитату
        quotes.value.push({ ...quote })
      }
    }

    // ✅ ПРОВЕРКА наличия цитаты
    const hasQuote = (quoteId: string) => {
      return quotes.value.some((q) => q.id === quoteId)
    }

    return {
      quotes,
      addQuote,
      removeQuote,
      toggleQuote,
      hasQuote,
    }
  },
  {
    persist: true,
  },
)
