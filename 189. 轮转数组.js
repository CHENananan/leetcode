/**https://leetcode.cn/problems/rotate-array/?envType=study-plan-v2&envId=top-interview-150
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function (nums, k) {
  nums.splice(0, 0, ...nums.splice(-(k %= nums.length), k));
};

const nums = [1, 2, 3, 4, 5, 6, 7];
let k = 3;
console.log(...nums.splice(-3, k));
