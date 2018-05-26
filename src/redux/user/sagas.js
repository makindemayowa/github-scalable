import { takeEvery, all, fork, call, put } from 'redux-saga/effects'
import { searchUsers } from 'api'
import t from './types'

function* searchUsersSaga({ query }) {
  try {
    const stats = yield call(searchUsers, query)
    yield put({ type: t.SEARCH_REQUEST_SUCCESS, stats })
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
