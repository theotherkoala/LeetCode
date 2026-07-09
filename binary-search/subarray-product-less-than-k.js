/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var numSubarrayProductLessThanK = function(nums, k) {
    if (k <= 1) return 0;
    let left = 0;
    let res = 0;
    let prod = 1;

    for (let i = 0; i < nums.length; i++){
        prod *= nums[i];
        while (prod >= k){
            prod /= nums[left];
            left++;
        }
        res += i - left + 1;
    }
    return res;
};