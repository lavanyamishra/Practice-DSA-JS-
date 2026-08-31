/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
    let p = 0;
    let q = 1;
    while (q < nums.length) {
        if (nums[p] === nums[q]) {
            q++;
        } else {
            p++;
            nums[p] = nums[q];
            q++;
        }
    }
    return p + 1;
};