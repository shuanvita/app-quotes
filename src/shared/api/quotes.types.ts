export interface Quote {
  _id: string
  content: string
  author: string
  authorSlug: string
  tags: string[]
  length: number
  dateAdded: string
  dateModified: string
}

export interface Quotes {
  count: number
  totalCount: number
  page: number
  totalPages: number
  lastItemIndex: number
  results: Quote[]
}
