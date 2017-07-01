const express = require('express')
const csv = require('csv-express') // eslint-disable-line
const camelToTitles = require('../helpers/camelToTitles')
const { rushing } = require('../models')
const validation = require('../validation/rushing')

const router = express.Router()

router.get('/', validation, async (req, res, next) => {
  try {
    let results

    const queryKeys = Object.keys(req.query)

    // Check if we are only filtering by player name
    if (req.query.name && queryKeys.length === 1) {
      results = await rushing.stringSearch(req.query.name)
    // Check if we are ordering the table by some column
    } else if (queryKeys.length > 0) {
      // Extract player name from columns
      const name = req.query.name
      delete req.query.name
      results = await rushing.orderedSearch(req.query, name)
    } else {
      results = await rushing.getAll()
    }

    if (req.header('accept') && req.header('accept').includes('text/csv')) {
      const exportResults = results.map(camelToTitles)

      return res.status(200).csv(exportResults, true)
    }

    return res.status(200).json(results)
  } catch (e) {
    next(e)
  }
})

module.exports = router
