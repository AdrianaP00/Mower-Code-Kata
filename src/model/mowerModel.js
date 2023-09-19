// Definition of variables for grid
const directions = { N: [0, 1], E: [1, 0], S: [0, -1], W: [-1, 0] };

let mower = {
  x: 0,
  y: 0,
  direction: "N",
  helixStatus: true,

  // Function to turn the mower left
  turnLeft: function () {
    switch (this.direction) {
      case "N":
        this.direction = "W";
        break;
      case "E":
        this.direction = "N";
        break;
      case "S":
        this.direction = "E";
        break;
      case "W":
        this.direction = "S";
        break;
      default:
        break;
    }
  },

  // Function to turn the mower left
  turnRight: function () {
    switch (this.direction) {
      case "N":
        this.direction = "E";
        break;
      case "E":
        this.direction = "S";
        break;
      case "S":
        this.direction = "W";
        break;
      case "W":
        this.direction = "N";
        break;
      default:
        break;
    }
  },

  // Function to move the mower
  move: function () {
    let [dx, dy] = directions[mower.direction];
    this.x = parseInt(this.x) + parseInt(dx);
    this.y = parseInt(this.y) + parseInt(dy);
  },

  // Function to turn off the helix
  helixOff: function () {
    this.helixStatus = false;
    console.log("Helix is off.");
  },
  // Function to turn on the helix
  helixOn: function () {
    this.helixStatus = true;
    console.log("Helix is on.");
  },
};

module.exports = { mower, directions };
