/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    let max = nums[0];
    let currMax = 0;

    for (let i = 0; i < nums.length; i++){
        if (currMax < 0){
            currMax = 0;
        }
        currMax += nums[i];
        max = Math.max(max, currMax);
    }
    return max;
};