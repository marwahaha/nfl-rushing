import React, { PureComponent } from 'react'
import { TableHeader, TableHeaderColumn, TableRow } from 'material-ui/Table'
import SortableHeader from '../components/SortableHeader'

class StatsTableHeader extends PureComponent {
  render () {
    return (
      <TableHeader>
        <TableRow>
          <TableHeaderColumn>Name</TableHeaderColumn>
          <TableHeaderColumn>Team</TableHeaderColumn>
          <TableHeaderColumn>Pos</TableHeaderColumn>
          <TableHeaderColumn>Att</TableHeaderColumn>
          <TableHeaderColumn>Att/G</TableHeaderColumn>
          <TableHeaderColumn>
            <SortableHeader
              toggle={this.props.toggleRushingYards}
              direction={this.props.rushingYardsTotalOrder}
            >
              Yrds
            </SortableHeader>
          </TableHeaderColumn>
          <TableHeaderColumn>Avg</TableHeaderColumn>
          <TableHeaderColumn>Yds/G</TableHeaderColumn>
          <TableHeaderColumn>
            <SortableHeader
              toggle={this.props.toggleRushingTouchdownsTotal}
              direction={this.props.rushingTouchdownsTotalOrder}
            >
              TD
            </SortableHeader>
          </TableHeaderColumn>
          <TableHeaderColumn>
            <SortableHeader
              toggle={this.props.toggleRushingLongest}
              direction={this.props.rushingLongestOrder}
            >
              Lng
            </SortableHeader>
          </TableHeaderColumn>
          <TableHeaderColumn>1st</TableHeaderColumn>
          <TableHeaderColumn>1st%</TableHeaderColumn>
          <TableHeaderColumn>20+</TableHeaderColumn>
          <TableHeaderColumn>40+</TableHeaderColumn>
          <TableHeaderColumn>FUM</TableHeaderColumn>
        </TableRow>
      </TableHeader>
    )
  }
}

StatsTableHeader.muiName = 'TableHeader'

export default StatsTableHeader
