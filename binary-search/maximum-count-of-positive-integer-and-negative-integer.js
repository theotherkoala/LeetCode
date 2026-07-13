/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumCount = function(nums) {
    let neg = lowerBound(nums, 0);
    let pos = nums.length - upperBound(nums, 0);
    return Math.max(pos, neg);
};

function lowerBound(nums, target){
    let left = 0;
    let right = nums.length;

    while (left < right){
        mid = Math.floor((left + right)/2);
        if (nums[mid] < target){
            left = mid + 1;
        }else{
            right = mid;
        }
    }
    return left;
}

function upperBound(nums, target){
    let left = 0;
    let right = nums.length;

    while (left < right){
        mid = Math.floor((left + right)/2);
        if (nums[mid] <= target){
            left = mid + 1;
        }else{
            right = mid;
        }
    }
    return left;
}