const { mower } = require("../src/model/mowerModel");
const { plateau } = require("../src/model/plateauModel");
const { moveMower } = require("../src/service/mowerService");
const expect = require("chai").expect;
const sinon = require("mocha-sinon").sinon;

describe("Testing the plateau Service Functions", function () {
  beforeEach(function () {
    this.sinon.stub(console, "error");
  });

  it("1. The Mower can't move on another mower", function (done) {
    mower.x = 0;
    mower.y = 0;
    mower.direction = "N";
    plateau.x = 5;
    plateau.y = 5;
    instructions = "M";
    plateau.mowerPositions.push({ plateau, x: 0, y: 1, direction: "N" });

    moveMower(instructions, plateau);

    expect(mower.x).to.equal(0);
    expect(mower.y).to.equal(0);
    expect(mower.direction).to.equal("N");
    expect(console.error.calledWith("Mower can't move on another mower")).to.be
      .true;
    expect(
      console.error.calledWith(
        `Mower stopped at position: ${mower.x} ${mower.y} ${mower.direction}`
      )
    ).to.be.true;
    done();
  });

  it("2. should stop the mower when it encounters an obstacle", () => {
    mower.x = 0;
    mower.y = 0;
    mower.direction = "N";
    plateau.x = 5;
    plateau.y = 5;
    instructions = "M";
    plateau.obstaclesPositions.push({ plateau, x: 0, y: 1, direction: "N" });

    moveMower(instructions, plateau);

    expect(mower.x).to.equal(0);
    expect(mower.y).to.equal(0);
    expect(mower.direction).to.equal("N");
  });
});
