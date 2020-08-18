const eqArrays = function(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }

  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
};

const assertArraysEqual = function(arr1, arr2) {
  eqArrays(arr1, arr2) ? console.log(`✅✅✅ Assertion Passed: ${arr1} === ${arr2}`) : console.log(`❌❌❌ Assertion Failed: ${arr1} !== ${arr2}`);
};

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