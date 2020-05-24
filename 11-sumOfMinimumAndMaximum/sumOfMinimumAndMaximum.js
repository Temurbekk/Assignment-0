function sumOfMinimumAndMaximum(nums) {
  nums.sort((a, b) => {
    a - b;
  });
  return nums[0] + nums[nums.length - 1];
}

// Do not edit this line;
module.exports = sumOfMinimumAndMaximum;
