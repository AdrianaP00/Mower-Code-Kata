const prompt = require("prompt-sync")();
const { mower } = require("../model/mowerModel");
const { plateau } = require("../model/plateauModel");
const { moveMower } = require("../service/mowerMovmentsSrv");
const { validateInstruction, validateDirection, validatePlateau } = require("../utils/validators");

// Main function to process input
function main() {
  // Read the plateau coordinates
  do {
    plateauInput = prompt(`Enter plateau coordinates (example: 5 5): `);
  } while (!validatePlateau(plateauInput));

  [plateau.x, plateau.y] = plateauInput.split(" ").map(Number);

  let mowerCount = 0;

  do {
    // Increment the mower count
    mowerCount++;

    // Read the mower positions and direction
    do {
      line = prompt(
        `Enter mower ${mowerCount} positions and direction (example: 1 3 N): `
      );
    } while (!validateDirection(line));

    // Split the line into coordinates and direction
    [mower.x, mower.y, mower.direction] = line.split(" ");

    do {
      instructions = prompt(
        `Instructions for mower ${mowerCount} (example: LMLMLMLMM): `
      ).toUpperCase();
    } while (!validateInstruction(instructions));

    const [finalX, finalY, finalDirection] = moveMower(instructions, plateau);

    // Print the final position of the mower
    console.log(
      `Final position of mower ${mowerCount}: ${finalX} ${finalY} ${finalDirection}`
    );

    // Function for quit
    exit = prompt(
      `Hit Q to exit or any other key to follow with the next mower: `
    );
  } while (exit.toUpperCase() != "Q");


}

module.exports = { main };
