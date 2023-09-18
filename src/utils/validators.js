const validatePlateau = (plateau) => {
  const regex =/^(?:[0-9]|[1-9][0-9]?)\s(?:[0-9]|[1-9][0-9]?)$/;

  return regex.test(String(plateau));
};

const validateInstruction = (instruction) => {
  const regex = /^[LRM]*$/;
  return regex.test(String(instruction).toUpperCase());
};

const validateDirection = (direction) => {
  const regex = /^(?:[0-9]|[1-9][0-9]?)\s(?:[0-9]|[1-9][0-9]?)\s[NWSE]+$/;

  return regex.test(String(direction).toUpperCase());
};

module.exports = { validateInstruction, validateDirection, validatePlateau };
