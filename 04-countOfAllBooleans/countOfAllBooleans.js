function countOfAllBooleans(arr) {
  let counter = 0;

  arr.forEach((number) => {
    if (typeof number === "boolean") {
      counter++;
    }
  });

  return counter;
}

// Do not edit this line;
module.exports = countOfAllBooleans;
