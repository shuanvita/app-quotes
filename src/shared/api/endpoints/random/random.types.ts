export interface RandomQuoteItem {
  _id: string
  content: string
  author: string
  authorSlug: string
  tags: string[]
  length: number
  dateAdded: string
  dateModified: string
}

export type RandomQuoteResponse = RandomQuoteItem[]
