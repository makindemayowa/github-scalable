import types from './types'

export interface UserState {
  username: string
  error: string
  isLoading: boolean
  items: Array<any>
}

export interface SearchRequest {
  type: types.SEARCH_REQUEST
  query: string
}

export interface SearchSuccess {
  type: types.SEARCH_REQUEST_SUCCESS,
  items: Array<any>
}

export interface SearchError {
  type: types.SEARCH_REQUEST_ERROR,
  error: string
}

export type UserInterfaces = SearchRequest
  | SearchSuccess
  | SearchError
