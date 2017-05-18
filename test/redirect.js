const request = require('supertest')

const app = require('../redirect')

describe('redirect', function () {
  describe('GET /', function () {
    it('should give request error if name is missing', function (done) {
      request(app)
        .get('/')
        .query({})
        .expect(400)
        .end(done)
    })

    it('should return not found if mod is not found', function (done) {
      this.timeout(10000)

      request(app)
        .get('/')
        .query({ name: 'this is not a valid mod!' })
        .expect(404)
        .end(done)
    })

    it('should redirect to correct url', function (done) {
      this.timeout(10000)

      request(app)
        .get('/')
        .query({ name: '@sfp' })
        .expect(302)
        .expect('Location', 'http://withsix.com/p/Arma-3/mods/bCScK_d14xGDcQAVF72WTA')
        .end(done)
    })
  })
})
