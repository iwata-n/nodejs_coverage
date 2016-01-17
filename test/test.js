var should = require('should');
var request = require('supertest');
var routes = require('../app');

describe("GET /users", function() {
  it ("no param", function(done) {
    request(routes)
      .get("/users")
      .expect(200)
      .end(function(err, res) {
        if (err) return done(err);
        res.text.should.equal("no param");
        done();
      });
  });
  
  /*
  it ("param", function(done) {
    request(routes)
      .get("/users?param=hoge")
      .expect(200)
      .end(function(err, res) {
        if (err) return done(err);
        res.text.should.equal("hoge");
        done();
      });
  });
  */
});