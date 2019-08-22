function even(number) {
    if (number % 2 ===0) {
        console.log(`${number} is even`)
        return true;
    }else{
        console.log(`${number} is odd`)
        return false
    }
}

even(2);
even(5);
even(3);
even(24);
even(12);