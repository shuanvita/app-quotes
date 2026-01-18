export interface RandomQuoteItem {
  content: string
  author: string
  tags: string[]
  authorSlug: string
  length: number
  dateAdded: string
  dateModified: string
}

export type RandomQuoteResponse = RandomQuoteItem[]
