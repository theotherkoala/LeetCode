/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    if (!matrix || matrix.length === 0 || matrix[0].length === 0) return false;

    for (let i = 0; i < matrix.length; i++){
        if (matrix[i].at(-1) === target){
            return true;
        }
        if (matrix[i].at(-1) > target){
            let left = 0;
            let right = matrix[i].length - 1;
            while (left <= right){
                let mid = left + Math.floor((right - left) / 2);
                if (matrix[i][mid] === target){
                          return true;
                 }else if (matrix[i][mid] > target){
                        right = mid - 1;
                   }else if (matrix[i][mid] < target){
                       left = mid + 1;
            }
            }
            return false;
    }
    }
    return false;
};