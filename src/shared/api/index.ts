import { getQuotes } from '@/shared/api/endpoints/quotes.api.ts'
import { getRandomQuotes } from '@/shared/api/endpoints/random.api.ts'
import type { Quote, Quotes } from '@/shared/api/quotes.types.ts'

export { getQuotes, getRandomQuotes }
export type { Quote, Quotes }
