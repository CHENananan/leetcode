/**https://leetcode.cn/problems/min-cost-climbing-stairs/?envType=daily-question&envId=2023-12-17
 * @param {number[]} cost
 * @return {number}
 */
var minCostClimbingStairs = function (cost) {
  const dp = [cost[0], cost[1]];
  for (let i = 2; i <= cost.length; i++) {
    dp[i] = Math.min(dp[i - 1] + (cost[i] ?? 0), dp[i - 2] + (cost[i] ?? 0));
  }
  return dp[cost.length];
};

var minCostClimbingStairs = function (cost) {
  for (let i = 2; i < cost.length; i++) {
    cost[i] += Math.min(cost[i - 1], cost[i - 2]);
  }

  return Math.min(cost[cost.length - 1], cost[cost.length - 2]);
};

let cost = [1, 100, 1, 1, 1, 100, 1, 1, 100, 1];
console.log(minCostClimbingStairs(cost));
