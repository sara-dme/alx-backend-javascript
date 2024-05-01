const assert = require('assert');
const calculateNumber = require('./0-calcul.js');

describe('calculateNumber', () => {
  it('Return 4.', function() {
    assert.strictEqual( calculateNumber(1, 3), 4);
  });
});
describe('Calculate float and integer:', function() {
  it('return 5.', function() {
    assert.strictEqual(calculateNumber(1, 3.7), 5);
  });
  it('return -4.', function() {
    assert.strictEqual(calculateNumber(-1, -2.7), -4)
  });
});
describe('Calculate -2 and -1.7:', function() {
    it('return -4.', function() {
      assert.strictEqual(calculateNumber(-2, -1.7), -4);
    });
});
describe('Calculate float and float:', function() {
    it('return 6.', function() {
      assert.strictEqual(calculateNumber(1.5, 3.7), 6);
    });
});
