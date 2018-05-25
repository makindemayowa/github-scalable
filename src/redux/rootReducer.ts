import { combineReducers } from 'redux'
import { reducer as form } from 'redux-form'
import { routerReducer as router } from 'react-router-redux'
import user from 'redux/user/reducer'
import { UserState } from 'redux/user/interfaces'

export interface RootReducerInterface {
  router: {},
  form: {},
  user: UserState,
}

export default combineReducers<RootReducerInterface>({
  router,
  user,
  form,
})
