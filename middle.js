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

const middle = function(iniArr) {
  let resultArray = [];
  if (iniArr.length < 3) return resultArray;
  if (iniArr.length % 2 !== 0) {
    resultArray.push(iniArr[Math.floor((iniArr.length / 2))]);
  } else {
    resultArray.push(iniArr[((iniArr.length / 2)) - 1])
    resultArray.push(iniArr[((iniArr.length / 2))]);
    ;
  }
  return resultArray;
};
console.log(middle([1, 2]));