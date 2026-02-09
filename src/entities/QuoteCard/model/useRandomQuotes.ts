import { computed, onMounted, ref } from 'vue'
import { getRandomQuotes } from '@/shared/api/endpoints/random.api.ts'
import type { Quote } from '@/shared/api/quotes.types.ts'

interface QuoteOptions {
  limit?: number
  minLength?: number
  maxLength?: number
}

export const useRandomQuotes = (params: QuoteOptions) => {
  const quotes = ref<Quote[] | null>(null)
  const loading = ref(false)
  const error = ref<string | null>(null)

  const quote = computed(() => quotes.value?.[0])

  const load = async () => {
    loading.value = true
    error.value = null
    try {
      quotes.value = await getRandomQuotes({
        limit: params.limit || 9,
        minLength: params.minLength || 0,
        maxLength: params.maxLength || 140,
        ...params,
      })
    } catch (err) {
      error.value = 'Ошибка получения случайных цитат'
      console.error(err)
    } finally {
      loading.value = false
    }
  }

  onMounted(load)

  return { quotes, quote, loading, error, load }
}
