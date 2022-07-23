export const getColors = (value) => {
  if (value <= 25) {
    return ["red", "darkred"];
  }

  if (value <= 60) {
    return ["orange", "darkorange"];
  }

  return ["darkgreen", "green"];
};
