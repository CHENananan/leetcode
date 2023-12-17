/**https://leetcode.cn/problems/best-time-to-buy-and-sell-stock-ii/?envType=study-plan-v2&envId=top-interview-150
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  let res = 0;
  let currentPrice = prices[0];
  for (let i = 1; i < prices.length; i++) {
    if (prices[i] > currentPrice) {
      res += prices[i] - currentPrice;
    }
    currentPrice = prices[i];
  }
  return res;
};

// 动态规划

/**
 * 定义状态 dp[i][0] 表示第 i 天交易完后手里没有股票的最大利润，dp[i][1]表示第 i 天交易完后手里持有一支股票的最大利润（i 从 000 开始）。
 * 考虑 dp[i][0]的转移方程，如果这一天交易完后手里没有股票，那么可能的转移状态为前一天已经没有股票，即 dp[i−1][0]，
 * 或者前一天结束的时候手里持有一支股票，即 dp[i−1][1]，这时候我们要将其卖出，并获得 prices[i]的收益。因此为了收益最大化，我们列出如下的转移方程：
 * dp[i][0] = Math.max(dp[i - 1][0], dp[i - 1][1] + prices[i]);
 *
 * 再来考虑 dp[i][1],按照同样的方式考虑转移状态，那么可能的转移状态为前一天已经持有一支股票，即 dp[i−1][1]，
 * 或者前一天结束时还没有股票，即 dp[i−1][0]，这时候我们要将其买入，并减少 prices[i]\的收益。可以列出如下的转移方程：
 * dp[i][1] = Math.max(dp[i - 1][1], dp[i - 1][0] - prices[i]);
 */
var maxProfit = function (prices) {
  const n = prices.length;
  const dp = new Array(n).fill(0).map((v) => new Array(2).fill(0));

  (dp[0][0] = 0), (dp[0][1] = -prices[0]);
  for (let i = 1; i < n; ++i) {
    dp[i][0] = Math.max(dp[i - 1][0], dp[i - 1][1] + prices[i]);
    dp[i][1] = Math.max(dp[i - 1][1], dp[i - 1][0] - prices[i]);
  }
  return dp[n - 1][0];
};

const prices = [7, 6, 4, 3, 1];
console.log(maxProfit(prices));
