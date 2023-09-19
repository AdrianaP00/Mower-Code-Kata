# Solution

## Project Overview

This project aims to create a terminal application for controlling lawnmowers in a green area. The application's main functionalities include defining the size of the mowing area, specifying the starting position and orientation of the lawnmower, and providing a sequence of commands for the lawnmower to follow.

## Input and Commands

- The user is prompted to enter the size of the mowing area in the format "x y"
- For each lawnmower, the user provides initial position and direction in the format "x y DIRECTION"
- A sequence of commands is entered, consisting of "L" (LEFT), "R" (RIGHT), and "M" (MOVE).

## Directions and Commands

- Four cardinal directions are supported:

  - "N" (NORTH)
  - "S" (SOUTH)
  - "E" (EAST)
  - "W" (WEST)

- The lawnmower can rotate left ("L") or right ("R") by 90 degrees without - moving or move forward ("M") one grid point in its current direction.
  - "L" (Rotate Left)
  - "R" (Rotate Right)
  - "M" (Move)

## Simulation

To simulate real-world conditions, the project introduces random obstacles on the mowing area. The presence of these obstacles can influence the lawnmower's behavior.

### Random Obstacles

A function generates random obstacles on the mowing area based on a predefined obstacle probability.

```bash
# Function to put obstacle on plateau
const obstacleProbability = 0.1;

# Add random obstacles to plateau
const addRandomObstacles = (plateau) => {
  for (let y = 0; y < plateau.y; y++) {
    for (let x = 0; x < plateau.x; x++) {
      if (Math.random() < obstacleProbability) {
        plateau.obstaclesPositions.push({ x, y });
      }
    }
  }
};

```

### Architecture

The project is structured into several directories:

- `controller`: Contains code for managing input and output.
- `model`: Defines the object structures used in the project.
- `service`: Manages the business logic of the application.
- `utils`: Provides utility functions and tools.
- `test`: Additionally, unit tests are included in the test directory to ensure the correctness of various project components.

## Future Improvements

The current version of the lawnmower control application serves as a solid foundation, but there are several areas for potential enhancement and expansion:

### Blade managment

Two special functions are included to handle specific situations:

helixOn:

```bash

 helixOn: function () {
    this.helixStatus = true;
    console.log("Helix is on.");
  }

```

helixOff:

```bash

  helixOff: function () {
    this.helixStatus = false;
    console.log("Helix is off.");
  }

```

The "helix" represents the lawnmower's cutting blades.
Will be intresting to turning it on or off for conserving power when the grass is already cut or avoiding damage when encountering obstacles.

### Blade Management

Implement the ability to dynamically adjust the blade's cutting height to optimize grass cutting efficiency based on grass height and terrain conditions.

### Eco-Friendly Mode

Introduce an eco-friendly mode where the lawnmower can autonomously detect and avoid areas with delicate plants, flowers, or wildlife, ensuring minimal disruption to the environment.

### Remote Control

Enable remote control of lawnmower operations through a user-friendly mobile or web application. Users can monitor the mower's progress, modify its route, or schedule mowing sessions from anywhere.

### Autonomous Navigation

Incorporate advanced obstacle detection and avoidance algorithms to allow the lawnmower to autonomously navigate around obstacles without stopping, providing a seamless mowing experience.

### Path Sharing

Implement the capability for lawnmowers to share information about encountered obstacles or challenging terrain with other devices. This sharing can optimize mowing routes for multiple lawnmowers in the same area.
