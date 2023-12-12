/**https://leetcode.cn/problems/merge-sorted-array/?envType=study-plan-v2&envId=top-interview-150
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
  let _num1 = nums1.slice(0, m);
  let _num2 = nums2.slice(0, n);
  let res = [];
  let i = 0;
  let j = 0;
  while (i < m && j < n) {
    if (_num1[i] < _num2[j]) {
      res.push(_num1[i]);
      i++;
    } else {
      res.push(_num2[j]);
      j++;
    }
  }
  if (i < m) {
    res = res.concat(_num1.slice(i));
  }
  if (j < n) {
    res = res.concat(_num2.slice(j));
  }
  nums1.splice(0, nums1.length, ...res);
  // return res;
};

let nums1 = [1, 2, 3, 0, 0, 0];
let nums2 = [2, 5, 6];
let m = 3;
let n = 3;
console.log(merge(nums1, m, nums2, n));
