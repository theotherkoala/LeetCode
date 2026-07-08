/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function(target, nums) {
    let n = nums.length;
    let left = 0;
    let min = n+1;
    let sum = 0;

    for (let i = 0; i < nums.length; i++){
        sum += nums[i];
        while (sum - nums[left] >= target){
            sum -= nums[left]
            left++;
        }
        if (sum >= target){
            min = Math.min(min, i-left+1);
        }
    }
    if (sum < target) return 0;
    return min;
};