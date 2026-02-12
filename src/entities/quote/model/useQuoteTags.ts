import { computed, onMounted, ref } from 'vue'
import { getQuoteTags } from '@/shared/api/endpoints/tags.api.ts'

interface QuoteTag {
  tag: string
  to: string
}

export const useQuoteTags = () => {
  const tags = ref<QuoteTag[]>([])
  const sidebarTags = computed(() => tags.value.slice(0, 12))
  const loading = ref(false)
  const error = ref<string | null>(null)

  const load = async () => {
    loading.value = true
    error.value = null

    try {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-expect-error
      tags.value = await getQuoteTags()
    } catch (err) {
      error.value = 'Ошибка получения списка тегов'
      console.error(err)
    } finally {
      loading.value = false
    }
  }

  onMounted(load)

  return {
    tags,
    sidebarTags,
    loading,
    error,
    load,
  }
}
