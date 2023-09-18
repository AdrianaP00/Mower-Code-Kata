const prompt = require("prompt-sync")();
const { mower } = require("../model/mowerModel");
const { plateau } = require("../model/plateauModel");
const { moveMower } = require("../service/mowerService");
const { addRandomObstacles, addMowerPosition } = require("../service/plateauService");
const { validateInstruction, validateDirection, validatePlateau } = require("../utils/validators");

// Main function to process input
function main() {
  // Read the plateau coordinates
  do {
    plateauInput = prompt(`Enter plateau coordinates (example: 5 5): `).trim();
  } while (!validatePlateau(plateauInput));

  [plateau.x, plateau.y] = plateauInput.split(" ").map(Number);

  let mowerCount = 0;

  addRandomObstacles(plateau);

  do {
    // Increment the mower count
    mowerCount++;

    // Read and validate the mower positions and direction
    do {
      line = prompt(
        `Enter mower ${mowerCount} positions and direction (example: 1 3 N): `
      ).trim().toUpperCase();
    } while (!validateDirection(line));

    // Split the line into coordinates and direction
    [mower.x, mower.y, mower.direction] = line.split(" ");

    // Read and validate the istruction
    do {
      instructions = prompt(
        `Instructions for mower ${mowerCount} (example: LMLMLMLMM): `
      ).trim().toUpperCase();
    } while (!validateInstruction(instructions));

    // Final position of mower based on instructions and plateau
    const [finalX, finalY, finalDirection] = moveMower(instructions, plateau);

    // Set the mower position and direction in the plateau
    addMowerPosition(plateau, finalX, finalY, finalDirection);

    // Print the final position of the mower
    console.log(
      `Final position of mower ${mowerCount}: ${finalX} ${finalY} ${finalDirection}`
    );

    // Function for quit
    exit = prompt(
      `Hit Q to exit or any other key to follow with the next mower: `
    ).trim().toUpperCase();
  } while (exit != "Q");
}

module.exports = { main };
