/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    let numsCopy = [];

    for (let i=0;i<nums.length;i++){
        console.log(numsCopy);
        console.log(nums[i])
        if (numsCopy.includes(nums[i])){
            return true;
        }else{
            numsCopy.push(nums[i]);
            console.log(numsCopy);
        }
    }
    return false;
};