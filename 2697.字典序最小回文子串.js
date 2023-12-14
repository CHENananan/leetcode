/** https://leetcode.cn/problems/lexicographically-smallest-palindrome/solutions/2562065/zi-dian-xu-zui-xiao-hui-wen-chuan-by-lee-3knw/?envType=daily-question&envId=2023-12-13
 * @param {string} s
 * @return {string}
 */
var makeSmallestPalindrome = function (s) {
  let strArr = s.split("");
  let left = 0,
    right = s.length - 1;
  while (left <= right) {
    if (strArr[left] !== strArr[right]) {
      if (strArr[left] < strArr[right]) {
        strArr[right] = strArr[left];
      } else {
        strArr[left] = strArr[right];
      }
    }
    left++;
    right--;
  }
  return strArr.join("");
};

let str = "s";
console.log(makeSmallestPalindrome(str));
