export const getDetailBackgroundColor = (score) => {
  var color = "";
  switch (true) {
    case score > 69:
      color = "31.5, 52.5, 94.5";
      break;
    case score > 39:
      color = "166, 151, 54 ";
      break;
    case score > 0:
      color = "31.5, 10.5, 10.5, 1";
      break;
    default:
      color = "10.5, 31.5, 31.5";
      break;
  }
  return color;
};

export default getDetailBackgroundColor;
