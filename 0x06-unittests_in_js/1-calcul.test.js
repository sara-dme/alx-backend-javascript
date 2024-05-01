const assert = require('assert');
const calculateNumber = require('./1-calcul');

describe('calculate nmbers:', function() {
  it('return sum of two numbers: 6', function() {
    assert.strictEqual(calculateNumber('SUM',1.4, 4.5), 6);
    });

    it('return substract of two numbers: -4', function() {
        assert.strictEqual(calculateNumber('SUBSTRACT',1.4, 4.5), -4);
    });

    it('return divide of two numbers: 0.2', function() {
        assert.strictEqual(calculateNumber('DIVIDE',1.4, 4.5), 0.2);
    });

    it('return Error', function() {
        assert.strictEqual(calculateNumber('DIVIDE',1.4, 0), 'Error');
    });
})