/**
 * @param {string} text
 * @return {number}
 */
var maxNumberOfBalloons = function(text) {
    let map = {b:0, a:0, l:0, o:0, n:0}

    for (let i = 0; i < text.length; i++){
        if (text[i] in map){
            map[text[i]]++;
        }
     }
    return Math.min(map.b, map.a, Math.floor(map.l / 2), Math.floor(map.o / 2), map.n);
};