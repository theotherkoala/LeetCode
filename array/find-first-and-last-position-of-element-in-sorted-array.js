/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

var searchRange = function(nums, target) {
    let start = lowerBound(nums,target);
    if (nums[start] !== target || start > nums.length){
        return [-1, -1];
    }
    let end = lowerBound(nums, target+1) -1;
    return [start, end];
};

function lowerBound(nums, target){
    let left = 0;
    let right = nums.length;

    while (left < right) {
        let mid = Math.floor((left + right)/2);
        if (nums[mid] < target){
            left = mid + 1;
        }else{
            right = mid;
        }
    }
    return left;
}