// let number = 0;
// let index = 0;

// do {
//     number += index 
//     console.log(number);
//     index+=1;
// }
// while (index <= 1000);

let index = 0;
for (let number = 0; index <= 1000; number += index) {
    if (index+=1) {
        console.log(number);
    }
}