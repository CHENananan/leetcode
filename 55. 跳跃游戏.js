/**https://leetcode.cn/problems/jump-game/solutions/1263859/javascript-55-tiao-yue-you-xi-fan-xiang-5uqdl/?envType=study-plan-v2&envId=top-interview-150
 * 我们需要达到最后一个下标，那么最后一个下标的数字其实是可以不用考虑的
 * 那么我们可以假设只有两个数字（比如 [2,4]），这个时候第一个数字如果是大于等于 1 的数就成立；
 * 如果是三个数字的话（比如 [3,0,4]），第一个数字大于等于 2 时成立。
 * 依此类推，一个数字可以到达的位置必须是这个数字标记的长度值，有：i + nums[i]>=j 成立时才可以到达后面第 j 个目标。
 * 我们记录一个最后一位的下标，然后依次向前寻找满足跳跃条件的下标，并将该下标与记录的下标替换。
 * 重复这个过程直到判断了 nums 的第一个下标为止，最后判断记录值是否为第一个下标，也就是 0 ，如果不是 0 返回 false
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function (nums) {
  // 必须到达end下标的数字
  let end = nums.length - 1;

  for (let i = nums.length - 2; i >= 0; i--) {
    if (end - i <= nums[i]) {
      end = i;
    }
  }

  return end == 0;
};

const nums = [1, 1, 1, 0];
console.log(canJump(nums));
