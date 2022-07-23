export const getColors = (value) => {
  if (value <= 25) {
    return ["red", "darkred"];
  }

  if (value <= 60) {
    return ["orange", "darkorange"];
  }

  return ["darkgreen", "green"];
};

export const getText = (value) => {
  if (value <= 25) {
    return "Bad";
  }

  if (value <= 60) {
    return "Normal";
  }
  return "Good";
  // return `${value}`;
};
