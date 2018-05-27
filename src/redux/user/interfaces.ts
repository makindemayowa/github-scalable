import types from './types'

export interface UserState {
  username: string
  error: null | string
  isLoading: boolean
  items: Array<any>
}

interface SimpleError {
  error: string,
}

export interface ClearError {
  type: types.ERROR,
  error: null,
}

export interface SearchRequest {
  type: types.SEARCH_REQUEST
  query: string
}

export interface Error extends SimpleError {
  type: types.ERROR,
}

export interface SearchSuccess {
  type: types.SEARCH_REQUEST_SUCCESS,
  items: Array<any>
}

export type UserInterfaces = SearchRequest
  | SearchSuccess
  | Error
  | ClearError
