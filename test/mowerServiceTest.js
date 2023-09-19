const { mower } = require("../src/model/mowerModel");
const { plateau } = require("../src/model/plateauModel");
const { moveMower } = require("../src/service/mowerService");
const expect = require("chai").expect;
const sinon = require("mocha-sinon").sinon;

describe("Testing the Mower Service Functions", function () {
  beforeEach(function () {
    this.sinon.stub(console, "error");
  });

  it("1. The Mower can turn left", function (done) {
    mower.x = 0;
    mower.y = 0;
    mower.direction = "N";
    plateau.x = 5;
    plateau.y = 5;
    instructions = "L";

    moveMower(instructions, plateau);

    expect(mower.x).to.equal(0);
    expect(mower.y).to.equal(0);
    expect(mower.direction).to.equal("W");
    done();
  });

  it("2. The Mower can turn right", function (done) {
    mower.x = 0;
    mower.y = 0;
    mower.direction = "N";
    plateau.x = 12;
    plateau.y = 12;
    instructions = "R";

    moveMower(instructions, plateau);

    expect(mower.x).to.equal(0);
    expect(mower.y).to.equal(0);
    expect(mower.direction).to.equal("E");
    done();
  });

  it("3. The Mower can move", function (done) {
    mower.x = 0;
    mower.y = 0;
    mower.direction = "N";
    plateau.x = 5;
    plateau.y = 5;
    instructions = "M";

    moveMower(instructions, plateau);

    expect(mower.x).to.equal(0);
    expect(mower.y).to.equal(1);
    expect(mower.direction).to.equal("N");
    done();
  });

  it("4. The Mower can't acept a wrong command", function (done) {
    mower.x = 0;
    mower.y = 0;
    mower.direction = "N";
    plateau.x = 5;
    plateau.y = 5;
    instructions = "H";

    moveMower(instructions, plateau);

    expect(mower.x).to.equal(0);
    expect(mower.y).to.equal(0);
    expect(mower.direction).to.equal("N");
    expect(console.error.calledOnce).to.be.true;
    expect(console.error.calledWith("Instruction not recognized")).to.be.true;

    done();
  });

  it("5. The Mower can't move outside the plateau", function (done) {
    mower.x = 0;
    mower.y = 0;
    mower.direction = "N";
    plateau.x = 5;
    plateau.y = 5;
    instructions = "MMMMM";

    moveMower(instructions, plateau);

    expect(mower.x).to.equal(0);
    expect(mower.y).to.equal(4);
    expect(mower.direction).to.equal("N");
    expect(console.error.calledWith("Mower can't move outside the plateau")).to
      .be.true;
    expect(
      console.error.calledWith(
        `Mower stopped at position: ${mower.x} ${mower.y} ${mower.direction}`
      )
    ).to.be.true;
    done();
  });
});
