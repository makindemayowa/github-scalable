import t from './types'
import * as I from './interfaces'

interface ActionHandler {
  readonly [r: string]: (state: I.CommitState, action: I.UserInterfaces) => I.CommitState
}

const ACTION_HANDLERS: ActionHandler = {
  [t.SET_CURRENT_USER]: (state: I.CommitState, { user }: I.SetCurrUser) => ({
    ...state,
    user,
  }),
}

const initialState = {
  user: '',
  isLoading: false,
}

export default function reducer(state = initialState, action: I.UserInterfaces) {
  const handler = ACTION_HANDLERS[action.type]
  return handler ? handler(state, action) : state
}
