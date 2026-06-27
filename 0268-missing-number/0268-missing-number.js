/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    let n = nums.length
    let sumFinal =  Math.floor(n*(n+1))/2;
    let sum = 0;
    for(let i =0;i<n;i++){
        sum+=nums[i]
    }
    return sumFinal-sum;
};