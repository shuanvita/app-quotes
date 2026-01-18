import { ref, onMounted, type Ref } from 'vue'
import { getQuotes } from '@/shared/api/endpoints/quotes/quotes.api' // или твой путь
import type { QuotesResponse } from '@/shared/api/endpoints/quotes/quotes.types'

interface UseQuotesReturn {
  quotes: Ref<QuotesResponse | null>
  loading: Ref<boolean>
  error: Ref<string | null>
  fetchQuotes: () => Promise<void>
}

export function useQuotes(): UseQuotesReturn {
  const quotes = ref<QuotesResponse | null>(null)
  const loading = ref(false)
  const error = ref<string | null>(null)

  const fetchQuotes = async (): Promise<void> => {
    loading.value = true
    error.value = null

    try {
      quotes.value = await getQuotes()
    } catch (e) {
      error.value = 'Failed to fetch quotes'
      console.error(e)
    } finally {
      loading.value = false
    }
  }

  // Авто-загрузка при монтировании
  onMounted(fetchQuotes)

  return {
    quotes,
    loading,
    error,
    fetchQuotes,
  }
}
