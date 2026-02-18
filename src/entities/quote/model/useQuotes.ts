import { onMounted, ref } from 'vue'
import { getQuotes } from '@/shared/api'
import type { QuoteCardProps } from '@/entities/quote'

export const useQuotes = () => {
  const quotes = ref<QuoteCardProps[]>([])
  const loading = ref(false)
  const error = ref<string | null>(null)

  const load = async (page: number = 0) => {
    loading.value = true
    error.value = null

    try {
      quotes.value = await getQuotes({ page })
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
