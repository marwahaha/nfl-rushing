import React, { PureComponent } from 'react'
import { TableBody, TableRow, TableRowColumn } from 'material-ui/Table'

function isTouchdown ({ rushingLongest, rushingLongestTouchdown }) {
  return `${rushingLongest}${rushingLongestTouchdown ? 'TD' : ''}`
}

class StatsContent extends PureComponent {
  render () {
    return (
      <TableBody>
        {this.props.rushingStats.map(stat => {
          return (
            <TableRow key={stat.playerName}>
              <TableRowColumn>{stat.playerName}</TableRowColumn>
              <TableRowColumn>{stat.playerTeam}</TableRowColumn>
              <TableRowColumn>{stat.playerPosition}</TableRowColumn>
              <TableRowColumn>{stat.rushingAttempts}</TableRowColumn>
              <TableRowColumn>{stat.rushingAttemptsPerGame}</TableRowColumn>
              <TableRowColumn>{stat.rushingYardsTotal}</TableRowColumn>
              <TableRowColumn>{stat.rushingYardsAverage}</TableRowColumn>
              <TableRowColumn>{stat.rushingYardsPerGame}</TableRowColumn>
              <TableRowColumn>{stat.rushingTouchdownsTotal}</TableRowColumn>
              <TableRowColumn>{isTouchdown(stat)}</TableRowColumn>
              <TableRowColumn>{stat.rushingFirstDowns}</TableRowColumn>
              <TableRowColumn>{stat.rushingFirstDownsPerc}</TableRowColumn>
              <TableRowColumn>{stat.rushingGreaterThan20}</TableRowColumn>
              <TableRowColumn>{stat.rushingGreaterThan40}</TableRowColumn>
              <TableRowColumn>{stat.rushingFumbles}</TableRowColumn>
            </TableRow>
          )
        })}
      </TableBody>
    )
  }
}

StatsContent.muiName = 'TableBody'

export default StatsContent
