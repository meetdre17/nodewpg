const numbers = [];
for (let i = 1000; i > 0; i--) {
    numbers.push(i);    
}

const evenNumber = numbers.filter(number => number % 2 === 0);
const oddNumber = numbers.filter(number => number % 2 !== 0);

const filteredEvenNumbers = evenNumber.filter((number, index) => index <= index >= 0 && index < 20);
const filteredOddNumbers = oddNumber.filter((number, index) => index >= 0 && index < 10)

console.log(filteredEvenNumbers);
console.log(filteredOddNumbers)