let numbers = [];

for (let index = 1; index < 1000; index++) {
    numbers.push(index);
}
numbers.map(function(number, index) {
    console.log(`index: ${index}, original number: ${number}, incremented value: ${number + 10}`);
})