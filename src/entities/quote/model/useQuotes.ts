import { onMounted, ref } from 'vue'
import { getQuotes } from '@/shared/api/endpoints/quotes.api.ts'
import type { QuoteCardProps } from '@/entities/quote/model/QuoteCard.types.ts'

export const useQuotes = () => {
  const quotes = ref<QuoteCardProps[]>([])
  const loading = ref(false)
  const error = ref<string | null>(null)

  const load = async () => {
    loading.value = true
    error.value = null

    try {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-expect-error
      quotes.value = await getQuotes()
    } catch (err) {
      error.value = 'Ошибка получения списка тегов'
      console.error(err)
    } finally {
      loading.value = false
    }
  }

  onMounted(load)

  return {
    quotes,
    loading,
    error,
    load,
  }
}
