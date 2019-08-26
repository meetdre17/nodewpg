const arithmetic  = {
    add : function (number1, number2) {
        return typeof number1 === 'number' && typeof number2 === 'number' ? `${number1} + ${number2} equals ${number1 + number2}`  : 'Error, parameter needs to be numbers'; 
    },
    subtract: function (number1, number2) {
        return typeof number1 === 'number' && typeof number2 === 'number' ? `${number1} - ${number2} equals ${number1 - number2}`  : 'Error, parameter needs to be numbers'; 
    },
    multiply: function (number1, number2) {
        return typeof number1 === 'number' && typeof number2 === 'number' ? `${number1} * ${number2} equals ${number1 * number2}`  : 'Error, parameter needs to be numbers'; 
    },
    divide: function (number1, number2) {
        return typeof number1 === 'number' && typeof number2 === 'number' ? `${number1} / ${number2} equals ${number1 / number2}`  : 'Error, parameter needs to be numbers'; 
    },
    remainder: function (number1, number2) {
        return typeof number1 === 'number' && typeof number2 === 'number' ? `${number1} % ${number2} equals ${number1 % number2}`  : 'Error, parameter needs to be numbers'; 
    },
}

console.log(arithmetic.add(2, 10));
console.log(arithmetic.subtract(10, 5));
console.log(arithmetic.multiply(3, 100));
console.log(arithmetic.divide(40, 2));
console.log(arithmetic.remainder(20, 2));
