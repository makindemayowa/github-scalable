import types from './types'

export interface CommitState {
  user: string
}

export interface SetCurrUser {
  type: types.SET_CURRENT_USER,
  user: string
}

export type UserInterfaces = SetCurrUser
