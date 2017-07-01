import { takeLatest } from 'redux-saga/lib/effects'
import { RushingStatsTypes } from '../state/rushingStatsState'
import { getRushingStats, getCsvExport } from './rushingStatsSagas'

export default function * root () {
  yield [
    takeLatest(
      RushingStatsTypes.rushingStatsRequest,
      getRushingStats
    ),
    takeLatest(
      RushingStatsTypes.exportRushingStatsRequest,
      getCsvExport
    )
  ]
}
