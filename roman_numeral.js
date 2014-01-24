var map = {
  1: 'I',
  5: 'V',
  10: 'X'
};

function calculate(arabicNumber) {
  var check      = Infinity;
  var currentKey = null;

  if (arabicNumber === 0){
    return '';
  }

  for (var key in map) {
    if (Math.abs(arabicNumber - key) < Math.abs(check)) {
      check = arabicNumber - key;
      currentKey = key;
    }
  }

  if (check < 0) {
    return calculate(Math.abs(check)) + map[currentKey];
  } else {
    return map[currentKey] + calculate(check);
  }
}

module.exports = function romanNumeral(arabicNumber) {

  if (typeof arabicNumber !== "number") {
    throw "Expecting number";
  }

  if (map[arabicNumber]) {
    return map[arabicNumber];
  } else {
    return calculate(arabicNumber);
  }
};
