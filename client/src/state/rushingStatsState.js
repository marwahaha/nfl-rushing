/* Define redux types */
export const RushingStatsTypes = {
  exportRushingStatsRequest: 'EXPORT_RUSHING_STATS_REQUEST',
  rushingStatsRequest: 'RUSHING_STATS_REQUEST',
  rushingStatsSuccess: 'RUSHING_STATS_SUCCESS',
  rushingStatsFailure: 'RUSHING_STATS_FAILURE'
}

/* Define functions for creating new actions */
const ActionCreators = {
  exportRushingStatsRequest () {
    return {
      type: RushingStatsTypes.exportRushingStatsRequest
    }
  },
  rushingStatsRequest () {
    return {
      type: RushingStatsTypes.rushingStatsRequest
    }
  },
  rushingStatsSuccess (results) {
    return {
      type: RushingStatsTypes.rushingStatsSuccess,
      payload: { results }
    }
  },
  rushingStatsFailure (error) {
    return {
      type: RushingStatsTypes.rushingStatsFailure,
      payload: { error }
    }
  }
}

export default ActionCreators

/* Set initial state */
const INITIAL_STATE = {
  results: [],
  fetching: false,
  error: false
}

/* Define reducers for each redux type */
function requestReducer (state) {
  return {
    ...state,
    fetching: true,
    error: false
  }
}

function successReducer (state, { results }) {
  return {
    ...state,
    fetching: false,
    error: false,
    results
  }
}

function failureReducer (state, { error }) {
  return {
    ...state,
    results: [],
    fetching: false,
    error
  }
}

/* Create main reducer that dispatches action to type reducers */
export function reducer (state = INITIAL_STATE, action) {
  switch (action.type) {
    case RushingStatsTypes.rushingStatsRequest:
      return requestReducer(state, action.payload)
    case RushingStatsTypes.rushingStatsSuccess:
      return successReducer(state, action.payload)
    case RushingStatsTypes.rushingStatsFailure:
      return failureReducer(state, action.payload)
    default:
      return state
  }
}

/* Create selectors for accessing the store */
export function selectRushingStats (state) {
  return state.rushingStats.results
}

export function selectIsBusy (state) {
  return state.rushingStats.fetching
}
