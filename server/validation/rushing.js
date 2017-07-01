const Joi = require('joi')
const validator = require('express-joi-validation')({})

const directionOptions = [
  'ascending',
  'descending'
]

const querySchema = Joi.object({
  name: Joi.string().min(1).max(100),
  rushingYardsTotal: Joi.string().only(directionOptions),
  rushingLongest: Joi.string().only(directionOptions),
  rushingTouchdownsTotal: Joi.string().only(directionOptions)
})

module.exports = validator.query(querySchema)
