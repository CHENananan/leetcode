/**https://leetcode.cn/problems/best-time-to-buy-and-sell-stock/solutions/136684/121-mai-mai-gu-piao-de-zui-jia-shi-ji-by-leetcode-/?envType=study-plan-v2&envId=top-interview-150
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  let max = 0;
  for (let i = 0; i < prices.length; i++) {
    for (let j = i + 1; j < prices.length; j++) {
      if (prices[j] > prices[i]) {
        max = Math.max(max, prices[j] - prices[i]);
      }
    }
  }
  return max;
};

var maxProfit = function (prices) {
  let minPrice = prices[0];
  let maxProfit = 0;
  for (let i = 1; i < prices.length; i++) {
    maxProfit = Math.max(maxProfit, prices[i] - minPrice);
    minPrice = Math.min(minPrice, prices[i]);
  }
  return maxProfit;
};

const prices = [7, 1, 5, 3, 6, 4];
console.log(maxProfit(prices));
