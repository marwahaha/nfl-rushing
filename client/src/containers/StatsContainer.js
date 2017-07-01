import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { Table } from 'material-ui/Table'
import RushingStatsActions, { selectRushingStats } from '../state/rushingStatsState'
import RushingSearchActions, {
  selectRushingYardsTotalOrder,
  selectRushingLongestOrder,
  selectRushingTouchdownsTotalOrder
} from '../state/rushingSearchState'
import StatsTableHeader from '../components/StatsTableHeader'
import StatsTableContent from '../components/StatsContent'
import './styles/StatsContainer.css'

class StatsContainer extends PureComponent {
  componentDidMount () {
    this.props.fetchRushingStats()
  }

  render () {
    return (
      <div className='Stats'>
        <Table selectable={false}>
          <StatsTableHeader
            toggleRushingYards={this.props.toggleRushingYards}
            toggleRushingTouchdownsTotal={this.props.toggleRushingTouchdownsTotal}
            toggleRushingLongest={this.props.toggleRushingLongest}
            rushingYardsTotalOrder={this.props.rushingYardsTotalOrder}
            rushingTouchdownsTotalOrder={this.props.rushingTouchdownsTotalOrder}
            rushingLongestOrder={this.props.rushingLongestOrder}
          />
          <StatsTableContent
            rushingStats={this.props.rushingStats}
          />
        </Table>
      </div>
    )
  }
}

function mapStateToProps (state) {
  return {
    rushingStats: selectRushingStats(state),
    rushingYardsTotalOrder: selectRushingYardsTotalOrder(state),
    rushingLongestOrder: selectRushingLongestOrder(state),
    rushingTouchdownsTotalOrder: selectRushingTouchdownsTotalOrder(state)
  }
}

function mapDispatchToProps (dispatch) {
  function fetchRushingStats () {
    return dispatch(RushingStatsActions.rushingStatsRequest())
  }
  return {
    fetchRushingStats,
    toggleRushingYards () {
      dispatch(RushingSearchActions.rushingYardsChangeOrder())
      fetchRushingStats()
    },
    toggleRushingLongest () {
      dispatch(RushingSearchActions.rushingLongestChangeOrder())
      fetchRushingStats()
    },
    toggleRushingTouchdownsTotal () {
      dispatch(RushingSearchActions.rushingTouchdownsTotalChangeOrder())
      fetchRushingStats()
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(StatsContainer)
