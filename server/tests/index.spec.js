const request = require('supertest')
const assert = require('assert')
const server = require('../bin/www')

describe('index route', () => {
  it('loads webpage at root route', done => {
    request(server)
      .get('/')
      .expect(200)
      .then(response => {
        assert(response.res.text.includes('React App'))
      })
      .then(done)
      .catch(done)
  })

  it('should 404 on unknown routes', done => {
    request(server)
      .get('/i/hope/we/dont/make/urls/like/this')
      .expect(404, done)
  })
})
