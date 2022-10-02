const getRand = (min, max) => {
  if (min < 0 || max < 0) {
    return -1;
  }
  if (min > max) {
    [min, max] = [max, min];
  }
  return Math.random() * (max - min + 1)  + min;
};
const checkLen = (str, max = 500) => str.length <= max;
getRand();
checkLen();
