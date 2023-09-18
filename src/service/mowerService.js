const { mower } = require("../model/mowerModel");
const { mowerWithCollisionDetection, mowerWithObstacleDetection } = require("../service/plateauService");

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

// Function to allow the movement
const canMove = (dx, dy, plateau) => {
  if (dx < 0 || dy < 0 || dx >= plateau.x || dy >= plateau.y) {
    console.error("Mower can't move outside the plateau");
    return false;
  } else if (mowerWithCollisionDetection(plateau, dx, dy)) {
    console.error("Mower can't move on another mower");
    return false;
  } else if (mowerWithObstacleDetection(plateau, dx, dy)) {
    console.error("Mower can't move on Obstacles");
    return false;
  } else {
    return true;
  }
};

// Function for checking directions before moving
const checkAndMove = (plateau) => {
  let [dx, dy] = directions[mower.direction];
  dx = parseInt(mower.x) + parseInt(dx);
  dy = parseInt(mower.y) + parseInt(dy);

  if (canMove(dx, dy, plateau)) {
    mower.move(dx, dy);

    return;
  } else {
    console.error(
      `Mower stopped at position: ${mower.x} ${mower.y} ${mower.direction}`
    );

    return;
  }
};

module.exports = { moveMower };
