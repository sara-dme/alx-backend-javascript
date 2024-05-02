const { expect } = require('chai');
const request = require('request');

describe('Index page', function () {
  it('correct status code', function (done) {
    request.get('http://localhost:7865', function (error, response, body) {
      expect(response.statusCode).to.equal(200);
      expect(body).to.equal('Welcome to the payment system');
      done();
    });
  });

  it('cart page', function (done) {
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
});
describe("available payment page", function() {
  it('status code for correctt url ', function (done) {
    request.get('http://localhost:7865/cart/available_payments', function (error, response, body) {
      if (error) {
        expect(res.statusCode).to.not.equal(200);
        expect(body).to.deep.equal(payLoad);
      } else {
        expect(res.statusCode).to.equal(200);
        expect(JSON.parse(body))
          .to.be.deep.equal({payment_methods: {credit_cards:true, paypal: false}});
        done();
        }
    });
  });
});
describe("login", function() {
  it("correctb staus code", function(done) {
    request.post(`${API_URL}/login`, {json: {userName: 'sasa'}}, (_err, res, body) => {
      expect(res.statusCode).to.be.equal(200);
      expect(body).to.be.equal('Welcome sasa');
      done();
    });
  });
});

