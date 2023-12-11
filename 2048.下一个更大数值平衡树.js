/** https://leetcode.cn/problems/next-greater-numerically-balanced-number/description/?envType=daily-question&envId=2023-12-09
 * @param {number} n
 * @return {number}
 */
var nextBeautifulNumber = function (n) {
  const checkBeautifulNumber = (n) => {
    let flag = true;
    let str = n.toString();
    let strMap = new Map();

    for (let i = 0; i < str.length; i++) {
      strMap.set(str[i], strMap.get(str[i]) + 1 || 1);
    }

    // 遍历strMap
    strMap.forEach((key, value) => {
      if (key.toString() !== value.toString()) {
        flag = false;
      }
    });

    return flag;
  };

  for (let i = n + 1; n < 10e6; i++) {
    if (checkBeautifulNumber(i)) {
      console.log(i);
      return i;
    }
  }
  return 0;
};

const checkBeautifulNumber = (n) => {
  let flag = true;
  let str = n.toString();
  let strMap = new Map();

  for (let i = 0; i < str.length; i++) {
    strMap.set(str[i], strMap.get(str[i]) + 1 || 1);
  }

  // 遍历strMap
  strMap.forEach((key, value) => {
    if (key.toString() !== value.toString()) {
      console.log(key.toString(), value.toString());
      flag = false;
    }
  });

  return flag;
};

// console.log(checkBeautifulNumber(22));
console.log(nextBeautifulNumber(1000000));
