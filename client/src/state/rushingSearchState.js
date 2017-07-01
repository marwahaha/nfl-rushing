/* Define redux types */
export const RushingSearchTypes = {
  playerSearchChanged: 'PLAYER_SEARCH_CHANGED',
  searchChangeOrder: 'RUSHING_SEARCH_CHANGE_ORDER'
}

export const SORT_DIRECTION = {
  ASCENDING: 'ascending',
  DESCENDING: 'descending',
  NONE: null
}

/* Define functions for creating new actions */
const ActionCreators = {
  playerSearchChanged (playerName) {
    return {
      type: RushingSearchTypes.playerSearchChanged,
      payload: { playerName }
    }
  },
  rushingSearchChangeOrder (columnName) {
    return {
      type: RushingSearchTypes.searchChangeOrder,
      payload: { columnName }
    }
  },
  rushingYardsChangeOrder () {
    return this.rushingSearchChangeOrder('rushingYardsTotal')
  },
  rushingLongestChangeOrder () {
    return this.rushingSearchChangeOrder('rushingLongest')
  },
  rushingTouchdownsTotalChangeOrder () {
    return this.rushingSearchChangeOrder('rushingTouchdownsTotal')
  }
}

export default ActionCreators

/* Set initial state */
const INITIAL_STATE = {
  playerName: '',
  rushingYardsTotal: SORT_DIRECTION.NONE,
  rushingLongest: SORT_DIRECTION.NONE,
  rushingTouchdownsTotal: SORT_DIRECTION.NONE
}

/* Define reducers for each redux type */
function changedReducer (state, { playerName }) {
  return {
    ...state,
    playerName
  }
}

function changeOrderReducer (state, { columnName }) {
  const columnDirection = state[columnName]
  let newSortDirection

  if (columnDirection === SORT_DIRECTION.NONE) newSortDirection = SORT_DIRECTION.DESCENDING
  if (columnDirection === SORT_DIRECTION.DESCENDING) newSortDirection = SORT_DIRECTION.ASCENDING
  if (columnDirection === SORT_DIRECTION.ASCENDING) newSortDirection = SORT_DIRECTION.NONE

  return {
    ...state,
    [columnName]: newSortDirection
  }
}

/* Create main reducer that dispatches action to type reducers */
export function reducer (state = INITIAL_STATE, action) {
  switch (action.type) {
    case RushingSearchTypes.playerSearchChanged:
      return changedReducer(state, action.payload)
    case RushingSearchTypes.searchChangeOrder:
      return changeOrderReducer(state, action.payload)
    default:
      return state
  }
}

/* Create selectors for accessing the store */
export function selectSearchValue (state) {
  return state.rushingSearch.playerName
}

export function selectColumnOrder (columnName) {
  return state => state.rushingSearch[columnName]
}

export const selectRushingYardsTotalOrder = selectColumnOrder('rushingYardsTotal')
export const selectRushingLongestOrder = selectColumnOrder('rushingLongest')
export const selectRushingTouchdownsTotalOrder = selectColumnOrder('rushingTouchdownsTotal')
