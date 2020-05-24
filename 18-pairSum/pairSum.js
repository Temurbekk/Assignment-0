function pairSum(nums, target) {
  if (nums.length <= 1) throw "Length is less than 1";
  let map = {};
  for (const num of nums) {
    const subtrahend = target - num;
    if (subtrahend in map) {
      return true;
    } else {
      map[num] = true;
    }
  }
  return false;
}

// Do not edit this line;
module.exports = pairSum;
