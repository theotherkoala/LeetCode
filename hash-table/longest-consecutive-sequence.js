/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
    let set = new Set(nums);
    let longest = 0;

    for (let num of nums){
        if (set.has(num-1)) continue;
        
        let current = 1;
        while (set.has(num+1)){
            current++;
            num++;
        }

        longest = Math.max(current, longest);
    }
    return longest;
};