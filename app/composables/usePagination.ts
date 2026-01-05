import type { Pagination, PaginationState } from '~/types/api/pagination'

export function usePagination() {
  const pagination = ref<PaginationState>({
    currentPage: 1,
    lastPage: 1,
    perPage: 10,
    total: 0,
    from: 1,
    to: 0,
    hasNextPage: false,
    hasPrevPage: false
  })

  const setPaginationFromMeta = (meta: Pagination) => {
    pagination.value = {
      currentPage: meta.current_page,
      lastPage: meta.last_page,
      perPage: meta.per_page,
      total: meta.total,
      from: meta.from,
      to: meta.to,
      hasNextPage: meta.current_page < meta.last_page,
      hasPrevPage: meta.current_page > 1
    }
  }

  const goToPage = (page: number) => {
    if (page >= 1 && page <= pagination.value.lastPage) {
      pagination.value.currentPage = page
      return true
    }
    return false
  }

  const nextPage = () => {
    return goToPage(pagination.value.currentPage + 1)
  }

  const prevPage = () => {
    return goToPage(pagination.value.currentPage - 1)
  }

  return {
    pagination,
    setPaginationFromMeta,
    goToPage,
    nextPage,
    prevPage
  }
}
