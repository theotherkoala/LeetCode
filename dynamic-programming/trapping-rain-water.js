/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
    const n = height.length;
    let preMax = new Array(n).fill(0);
    preMax[0] = height[0];

    for (let i = 1; i < n; i++){
        preMax[i] = Math.max(height[i], preMax[i-1]);
    }

    let sufMax = new Array(n).fill(0);
    sufMax[n-1] = height[n-1];

    for (let i = n-2; i >= 0; i--){
        sufMax[i] = Math.max(height[i], sufMax[i+1]);
    }

    let res = 0;
    for (let i = 0; i < n; i++){
        res += Math.min(preMax[i], sufMax[i]) - height[i];
    }
    return res;
};