const sumAll = function(num1, num2) {
    if (!isNumber(num1) || !isNumber(num2) || num1 < 0 || num2 < 0 ) return "ERROR";
    let lowerLimit = Math.min(num1, num2);
    let upperLimit = Math.max(num1, num2);
    let result = 0;

    for (let i = lowerLimit; i <= upperLimit ; i++ ) {
        result += i;
    }
    return result;
};

function isNumber(value) {
    return typeof value === 'number';
}

// Do not edit below this line
module.exports = sumAll;
