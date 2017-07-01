import React from 'react'
import { connect } from 'react-redux'
import TextField from 'material-ui/TextField'
import FontIcon from 'material-ui/FontIcon'
import RushingStatsActions, { selectIsBusy } from '../state/rushingStatsState'
import SearchActions, { selectSearchValue } from '../state/rushingSearchState'
import './styles/SearchContainer.css'

function SearchContainer (props) {
  return (
    <div className='Search'>
      <FontIcon
        className='material-icons Search-icon'>search</FontIcon>
      <TextField
        floatingLabelText='Player Name'
        hintText='Johnny Holton'
        value={props.value}
        onChange={props.changeHandler}
        floatingLabelFixed
      />
      {props.isBusy ? (<FontIcon className='material-icons Search-loading'>loop</FontIcon>) : ''}
    </div>
  )
}

function mapStateToProps (state) {
  return {
    value: selectSearchValue(state),
    isBusy: selectIsBusy(state)
  }
}

function mapDispatchToProps (dispatch) {
  return {
    changeHandler (_, newValue) {
      dispatch(SearchActions.playerSearchChanged(newValue))
      dispatch(RushingStatsActions.rushingStatsRequest())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchContainer)
