import React from 'react'
import FontIcon from 'material-ui/FontIcon'
import { SORT_DIRECTION } from '../state/rushingSearchState'
import './styles/SortableHeader.css'

function sortingIcon ({ direction }) {
  if (direction === SORT_DIRECTION.NONE) {
    return 'reorder'
  }

  return 'sort'
}

function sortingStyle ({ direction }) {
  if (direction === SORT_DIRECTION.ASCENDING) {
    return 'Sortable-inverse'
  }

  return ''
}

function SortableHeader (props) {
  return (
    <span>
      {props.children}
      <a onClick={props.toggle}>
        <FontIcon
          className={`material-icons Sortable-icon ${sortingStyle(props)}`}
        >
          {sortingIcon(props)}
        </FontIcon>
      </a>
    </span>
  )
}

export default SortableHeader
