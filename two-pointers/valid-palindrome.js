/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    const cleanedString = cleanUp(s);
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

function cleanUp (s) {
    const valid = 'abcdefghijklmnopqrstuvwxyz0123456789'
    let result = ""

    for (let i = 0; i < s.length; i++){
        let eachChar = s[i].toLowerCase();
        if (valid.indexOf(eachChar) !== -1 ){
            result+= eachChar;
        }
    }
    return result;
}