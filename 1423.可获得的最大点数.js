// https://leetcode.cn/problems/maximum-points-you-can-obtain-from-cards/description/?envType=daily-question&envId=2023-12-03
/**
 * 由于此题是从首部或者尾部取一个数，所以选取完k个数后剩下部分则是连续排列的数值最小的点数，于是此题转而去求最小的连续字数
 */

/**
 * @param {number[]} cardPoints
 * @param {number} k
 * @return {number}
 */

var maxScore = function (cardPoints, k) {
  let min = Infinity;
  let total = 0;
  let _k = cardPoints.length - k;

  for (let i = 0; i < cardPoints.length; i++) {
    total += cardPoints[i];

    let count = 0;
    for (let j = i; j < i + _k; j++) {
      if (i > cardPoints.length - _k) {
        break;
      }
      count += cardPoints[j];
    }

    if (count !== 0) {
      min = Math.min(min, count);
    }
  }

  return _k === 0 ? total : total - min;
};

// 优化
var maxScore = function (cardPoints, k) {
  const n = cardPoints.length;
  // 滑动窗口大小为 n-k
  const windowSize = n - k;
  // 选前 n-k 个作为初始值
  let sum = 0;
  for (let i = 0; i < windowSize; ++i) {
    sum += cardPoints[i];
  }
  let minSum = sum;
  for (let i = windowSize; i < n; ++i) {
    // 滑动窗口每向右移动一格，增加从右侧进入窗口的元素值，并减少从左侧离开窗口的元素值
    sum += cardPoints[i] - cardPoints[i - windowSize];
    minSum = Math.min(minSum, sum);
  }
  let totalSum = 0;
  for (let i = 0; i < n; i++) {
    totalSum += cardPoints[i];
  }
  return totalSum - minSum;
};

const cardPoints = [9, 7, 7, 9, 7, 7, 9],
  k = 7;

console.log(maxScore(cardPoints, k));
