import { takeEvery, all, fork, call, put } from 'redux-saga/effects'
import { push } from 'react-router-redux'
import { searchUsers } from 'api'
import t from './types'

function* searchUsersSaga({ query }) {
  yield put(push('/users'))
  try {
    const items = yield call(searchUsers, query)
    yield put({ type: t.SEARCH_REQUEST_SUCCESS, items })
  } catch (error) {
    // TODO: handle errors better
    yield put({ type: t.SEARCH_REQUEST_ERROR, error })
  }
}

function* watchSearchUsersSaga() {
  yield takeEvery(t.SEARCH_REQUEST, searchUsersSaga)
}

export default function* () {
  yield all([
    fork(watchSearchUsersSaga),
  ])
}
