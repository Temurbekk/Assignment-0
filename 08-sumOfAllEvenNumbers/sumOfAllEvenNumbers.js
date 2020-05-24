function sumOfAllEvenNumbers(nums) {
  let sum = 0;

  nums.forEach((num) => {
    if (num % 2 === 0) {
      sum++;
    }
  });

  return sum;
}

// Do not edit this line;
module.exports = sumOfAllEvenNumbers;
