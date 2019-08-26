let numbers = [];

for (let index = 1; index < 1001; index++) {
    numbers.push(index);
}

let result = 0;
for (let index = 0; index < numbers.length; index++) {
    result +=numbers[index];
    console.log(result);
}

let message = (result === 500500) ? 'Good Job!!!' : 'Take a look to see if something is wrong';
console.log(message);
