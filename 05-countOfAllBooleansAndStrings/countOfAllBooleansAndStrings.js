function countOfAllBooleansAndStrings(arr) {
  let counter = 0;

  arr.forEach((number) => {
    if (typeof number === "boolean" || typeof number === "string") {
      counter++;
    }
  });

  return counter;
}

// Do not edit this line;
module.exports = countOfAllBooleansAndStrings;
