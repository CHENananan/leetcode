// https://leetcode.cn/problems/car-pooling/description/?envType=daily-question&envId=2023-12-02

/**
 * @param {number[][]} trips
 * @param {number} capacity
 * @return {boolean}
 */
var carPooling = function (trips, capacity) {
  let total = 0;
  const distanceArr = new Array(1001).fill(0);

  // 将二维数组转成一维数组，表示每个距离的时候，乘客的上下车情况
  for (let i = 0; i < trips.length; i++) {
    distanceArr[trips[i][1]] += trips[i][0];
    distanceArr[trips[i][2]] -= trips[i][0];
  }

  for (let i = 0; i < distanceArr.length; i++) {
    total += distanceArr[i];
    if (total > capacity) {
      return false;
    }
  }

  return true;
};

const trips = [
    [2, 1, 5],
    [3, 3, 7],
  ],
  capacity = 5;
console.log(carPooling(trips, capacity));
