const pgp = require('pg-promise')()
const RushingModel = require('./rushing')
const connectionString = process.env.DATABASE_URL || 'postgres://postgres@localhost:5432/nfl'

const db = pgp(connectionString)

module.exports = {
  rushing: new RushingModel(db),
  end: pgp.end
}
