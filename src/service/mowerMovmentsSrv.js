const { mower } = require("../model/mowerModel");

// Definition of variables for grid
const directions = { N: [0, 1], E: [1, 0], S: [0, -1], W: [-1, 0] };

// Function to process mower instructions
const moveMower = (instructions, plateau) => {
  for (const instruction of instructions) {
    switch (instruction) {
      case "L":
        mower.turnLeft();
        break;
      case "R":
        mower.turnRight();
        break;
      case "M":
        checkAndMove(plateau);
        break;
      default:
        console.error("Instruction not recognized");
        break;
    }
  }

  return [mower.x, mower.y, mower.direction];
};

const checkAndMove = (plateau) => {
  let [dx, dy] = directions[mower.direction];
  dx = parseInt(mower.x) + parseInt(dx);
  dy = parseInt(mower.y) + parseInt(dy);

  if (canMove(dx, dy, plateau)) {
    mower.move(dx, dy);
  }
};

const canMove = (dx, dy, plateau) => {
  if (dx > 0 && dy > 0 && dy <= plateau.x && dy <= plateau.y) {
    return true;
  } else {
    console.error("Mower can't move outside the plateau");
    return false;
  }
};

module.exports = { moveMower };
