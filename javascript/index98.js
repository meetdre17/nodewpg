let number = 0;
for (let index = 0; index <= 1000; index++){
    let newNumber = number += index;
    if (number <= 400) {
        console.log(newNumber);
    }
    else {
        break;
    }
}
