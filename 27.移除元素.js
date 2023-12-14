/** https://leetcode.cn/problems/remove-element/?envType=study-plan-v2&envId=top-interview-150
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function (nums, val) {
  nums.splice(0, nums.length, ...nums.filter((item) => item !== val));
  return nums.length;
};
console.log(removeElement([3, 2, 2, 3], 3));
