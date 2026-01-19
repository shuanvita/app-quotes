import { onMounted, ref } from 'vue'
import type {
  RandomQuoteItem,
  RandomQuoteResponse,
} from '@/shared/api/endpoints/random/random.types.ts'
import type { UseRandomQuoteReturn } from '@/features/randomQuote/lib/useRandomQuote.types.ts'
import { getRandomQuote } from '@/shared/api/endpoints/random/random.api.ts'

export const useRandomQuote = (): UseRandomQuoteReturn => {
  const quotes = ref<RandomQuoteResponse | null>(null)
  const quote = ref<RandomQuoteItem | null>(null)
  const loading = ref(false)
  const error = ref<string | null>(null)

  const load = async () => {
    loading.value = true
    error.value = null

    try {
      quotes.value = await getRandomQuote()
      quote.value = quotes.value?.[0] || null
    } catch (err) {
      error.value = 'Failed to fetch random quote'
      console.error(err)
    } finally {
      loading.value = false
    }
  }

  onMounted(load)

  return {
    quotes,
    quote,
    loading,
    error,
    load,
  }
}
