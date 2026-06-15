/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function(tokens) {
    let stack = [];

    for (let i = 0; i < tokens.length; i++){
        if (tokens[i] === '+' || tokens[i] === '-' || tokens[i] === '*' ||tokens[i] === '/'){
            let num1 = stack.pop();
            let num2 = stack.pop();
            stack.push(calculator(num2, num1, tokens[i]));
        }else{
            stack.push(Number.parseInt(tokens[i]));
            console.log(stack);
        }
        
    }

    return stack.at(-1);
};

function calculator(num1, num2, operator) {
    switch (operator) {
        case '+':
            return num1 + num2;
        case '-':
            return num1 - num2;
        case '*':
            return num1 * num2;
        case '/':
            return Math.trunc(num1 / num2);
        default:
            return "Invalid operator";
    }
}
