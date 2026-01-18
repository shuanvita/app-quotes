import type { Ref } from 'vue'
import type { RandomQuoteItem } from '@/shared/api/endpoints/random/random.types.ts'

export interface UseRandomQuoteReturn {
  quote: Ref<RandomQuoteItem | null>
  loading: Ref<boolean>
  error: Ref<string | null>
  load: () => Promise<void>
}
