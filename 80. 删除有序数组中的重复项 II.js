/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  let n = nums.length;
  if (n <= 2) {
    return n;
  }
  let slow = 2,
    fast = 2;
  while (fast < n) {
    if (nums[slow - 2] != nums[fast]) {
      nums[slow] = nums[fast];
      ++slow;
    }
    ++fast;
  }
  return slow;
};

let arr = [1, 1, 1, 2, 2, 3];
console.log(removeDuplicates(arr));
