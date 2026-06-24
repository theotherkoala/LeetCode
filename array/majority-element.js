/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    let map = {};
    let majority = Math.floor((nums.length)/ 2);

    for (let i = 0; i < nums.length; i++){
        if (map[nums[i]]){
            map[nums[i]]++
        }else{
            map[nums[i]] = 1;
        }
        if (map[nums[i]] > majority){
            return nums[i];
        }
    }
};