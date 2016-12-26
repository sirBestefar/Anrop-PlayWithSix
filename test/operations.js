const request = require('supertest');

const app = require('../operations');

describe('operations', function() {
  describe('GET /config.yml', function() {
    it('should respond with config', function(done) {
      request(app)
        .get('/config.yml')
        .expect(200)
        .end(function(err, res) {
          if (err) return done(err);
          done();
        });
    });
  });

  describe('GET /123.yml', function() {
    it('should respond with operation', function(done) {
      request(app)
        .get('/123.yml')
        .expect(200)
        .end(function(err, res) {
          if (err) return done(err);
          done();
        });
    });
  });
});
