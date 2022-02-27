function highestSum(x, y) {
  let sumX = 0;
  let sumY = 0;
  let outPut = 0;
  for (let i = 0; i < x.length; i++) {
    sumX = sumX + x[i];
  }
  for (let i = 0; i < y.length; i++) {
    sumY += y[i];
  }
  if (sumX > sumY) {
    outPut = sumX;
  } else if (sumY > sumX) {
    outPut = sumY;
  }
  return outPut;
}
console.log(highestSum([2, 5, 1, 0, 5, 7], [2, 3, 5, 6, 2, 1]));
console.log(highestSum([15, 7], [12, 17]));
console.log(highestSum([30], [3, 6, 2, 6]));

module.exports = highestSum;
