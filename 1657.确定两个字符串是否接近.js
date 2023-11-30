// 1657. 确定两个字符串是否接近
// https://leetcode.cn/problems/determine-if-two-strings-are-close/description/

/**
 * @param {string} word1
 * @param {string} word2
 * @return {boolean}
 */
var closeStrings = function (word1, word2) {
  if (word1.length !== word2.length) {
    return false;
  }
  let map1 = new Map();
  let map2 = new Map();
  for (let i = 0; i < word1.length; i++) {
    map1.set(word1[i], (map1.get(word1[i]) || 0) + 1);
    map2.set(word2[i], (map2.get(word2[i]) || 0) + 1);
  }
  // key和value都相同
  let arr1 = Array.from(map1.keys()).sort();
  let arr2 = Array.from(map2.keys()).sort();
  let arr3 = Array.from(map1.values()).sort((a, b) => a - b);
  let arr4 = Array.from(map2.values()).sort((a, b) => a - b);

  if (arr1.join("") !== arr2.join("")) {
    return false;
  }
  if (arr3.join("") !== arr4.join("")) {
    return false;
  }
  return true;
};

// 优化
var closeStrings = function (word1, word2) {
  let count1 = new Array(26).fill(0),
    count2 = new Array(26).fill(0);
  for (let i = 0; i < word1.length; i++) {
    count1[word1.charCodeAt(i) - 97]++;
  }
  for (let i = 0; i < word2.length; i++) {
    count2[word2.charCodeAt(i) - 97]++;
  }
  console.log(count1, count2);
  for (let i = 0; i < 26; i++) {
    if (
      (count1[i] > 0 && count2[i] == 0) ||
      (count1[i] == 0 && count2[i] > 0)
    ) {
      return false;
    }
  }
  count1.sort();
  count2.sort();
  console.log(count1.toString(), count2.toString());
  return count1.toString() == count2.toString();
};

console.log(closeStrings("cabbbaa", "abbaccc"));
