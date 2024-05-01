const { expect } = require('chai');
const request = require('request');

describe('Index page', function () {
  it('Return statusCode: 200', (done) => {
    const opt = {
      url: 'http://localhost:7865',
      method: 'GET',
    };

    request(opt, function (error, response, body) {
     expect(response.statusCode).to.equal(200);
     expect(body).to.equal('Welcome to the payment system');
     done();
    });
  })
})