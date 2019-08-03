const request = require('supertest')

const app = require('../templates')

describe('templates', function () {
  describe('GET /', function () {
    it('should respond with json', function (done) {
      request(app)
        .get('/')
        .set('Accept', 'application/json')
        .expect(200)
        .end(function (err, res) {
          if (err) return done(err)
          done()
        })
    })
  })
})
