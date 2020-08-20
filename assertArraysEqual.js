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
  const inspect = require('util').inspect;
  eqArrays(arr1, arr2) ? console.log(`✅✅✅ Assertion Passed: ${inspect(arr1)} === ${inspect(arr2)}`) : console.log(`❌❌❌ Assertion Failed: ${inspect(arr1)} !== ${inspect(arr2)}`);
};

assertArraysEqual([1 ,2 ,3], [1, 2, "3"]);
assertArraysEqual([1 ,2 ,3], [1, 2, undefined]);