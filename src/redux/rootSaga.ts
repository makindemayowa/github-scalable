import { all, fork, } from 'redux-saga/effects'
import userSagas from 'redux/user/sagas'

export default function* root() {
  yield all([
    fork(userSagas),
  ])
}
