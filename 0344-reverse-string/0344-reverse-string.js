/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function(s) {
    let left = 0
    let right = s.length-1
    for(let i = 0; i <s.length /2 ;i++ ){
      [s[left], s[right]] = [s[right], s[left]];
      left++
      right--
    }
  return s
};