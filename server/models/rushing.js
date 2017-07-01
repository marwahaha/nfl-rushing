const { rushing } = require('./sql')
const snakeToCamel = require('../helpers/snakeToCamel')

const directions = {
  ascending: 'ASC',
  descending: 'DESC'
}

const sortableTableNames = {
  rushingYardsTotal: 'rushing_yards_total',
  rushingLongest: 'rushing_longest',
  rushingTouchdownsTotal: 'rushing_touchdowns_total'
}

function createOrderString (tableName, direction) {
  if (!sortableTableNames[tableName]) {
    throw new Error(`Cannot sort by ${tableName}`)
  }

  if (!directions[direction]) {
    throw new Error(`Cannot sort by ${direction}`)
  }

  return `${sortableTableNames[tableName]} ${directions[direction]}`
}

class RushingModel {
  constructor (db) {
    this.db = db
  }

  create (
    playerName,
    playerTeam,
    playerPosition,
    rushingAttemptsPerGame,
    rushingAttempts,
    rushingYardsTotal,
    rushingYardsAverage,
    rushingYardsPerGame,
    rushingTouchdownsTotal,
    rushingLongest,
    rushingLongestTouchdown,
    rushingFirstDowns,
    rushingFirstDownsPerc,
    rushingGreaterThan20,
    rushingGreaterThan40,
    rushingFumbles
  ) {
    return this.db.one(rushing.create, {
      playerName,
      playerTeam,
      playerPosition,
      rushingAttemptsPerGame,
      rushingAttempts,
      rushingYardsTotal,
      rushingYardsAverage,
      rushingYardsPerGame,
      rushingTouchdownsTotal,
      rushingLongest,
      rushingLongestTouchdown,
      rushingFirstDowns,
      rushingFirstDownsPerc,
      rushingGreaterThan20,
      rushingGreaterThan40,
      rushingFumbles
    })
  }

  async getAll () {
    const result = await this.db.any(rushing.getAll)
    return result.map(snakeToCamel)
  }

  async orderedSearch (
    columnsOrder = { rushingLongest: 'ascending' },
    name = ''
  ) {
    let orderQuery = []

    Object.keys(columnsOrder).forEach(key => {
      orderQuery.push(createOrderString(key, columnsOrder[key]))
    })

    const order = orderQuery.join(', ')

    const result = await this.db.any(rushing.search, {order, name})
    return result.map(snakeToCamel)
  }

  async stringSearch (
    name = ''
  ) {
    const result = await this.db.any(rushing.stringSearch, { name })
    return result.map(snakeToCamel)
  }
}

module.exports = RushingModel
