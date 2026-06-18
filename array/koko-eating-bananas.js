/**
 * @param {number[]} piles
 * @param {number} h
 * @return {number}
 */
var minEatingSpeed = function(piles, h) {
    let l = 1;
    let r = Math.max(...piles);
    let res = 0;

    while (l <= r){
        let mid = Math.floor((l + r)/2);
        let k = 0;
        for (let pile of piles){
            k += Math.ceil(pile/mid);
        }
        if (k <= h){
            res = mid;
            r = mid -1;
        }else{
            l = mid + 1;
        }
    }
    return res;

};