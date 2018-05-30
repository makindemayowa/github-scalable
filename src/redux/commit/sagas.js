import { takeEvery, all, fork, put } from 'redux-saga/effects'
import { LOCATION_CHANGE } from 'react-router-redux'
import { matchAiParams } from 'redux/history'
import t from './types'

function* commitSaga() {
  const { user } = matchAiParams()
  if (user) {
    yield put({ type: t.SET_CURRENT_USER, user })
  }
}

function* watchCommitSaga() {
  yield takeEvery(LOCATION_CHANGE, commitSaga)
}

export default function* () {
  yield all([
    fork(watchCommitSaga),
  ])
}
