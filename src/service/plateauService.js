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
const addMowerPosition = ( plateau, x, y ) => {
  plateau.mowerPositions.push({ x, y });
};
const mowerWithCollisionDetection = (plateau, x, y) => {
  return plateau.mowerPositions.some((position) => position.x === x && position.y === y);
};
const mowerWithObstacleDetection = (plateau, dx, dy) => {
  return plateau.obstaclesPositions.some((position) => position.x === dx && position.y === dy);
};

module.exports = { addRandomObstacles, addMowerPosition, mowerWithCollisionDetection, mowerWithObstacleDetection };
