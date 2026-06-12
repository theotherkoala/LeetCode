/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let stack = [];
    
    for (let i = 0; i < s.length; i++) {
        let char = s[i];
        
        if (char === '(' || char === '{' || char === '[') {
            stack.push(char);
        }else if (char === ')' && stack.at(-1) === '(') {
            stack.pop();
        } else if (char === '}' && stack.at(-1) === '{') {
            stack.pop();
        } else if (char === ']' && stack.at(-1) === '[') {
            stack.pop();
        }
        }
    
    return stack.length === 0;
};