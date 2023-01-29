/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    let zero = 0;
  let nonZero = 0;
  while (nonZero < nums.length) {
    if (nums[nonZero] !== 0) {
      const temp = nums[nonZero];
      nums[nonZero] = nums[zero];
      nums[zero] = temp;
      zero++;
    }
    nonZero++;
  }
  return nums;
};