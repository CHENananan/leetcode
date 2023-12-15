/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
  // 创建一个Map对象
  let map = new Map();
  // 遍历数组
  for (let i = 0; i < nums.length; i++) {
    // 判断map中是否存在当前元素，若存在，则将当前元素的值加1，若不存在，则将当前元素作为key，值为1
    map.set(nums[i], (map.get(nums[i]) || 0) + 1);
  }
  // 定义最大值和结果变量
  let max = 0;
  let res = 0;

  // 遍历map，获取最大值和对应的key
  map.forEach((value, key) => {
    // 判断当前值是否大于最大值，若大于，则将当前值赋值给最大值，将当前key的值赋值给结果变量
    console.log(value, key);
    if (value > max) {
      max = Math.max(max, value);
      res = key;
    }
  });
  // 返回结果变量
  return res;
};

let arr = [3, 2, 3];
console.log(majorityElement(arr));
