function getRandom(min, max) {
  return Math.random() * (max - min + 1) + min;
}
console.log(Math.random(1, 100));
