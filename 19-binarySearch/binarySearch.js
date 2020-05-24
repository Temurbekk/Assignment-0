class MySolution {
  constructor() {
    this.flag = false;
  }

  binarySearch(nums, target) {
    const search = (nums, target, left, right) => {
      if (left > right) return false;

      const middle = Math.floor((right - left) / 2) + left;
      if (nums[middle] === target) {
        return true;
      } else if (nums[middle] > target) {
        return search(nums, target, 0, middle - 1);
      } else {
        return search(nums, target, middle + 1, right);
      }
    };

    return search(nums, target, 0, nums.length - 1);
  }
}

// Do not edit this line;
let StudentSolution = MySolution;
module.exports = StudentSolution;
