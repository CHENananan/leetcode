/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function (target, nums) {
  let left = 0,
    right = 0;
  let res = nums.length + 1;
  let sum = 0;
  while (right < nums.length) {
    sum += nums[right];
    if (sum >= target) {
      // 不断移动左指针，直到不能再缩小为止
      while (sum - nums[left] >= target) {
        console.log(sum, nums[left]);
        sum -= nums[left++];
      }
      res = Math.min(res, right - left + 1);
    }
    right++;
  }
  return res === nums.length + 1 ? 0 : res;
};

let target = 7,
  nums = [2, 3, 1, 2, 4, 3];
console.log(minSubArrayLen(target, nums));
