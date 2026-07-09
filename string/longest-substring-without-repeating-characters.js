/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let map = {};
    let left = 0;
    let res = 0;

    for (let i = 0; i < s.length; i++){
        if (!map[s[i]]){
            map[s[i]] = 1;
        }else{
            map[s[i]]++;
        }
        while (map[s[i]] > 1){
            map[s[left]]--;
            left++;
        }
        res = Math.max(res, i - left + 1);
    }

    return res;
};