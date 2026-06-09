/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    const cleanedString = s.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    let left = 0;
    let right = cleanedString.length - 1;
    while (left < right){
        if (cleanedString[left] !== cleanedString[right]){
            return false;
        }
        left++;
        right--;
    }
    return true;
};