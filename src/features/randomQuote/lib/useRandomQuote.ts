import { onMounted, ref, computed } from 'vue'
import { getRandomQuote } from '@/shared/api/endpoints/random/random.api.ts'
import type { RandomQuoteResponse } from '@/shared/api/endpoints/random/random.types.ts'
import type { UseRandomQuoteReturn } from '@/features/randomQuote/lib/useRandomQuote.types.ts'

export const useRandomQuote = (): UseRandomQuoteReturn => {
  const quotes = ref(null)
  const quote = ref(null)
  const loading = ref(false)
  const error = ref<string | null>(null)

  const load = async () => {
    loading.value = true
    error.value = null

    try {
      quotes.value = await getRandomQuote()
      quote.value = quotes.value[0]
    } catch (err) {
      error.value = 'Failed to fetch random quote'
      console.error(err)
    } finally {
      loading.value = false
    }
  }

  onMounted(load)

  return {
    quote,
    loading,
    error,
    load,
  }
}
