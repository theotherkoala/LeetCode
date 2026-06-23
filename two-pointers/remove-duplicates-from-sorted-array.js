/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let res = nums.length;
    let curr = nums[0];
    if (nums.length === 1) return true;
    for (let i = 1; i < nums.length; i++){
        if (nums[i] === curr){
            res--;
        }else {
            curr = nums[i];
        }
    }
    return res;
};