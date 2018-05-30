import t from './types'
import * as I from './interfaces'

interface ActionHandler {
  readonly [r: string]: (state: I.CommitState, action: I.UserInterfaces) => I.CommitState
}

const ACTION_HANDLERS: ActionHandler = {
  [t.SEARCH_REQUEST_ERROR]: (state) => ({
    ...state,
    isLoading: false,
  }),
}

const initialState = {
  username: '',
  error: null,
  items: [],
  isLoading: false,
}

export default function reducer(state = initialState, action: I.UserInterfaces) {
  const handler = ACTION_HANDLERS[action.type]
  return handler ? handler(state, action) : state
}
