import { delay } from 'redux-saga'
import { select, put, call } from 'redux-saga/lib/effects'
import {
  selectSearchValue,
  selectRushingYardsTotalOrder,
  selectRushingLongestOrder,
  selectRushingTouchdownsTotalOrder
} from '../state/rushingSearchState'
import RushingStatsActions from '../state/rushingStatsState'
import { fetchRushingStats } from '../services/rushingStatsAPI'

export function * getRushingStats () {
  // Wait 500ms before querying server to debounce requests
  yield delay(500)

  try {
    const rushingYardsTotal = yield select(selectRushingYardsTotalOrder)
    const rushingLongest = yield select(selectRushingLongestOrder)
    const rushingTouchdownsTotal = yield select(selectRushingTouchdownsTotalOrder)
    const searchValue = yield select(selectSearchValue)
    const response = yield call(
      fetchRushingStats,
      rushingYardsTotal,
      rushingLongest,
      rushingTouchdownsTotal,
      searchValue
    )
    yield put(RushingStatsActions.rushingStatsSuccess(response.data))
  } catch (error) {

  }
}

export function * getCsvExport () {
  const rushingYardsTotal = yield select(selectRushingYardsTotalOrder)
  const rushingLongest = yield select(selectRushingLongestOrder)
  const rushingTouchdownsTotal = yield select(selectRushingTouchdownsTotalOrder)
  const searchValue = yield select(selectSearchValue)
  const response = yield call(
    fetchRushingStats,
    rushingYardsTotal,
    rushingLongest,
    rushingTouchdownsTotal,
    searchValue,
    true
  )

  window.location = `data:text/csv;charset=utf-8,${encodeURIComponent(response.data)}`
}
