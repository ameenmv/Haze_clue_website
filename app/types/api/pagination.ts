export interface PaginationLink {
  url: string | null
  label: string
  active: boolean
}

export interface Pagination {
  current_page: number
  from: number
  last_page: number
  links: PaginationLink[]
  path: string
  per_page: number
  to: number
  total: number
}

export interface PaginationState {
  currentPage: number
  lastPage: number
  perPage: number
  total: number
  from: number
  to: number
  hasNextPage: boolean
  hasPrevPage: boolean
}
