import React from 'react'
import { connect } from 'react-redux'
import AppBar from 'material-ui/AppBar'
import FlatButton from 'material-ui/FlatButton'
import RushingStatsActions from '../state/rushingStatsState'

function TitleBarContainer (props) {
  return (
    <AppBar
      title='Rushing Stats'
      titleStyle={{ textAlign: 'start' }}
      iconElementRight={<FlatButton onClick={props.openCsv} label='Export as CSV' />}
      iconElementLeft={<div />}
    />
  )
}

function mapDispatchToProps (dispatch) {
  return {
    openCsv () { return dispatch(RushingStatsActions.exportRushingStatsRequest()) }
  }
}

export default connect(null, mapDispatchToProps)(TitleBarContainer)
