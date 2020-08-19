const letterPositions = function(sentence) {
  sentence.split("");
  const results = {};
  for (let letter of sentence) {
    if (letter !== " ") results[letter] = [];
  }
  for (let i = 0; i < sentence.length; i++) {
    if (sentence[i] !== " ") {
      results[sentence[i]].push(i);
    }
  }
  return results;
};

console.log(letterPositions("lighthouse in the house"));