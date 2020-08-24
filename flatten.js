const flatten = function(initArray) {
  let resultArray = [];
  for (let x = 0; x < initArray.length; x++) {
    if (Array.isArray(initArray[x])) {
      for (let y = 0; y < initArray[x].length; y++) {
        resultArray.push(initArray[x][y]);
      }
    } else {
      resultArray.push(initArray[x]);
    }
  }
  return resultArray;
};

console.log(flatten([1, 2, [3, 4], 5, [6]]));

module.exports = flatten;