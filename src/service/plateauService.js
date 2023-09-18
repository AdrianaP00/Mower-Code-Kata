// Function to put obstacle on plateau
const obstacleProbability = 0.1;

// Add random obstacles to plateau
const addRandomObstacles = (plateau) => {
  for (let y = 0; y < plateau.y; y++) {
    for (let x = 0; x < plateau.x; x++) {
      if (Math.random() < obstacleProbability) {
        plateau.obstaclesPositions.push({ x, y });
      }
    }
  }
};

// Add the mower's position to plateau
const addMowerPosition = (plateau, x, y, direction) => {
  plateau.mowerPositions.push({ plateau, x, y, direction });
};
const mowerWithCollisionDetection = (plateau, dx, dy) => {
  plateau.mowerPositions.includes({ dx, dy }) ? true : false;
};

const mowerWithObstacleDetection = (plateau, dx, dy) => {
  plateau.obstaclesPositions.includes({ dx, dy }) ? true : false;
};

module.exports = { addRandomObstacles, addMowerPosition, mowerWithCollisionDetection, mowerWithObstacleDetection };
