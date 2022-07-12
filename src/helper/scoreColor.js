export const getScoreColor = (score) => {
  var color = "";
  switch (true) {
    case score > 69:
      color = "1, 210, 119";
      break;
    case score > 39:
      color = "222, 225, 20";
      break;
    case score > 0:
      color = "248, 13, 13";
      break;
    default:
      color = "125, 122, 127";
      break;
  }
  return color;
};

export default getScoreColor;
