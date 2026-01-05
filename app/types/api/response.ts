import type { Pagination } from './pagination'

export interface ApiResponse<T> {
  data: T
  status: number
  message: string
}

export interface ApiCollectionResponse<T> extends ApiResponse<T[]> {
  links: {
    first: string
    last: string
    prev: string | null
    next: string | null
  }
  meta: Pagination
}
