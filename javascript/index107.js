function biggerNumber(firstNumber, secondNumber) {
    if (typeof firstNumber != 'number' || typeof secondNumber != 'number') {
        console.log(`Please enter a valid number`)
    }
   
    else if ((typeof firstNumber && typeof secondNumber == 'number') && firstNumber > secondNumber) {
        console.log(`Number ${firstNumber} is bigger than ${secondNumber}`);
    } else if ((typeof firstNumber && typeof secondNumber == 'number') && secondNumber > firstNumber){
        console.log(`Number ${secondNumber} is bigger than ${firstNumber}`);
    } else if ((typeof firstNumber && typeof secondNumber == 'number') &&firstNumber === secondNumber){
        console.log(`Both numbers are ${firstNumber}`)
    }
    
 else {
        console.log('Please input numbers');
    }
    
}

biggerNumber(6,3);
biggerNumber(2,2);
