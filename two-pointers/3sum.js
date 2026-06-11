/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    if (nums.length === 0) return [];
    let sort = nums.sort((a,b) => a - b);
    let result = [];

    for (let i = 0; i < sort.length; i++){
        if (i > 0 && sort[i] === sort[i-1]) continue;

        let left = i + 1;
        let right = sort.length - 1;

        while (left < right){
            if (sort[i] + sort[left] + sort[right] === 0){
                result.push([sort[i],sort[left],sort[right]]);
                while (sort[left] === sort[left + 1]) left++;
                while (sort[right] === sort[right - 1]) right--;
                left++;
                right--;
            }else if (sort[i] + sort[left] + sort[right] > 0){
                right--;
            }else{
                left++;
            }
        }
    }

    return result;
};