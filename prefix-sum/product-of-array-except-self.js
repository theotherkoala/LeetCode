/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    let forwardArr = [];
    let backwardArr = [];
    let start = 1;

    for (let i = 0; i < nums.length; i++){
        forwardArr.push(start);
        start = start * nums[i];
    }
    console.log(forwardArr)

    start = 1;
    for (let i = nums.length-1; i >= 0; i--){
        backwardArr.unshift(start);
        start = start * nums[i];
    }

    console.log(backwardArr);

    return forwardArr.map((item, index) => {
        return item * backwardArr[index];
    });
};