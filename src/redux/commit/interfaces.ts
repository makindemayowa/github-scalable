import types from './types'

export interface CommitState {
  username: string
  error: null | string
  isLoading: boolean
  items: any
}

interface SimpleError {
  error: string,
}

export interface Error extends SimpleError {
  type: types.ERROR,
}

export type UserInterfaces = Error
