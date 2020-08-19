//I did a different approach becaus I challenged myself to do it without instruction, here's the result!!

const assertEqual = function(actual, expected) {
  actual === expected ? console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`) : console.log(`❌❌❌ Assertion Failed: ${actual} !== ${expected}`);
};

const countOnly = function(allItems, itemsToCount) {
  let finalObject = {};
  for (let letter in itemsToCount) {
    if (itemsToCount[letter]) {
      finalObject[letter] = 0;
      for (let item of allItems) {
        if (item === letter) finalObject[letter] += 1;
      }
      if (finalObject[letter] === 0) {
        delete finalObject[letter];
      }
    }
  }
  return finalObject;
};

const filterObject = {
  a:true,
  d:true,
  b:false,
  f:true
};

console.log(countOnly(["a" , "a", "b", "c" , "d", "e", "a"], filterObject));

const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];

const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true });

assertEqual(result1["Jason"], 1);
assertEqual(result1["Karima"], undefined);
assertEqual(result1["Fang"], 2);