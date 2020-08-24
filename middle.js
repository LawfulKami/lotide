const middle = function(iniArr) {
  let resultArray = [];
  if (iniArr.length < 3) return resultArray;
  if (iniArr.length % 2 !== 0) {
    resultArray.push(iniArr[Math.floor((iniArr.length / 2))]);
  } else {
    resultArray.push(iniArr[((iniArr.length / 2)) - 1]);
    resultArray.push(iniArr[((iniArr.length / 2))]);
  }
  return resultArray;
};

module.exports = middle;
