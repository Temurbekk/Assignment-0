function sumOfAllOddNumbers(nums) {
  let sum = 0;

  nums.forEach((num) => {
    if (num % 2 === 1) {
      sum++;
    }
  });

  return sum;
}

// Do not edit this line;
module.exports = sumOfAllOddNumbers;
