import type { Quote } from '@/shared/api/quotes.types.ts'

export interface KurokeitaAuthor {
  id: string
  name: string
  slug: string
}

export interface KurokeitaTag {
  id: string
  name: string
}

export interface KurokeitaQuote {
  id: string
  content: string
  tags: KurokeitaTag[]
  author: KurokeitaAuthor
}

export const adaptQuote = (q: KurokeitaQuote): Quote => ({
  _id: q.id,
  content: q.content,
  author: q.author?.name ?? '',
  authorSlug: q.author?.slug ?? '',
  tags: (q.tags ?? []).map((t) => t.name),
  length: q.content.length,
  dateAdded: '',
  dateModified: '',
})
