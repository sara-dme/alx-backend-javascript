const { expect } = require('chai');
const calculateNumber = require('./1-calcul');

describe('calculate nmbers:', function() {
  it('return sum of two numbers: 6', function() {
    expect(calculateNumber('SUM',1.4, 4.5)).to.equal(6);
  });

  it('return substract of two numbers: -4', function() {
    expect(calculateNumber('SUBTRACT',1.4, 4.5)).to.equal(-4);
  });

  it('return divide of two numbers: 0.2', function() {
    expect(calculateNumber('DIVIDE',1.4, 4.5)).to.equal(0.2);
  });

  it('return Error', function() {
    expect(calculateNumber('DIVIDE',1.4, 0)).to.equal('Error');
  });
})