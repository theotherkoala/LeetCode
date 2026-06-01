/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    if (s.length !== t.length) return false;
    let map = {};

    for (let i =0; i < s.length; i++){
        let letter = s[i];
        if (map[letter]){
            map[letter]++;
        }else{
            map[letter] = 1;
        }
    }
console.log(map)
    for (let i=0; i < s.length; i++){
        let letter = t[i];
        console.log(letter)
        if (map[letter]){
            map[letter]--;
        }else{
            return false;
        }
        if (map[letter] < 0){
            return false;
        }
    }
    return true;
};