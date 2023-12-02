// https://leetcode.cn/problems/first-completely-painted-row-or-column/description/?envType=daily-question&envId=2023-12-01
/**
 * @param {number[]} arr
 * @param {number[][]} mat
 * @return {number}
 */
var firstCompleteIndex = function(arr, mat) {
    let n = mat.length, m = mat[0].length;
    let mp = new Map();
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            mp.set(mat[i][j], [i, j]);
        }
    }
    let rowCnt = new Array(n).fill(0);
    let colCnt = new Array(m).fill(0);
    for (let i = 0; i < arr.length; i++) {
        let [x,y] = mp.get(arr[i]);
        rowCnt[x]++;
        if (rowCnt[x] === m) {
            return i;
        }
        colCnt[y]++;
        if (colCnt[y] ===n) {
            return i;
        }
    }
    return -1;
};
