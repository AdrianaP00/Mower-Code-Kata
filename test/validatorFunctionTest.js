const { expect } = require('chai');
const { validatePlateau, validateDirection, validateInstruction } = require('../src/utils/validators');

describe('Validation Functions', () => {
  it('1.should validate plateau coordinates correctly', () => {
    expect(validatePlateau('5 5')).to.be.true;
    expect(validatePlateau('10 10')).to.be.true;
    expect(validatePlateau('5')).to.be.false;
    expect(validatePlateau('5 A')).to.be.false;
  });

  it('2.should validate mower positions and direction correctly', () => {
    expect(validateDirection('1 3 N')).to.be.true;
    expect(validateDirection('5 5 W')).to.be.true;
    expect(validateDirection('10 10 S')).to.be.true;
    expect(validateDirection('A B C')).to.be.false;
  });

  it('3.should validate instructions correctly', () => {
    expect(validateInstruction('LMLMLMLMM')).to.be.true;
    expect(validateInstruction('RMRMRMRM')).to.be.true;
    expect(validateInstruction('LRMRMXYZ')).to.be.false;
  });
});