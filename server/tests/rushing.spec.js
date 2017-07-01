const request = require('supertest')
const assert = require('assert')
const server = require('../bin/www')

function trimRushingLongest (rushingLongest) {
  return parseInt(rushingLongest.toString().replace('TD', ''), 10)
}

describe('rushing stats', () => {
  it('should query all with no params', (done) => {
    request(server)
      .get('/api/v1/rushing')
      .expect(200)
      .then(response => {
        assert(response.body.length > 50)
      })
      .then(done)
      .catch(done)
  })

  it('should filter by name', (done) => {
    request(server)
      .get('/api/v1/rushing?name=darren')
      .expect(200)
      .then(response => {
        assert(response.body.length < 10)
      })
      .then(done)
      .catch(done)
  })

  it('should sort by yards', (done) => {
    request(server)
      .get('/api/v1/rushing?rushingYardsTotal=descending')
      .expect(200)
      .then(response => {
        assert(response.body.every(({ rushingYardsTotal }, index) => {
          if (index !== 0) {
            return rushingYardsTotal <= response.body[index].rushingYardsTotal
          }

          return true
        }))
      })
      .then(done)
      .catch(done)
  })

  it('should sort by yards ascending', (done) => {
    request(server)
      .get('/api/v1/rushing?rushingYardsTotal=ascending')
      .expect(200)
      .then(response => {
        assert(response.body.every(({ rushingYardsTotal }, index) => {
          if (index !== 0) {
            return rushingYardsTotal >= response.body[index].rushingYardsTotal
          }

          return true
        }))
      })
      .then(done)
      .catch(done)
  })

  it('should sort by touchdowns', (done) => {
    request(server)
      .get('/api/v1/rushing?rushingTouchdownsTotal=descending')
      .expect(200)
      .then(response => {
        assert(response.body.every(({ rushingTouchdownsTotal }, index) => {
          if (index !== 0) {
            return rushingTouchdownsTotal <= response.body[index].rushingTouchdownsTotal
          }

          return true
        }))
      })
      .then(done)
      .catch(done)
  })

  it('should sort by touchdowns ascending', (done) => {
    request(server)
      .get('/api/v1/rushing?rushingTouchdownsTotal=ascending')
      .expect(200)
      .then(response => {
        assert(response.body.every(({ rushingTouchdownsTotal }, index) => {
          if (index !== 0) {
            return rushingTouchdownsTotal >= response.body[index].rushingTouchdownsTotal
          }

          return true
        }))
      })
      .then(done)
      .catch(done)
  })

  it('should sort by longest rushing attempt', (done) => {
    request(server)
      .get('/api/v1/rushing?rushingLongest=descending')
      .expect(200)
      .then(response => {
        assert(response.body.every(({ rushingLongest }, index) => {
          if (index !== 0) {
            return trimRushingLongest(rushingLongest) <=
              trimRushingLongest(response.body[index].rushingLongest)
          }

          return true
        }))
      })
      .then(done)
      .catch(done)
  })

  it('should sort by longest rushing attempt ascending', (done) => {
    request(server)
      .get('/api/v1/rushing?rushingLongest=ascending')
      .expect(200)
      .then(response => {
        assert(response.body.every(({ rushingLongest }, index) => {
          if (index !== 0) {
            return trimRushingLongest(rushingLongest) >=
              trimRushingLongest(response.body[index].rushingLongest)
          }

          return true
        }))
      })
      .then(done)
      .catch(done)
  })

  it('should be able to combine filtering and sorting', (done) => {
    request(server)
      .get('/api/v1/rushing?name=darren&rushingYardsTotal=descending')
      .expect(200)
      .then(response => {
        assert(response.body.every(({ rushingYardsTotal }, index) => {
          if (index !== 0) {
            return rushingYardsTotal <= response.body[index].rushingYardsTotal
          }

          return true
        }))

        assert(response.body.length < 10)
      })
      .then(done)
      .catch(done)
  })

  it('should export csv when given new Accept header', (done) => {
    request(server)
      .get('/api/v1/rushing?name=darren')
      .set('Accept', 'text/csv')
      .expect(200)
      .then(response => {
        assert(response.res.text.includes(',1st%,'))
      })
      .then(done)
      .catch(done)
  })

  it('should throw a validation error if query is malformed', (done) => {
    request(server)
      .get('/api/v1/rushing?rushingYardsTotal=decending')
      .expect(400, done)
  })

  it('should prevent little bobby tables from breaking the server', (done) => {
    request(server)
      .get('/api/v1/rushing?rushingYardsTotal=Robert\'); DROP TABLE nfl;')
      .expect(400, done)
  })
})
