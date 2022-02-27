function divisible(a) {
  let count = 0;
  for (let i of a) {
    if (i % 2 === 0 && i > 15) {
      count++;
    }
  }
  return count;
}
console.log(divisible([2, 3, 12, 18, 42, 24]));
console.log(divisible([100, 84, 37]));
console.log(divisible([5, 8, 6, 12]));

module.exports = divisible;
