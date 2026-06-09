/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let left = 0;
    let right = height.length - 1;
    let maxResult = 0;

    while (left < right){
        let width = right - left;
        let area = Math.min(height[left],height[right]) * width;
        maxResult = Math.max(area, maxResult);
        if (height[left] <= height[right]){
            left++;
        }else{
            right--;
        }
    }

    return maxResult;
};