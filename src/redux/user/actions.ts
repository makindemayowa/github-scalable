import t from './types'

export function searchQuery(query: string) {
  return {
    type: t.SEARCH_REQUEST,
    query,
  }
}
