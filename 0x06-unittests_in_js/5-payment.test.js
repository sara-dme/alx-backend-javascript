const sinon = require('sinon');
const sendPaymentRequestToApi = require('./5-payment.js');

describe('sendPaymentRequestToApi', function () {
    let spyConsole;
    this.beforeEach(function () {
        spyConsole = sinon.spy(console, 'log');
    });
    this.afterEach(function () {
        spyConsole.restore();
    });

    it('log "the total is : 120" for 100 and 20', function() {
        sendPaymentRequestToApi(100, 20);
        sinon.assert.calledOnceWithExactly(spyConsole, 'The  total is: 120');
    });

    it('log "the total is: 20" for 10 and 10', function () {
        sendPaymentRequestToApi(10, 10);
        sinon.assert.calledOnceWithExactly(spyConsole, 'The total is: 20');
    });
});