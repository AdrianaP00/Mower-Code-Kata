const { mower } = require("../src/model/mowerModel");
const expect = require("chai").expect;

describe("Testing the Mower Functions", function () {
  it("1. The Mower can turn left", function (done) {
    mower.x = 0;
    mower.y = 0;
    mower.direction = "N";

    mower.turnLeft();

    expect(mower.x).to.equal(0);
    expect(mower.y).to.equal(0);
    expect(mower.direction).to.equal("W");
    done();
  });

  it("2. The Mower can turn right", function (done) {
    mower.x = 0;
    mower.y = 0;
    mower.direction = "N";

    mower.turnRight();

    expect(mower.x).to.equal(0);
    expect(mower.y).to.equal(0);
    expect(mower.direction).to.equal("E");
    done();
  });

  it("3. The Mower can turn left twice", function (done) {
    mower.x = 0;
    mower.y = 0;
    mower.direction = "N";

    mower.turnLeft();
    mower.turnLeft();

    expect(mower.x).to.equal(0);
    expect(mower.y).to.equal(0);
    expect(mower.direction).to.equal("S");
    done();
  });

  it("4. The Mower can turn right twice", function (done) {
    mower.x = 0;
    mower.y = 0;
    mower.direction = "N";

    mower.turnRight();
    mower.turnRight();

    expect(mower.x).to.equal(0);
    expect(mower.y).to.equal(0);
    expect(mower.direction).to.equal("S");
    done();
  });

  it("5. The Mower can turn left 3 times", function (done) {
    mower.x = 0;
    mower.y = 0;
    mower.direction = "N";

    mower.turnLeft();
    mower.turnLeft();
    mower.turnLeft();

    expect(mower.x).to.equal(0);
    expect(mower.y).to.equal(0);
    expect(mower.direction).to.equal("E");
    done();
  });

  it("6. The Mower can turn right 3 times", function (done) {
    mower.x = 0;
    mower.y = 0;
    mower.direction = "N";

    mower.turnRight();
    mower.turnRight();
    mower.turnRight();

    expect(mower.x).to.equal(0);
    expect(mower.y).to.equal(0);
    expect(mower.direction).to.equal("W");
    done();
  });

  it("7. The Mower can move", function (done) {
    mower.x = 0;
    mower.y = 0;
    mower.direction = "N";

    mower.move();

    expect(mower.x).to.equal(0);
    expect(mower.y).to.equal(1);
    expect(mower.direction).to.equal("N");
    done();
  });

  it("8. The Mower can move left", function (done) {
    mower.x = 0;
    mower.y = 0;
    mower.direction = "N";

    mower.turnLeft();
    mower.move();

    expect(mower.x).to.equal(-1);
    expect(mower.y).to.equal(0);
    expect(mower.direction).to.equal("W");
    done();
  });

  it("9. The Mower can move right", function (done) {
    mower.x = 0;
    mower.y = 0;
    mower.direction = "N";

    mower.turnRight();
    mower.move();

    expect(mower.x).to.equal(1);
    expect(mower.y).to.equal(0);
    expect(mower.direction).to.equal("E");
    done();
  });
});
