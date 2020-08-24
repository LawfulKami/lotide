const words = ["ground", "control", "to", "major", "tom"];

const map = function(arr, action) {
  const results = [];
  for (const element of arr) {
    results.push(action(element));
  }
  return results;
};

const results1 = map(words, word => word[0]);
console.log(results1);

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

assertArraysEqual(results1, ["g", "c", "t", "m", "t"]);

module.exports = map;