import React, { Component } from 'react'
import Paper from 'material-ui/Paper'
import Divider from 'material-ui/Divider'
import TitleBarContainer from './containers/TitleBarContainer'
import SearchContainer from './containers/SearchContainer'
import StatsContainer from './containers/StatsContainer'
import './App.css'

class App extends Component {
  render () {
    return (
      <div className='App'>
        <h1 className='App-header'>NFL Rushing Stats</h1>
        <Paper zDepth={1}>
          <TitleBarContainer />
          <SearchContainer />
          <Divider />
          <StatsContainer />
        </Paper>
      </div>
    )
  }
}

export default App
