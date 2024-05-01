const assert = require('assert');
const getPaymentTokenFromAPI = require('./6-payment_token.js');

describe('getPaymentTokenFromAPI', function () {
  it('return a promise', function (done) {
    getPaymentTokenFromAPI(true)
    .then((res) => {
      assert.equal(res.data, 'Successful response from API');
      done();
    })
    .catch((error) => done(error));
  });
});