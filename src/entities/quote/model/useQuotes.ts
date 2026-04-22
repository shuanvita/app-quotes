import { onMounted, ref } from 'vue'
import { getQuotes } from '@/shared/api'
import type { Quotes } from '@/shared/api'

export const useQuotes = () => {
  const quotes = ref<Quotes>({
    count: 0,
    totalCount: 0,
    page: 0,
    totalPages: 0,
    lastItemIndex: 0,
    results: [],
  })
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
