const { expect } = require('chai');
const request = require('request');

describe('Index page', function () {
  it('tests the server', function (done) {
    request.get('http://localhost:7865', function (error, response, body) {
      expect(response.statusCode).to.equal(200);
      expect(body).to.equal('Welcome to the payment system');
      done();
    });
  });

  it('return status code 200 when id is a num', function (done) {
    request.get('http://localhost:7865/cart/12', function (error, response, body) {
      expect(response.statusCode).to.equal(200);
      expect(body).to.equal('Payment methods for cart 12');
      done();
    });
  });
  
  it('return status code 404 when id is not a num', function (done) {
    request.get('http://localhost:7865/cart/hello', function (error, response, body) {
      expect(response.statusCode).to.equal(404);
      done();
    });
  });

  it('test the server with wrong cart id ', function (done) {
    request.get('http://localhost:7865/cart/wrong', function (error, response, body) {
      expect(response.statusCode).to.equal(404);
      done();
    });
  });
})
