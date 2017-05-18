const request = require('supertest')

const app = require('../search')

describe('search', function () {
  describe('GET /', function () {
    it('should respond with json', function (done) {
      this.timeout(10000)

      request(app)
        .get('/')
        .query({ q: 'CUP' })
        .set('Accept', 'application/json')
        .expect(200)
        .end(function (err, res) {
          if (err) return done(err)
          done()
        })
    })
  })
})
