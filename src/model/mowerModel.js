let mower = {
  x: 0,
  y: 0,
  direction: "N",
  switch: true,
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

  // Function to turn the mower right
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
  move: function (dx, dy) {
    this.x = dx;
    this.y = dy;
  },

  turnOff: function () {
    this.switch = false;
    console.log("Mower is off.");
  },

  turnOn: function () {
    this.switch = true;
    console.log("Mower is on.");
  },

  helixOff: function () {
    this.helixStatus = false;
    console.log("Helix is off.");
  },

  helixOn: function () {
    this.helixStatus = true;
    console.log("Helix is on.");
  },
};

module.exports = { mower };
