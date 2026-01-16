export interface Article {
  id: number
  title: string
  slug: string
  date: string
  category: string
  excerpt: string
  content: string
}

export interface Category {
  id: number
  name: string
  slug: string
}