const readline = require("readline");

const directions = { N: [0, 1], E: [1, 0], S: [0, -1], W: [-1, 0] };

let x = 0;
let y = 0;
let direction = 'N';

// Function to turn the mower left
const turnLeft = () => {
  switch (direction) {
    case "N":
      direction = "W";
      break;
    case "E":
      direction = "N";
      break;
    case "S":
      direction = "E";
      break;
    case "W":
      direction = "S";
      break;
    default:
      break;
  }
};

// Function to turn the mower right
const turnRight = () => {
  switch (direction) {
    case "N":
      direction = "E";
      break;
    case "E":
      direction = "S";
      break;
    case "S":
      direction = "W";
      break;
    case "W":
      direction = "N";
      break;
    default:
      break;
  }
};

// Function to move the mower
const move = () => {
  const [dx, dy] = directions[direction];
  x += dx;
  y += dy;
};

// Function to process mower instructions
const moveMower = (instructions) => {
  for (const instruction of instructions) {
    switch (instruction) {
      case "L":
        turnLeft();
        break;
      case "R":
        turnRight();
        break;
      case "M":
        move();
        break;
      default:
        console.log("Instruction not recognized");
        break;
    }
  }

  return [x, y, direction];
};

// Main function to process input
function main() {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  // Read the plateau coordinates
  rl.question(
    "Enter plateau coordinates (example: 5 5): ",
    (plateau) => {
      const [plateauX, plateauY] = plateau.split(" ").map(Number);

      console.log(
        "Enter positions and instructions for lawn mowers:"
      );

      // Initialize the mower count
      let mowerCount = 0;

      rl.on("line", (line) => {
        // Split the line into coordinates and direction
        const [x, y, direction] = line.split(" ");

        // Increment the mower count
        mowerCount++;

        // Read instructions
        rl.question(
          `Instructions for mower ${mowerCount} (example: LMLMLMLMM): `,
          (instructions) => {
            // Move the mower and get the new position
            const [finalX, finalY, finalDirection] = moveMower(instructions);

            // Print the final position of the mower
            console.log(
              `Final position of mower ${mowerCount}: ${finalX} ${finalY} ${finalDirection}`
            );

            // Stop input when all mowers have been processed
            if (mowerCount === 2) {
              rl.close();
            }
          }
        );
      });
    }
  );
}

if (require.main === module) {
  main();
}