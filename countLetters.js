const assertEqual = function(actual, expected) {
  actual === expected ? console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`) : console.log(`❌❌❌ Assertion Failed: ${actual} !== ${expected}`);
};

const countLetters = function(sentence) {
  let finalObject = {};
  for (let letter of sentence) {
    if (letter !== " ") finalObject[letter] = 0;
  }
  for (let letter of sentence) {
    if (letter !== " ")finalObject[letter]++;
  }
  return finalObject;
};

console.log(countLetters("lighthouse in the house"));

assertEqual(countLetters("lighthouse in the house").h, 4);