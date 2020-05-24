function frequencyCounter(word) {
  let map = {};
  for (let char of word) {
    map[char] = map[char] + 1 || 1;
  }
  return map;
}

// Do not edit this line;
module.exports = frequencyCounter;
