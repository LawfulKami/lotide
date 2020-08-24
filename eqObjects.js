const assertEqual = function(actual, expected) {
  actual === expected ? console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`) : console.log(`❌❌❌ Assertion Failed: ${actual} !== ${expected}`);
};

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

const eqObjects = function(object1, object2) {
  for (let prop in object1) {
    if (Array.isArray(object1[prop]) && Array.isArray(object2[prop])) {
      if (!eqArrays(object1[prop], object2[prop])) return false;
    } else if (typeof object1[prop] === "object" && typeof object2[prop] === "object") {
      if (!eqObjects(object1[prop], object2[prop])) return false;
    } else {
      if (object1[prop] !== object2[prop]) {
        return false;
      }
    }
  }
  for (let prop in object2) {
    if (Array.isArray(object1[prop]) && Array.isArray(object2[prop])) {
      if (!eqArrays(object1[prop], object2[prop])) return false;
    } else if (typeof object1[prop] === "object" && typeof object2[prop] === "object") {
      if (!eqObjects(object1[prop], object2[prop])) return false;
    } else {
      if (object1[prop] !== object2[prop]) {
        return false;
      }
    }
  }
  return true;
};

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
//eqObjects(ab, ba); // => true

const abc = { a: "1", b: "2", c: "3" };
//eqObjects(ab, abc); // => false
const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
//eqObjects(cd, dc); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
//eqObjects(cd, cd2); // => false

assertEqual(eqObjects(ab, ba), true);
assertEqual(eqObjects(ab, abc), false);
assertEqual(eqObjects(cd, dc), true);
assertEqual(eqObjects(cd, cd2), false);

assertEqual(eqObjects({ a: { z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }), true); // => true
assertEqual(eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }), false); // => false
assertEqual(eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: 1, b: 2 }), false); // => false
assertEqual(eqObjects({ a: { z: 1 }, b: 3 }, { a: { z: 1 }, b: 2 }), false); // => false

module.exports = eqObjects;