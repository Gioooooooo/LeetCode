/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function(nums) {
    let left = 0
    let right = nums.length - 1
    let sortedArr = []
    
     for(let i = right ; i >= 0;i--){
       if(Math.abs(nums[left]) < Math.abs(nums[right])){
         sortedArr.unshift(nums[right]**2)
         right--
       }else {
            sortedArr.unshift(nums[left]**2)
            left++;
        }
     }
    
    return sortedArr;
};