function showNumbers(start,end) {
    if (start > end){
        for (let number = start; number >= end; number-=1) {
            console.log(number);
        }
    }else if ((typeof start && typeof end) === 'number' && end > start){
            for (let number = start; number <= end; number++) {
                console.log(number);
            }
    } else if ((typeof end && typeof start) == 'number' && end == start){
            console.log('The numbers are the same. Try different numbers');
    } else if (typeof start != 'number' || typeof end != 'number') {
        console.log('Please input numbers only.');
    }
}
showNumbers(0,10);
showNumbers(10,0);
showNumbers(10,10);
showNumbers('day',300)

// changed the higjest number to 10 to see the printed value properly