import { takeEvery, all, fork, call, put } from 'redux-saga/effects'
import { getStats } from 'api'
import t from './types'

function* getStatsSaga({ endpoint, offset }) {
  try {
    const stats = yield call(getStats, endpoint, offset)
    yield put({ type: t.GET_REQUEST_SUCCESS, stats })
  } catch (error) {
    // TODO: handle errors better
    yield put({ type: t.GET_REQUEST_ERROR, error })
  }
}

function* watchGetStatsSaga() {
  yield takeEvery(t.GET_REQUEST, getStatsSaga)
}

export default function* () {
  yield all([
    fork(watchGetStatsSaga),
  ])
}
