/**
 * @param {number[]} nums
 * @param {number} pivot
 * @return {number[]}
 */
var pivotArray = function(nums, pivot) {
    let less = []
    let equal = []
    let greater = []

    for (let i = 0; i < nums.length;i++){
        if (nums[i] < pivot){
            less.push(nums[i])
        }else if (nums[i] === pivot){
            equal.push(nums[i]);
        }else{
            greater.push(nums[i]);
        }
    }

    return [...less, ...equal, ...greater]
};