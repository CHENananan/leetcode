//https://leetcode.cn/problems/climbing-stairs/?envType=daily-question&envId=2023-12-10
/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
  if (n <= 2) return n;
  let dp = [1, 2];
  for (let i = 2; i < n; i++) {
    dp[i] = dp[i - 1] + dp[i - 2];
  }
  return dp[n - 1];
};

console.log(climbStairs(45));
