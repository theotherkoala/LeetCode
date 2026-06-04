/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    let map = {};

    for (let i = 0; i < nums.length; i++){
        if (map[nums[i]]){
            map[nums[i]]++;
        }else{
            map[nums[i]] = 1;
        }
    }

    let sortedArray = Object.entries(map).sort((a, b) => b[1] - a[1] );
    let result = [];
    for (let i = 0; i < k; i++){
        result.push(parseInt(sortedArray[i][0]));
    }
    return result;
};