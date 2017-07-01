import { combineReducers } from 'redux'
import { reducer as rushingSearch } from './rushingSearchState'
import { reducer as rushingStats } from './rushingStatsState'

export default combineReducers({
  rushingSearch,
  rushingStats
})
