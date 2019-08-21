// let number = 0;
// let index = 0;

// do {
//     if (index %2 != 0) {
//   console.log(number);
//   number += index;
  
// }
// index += 1
// }while (number <= 1000);

let number = 0;
for (let index = 0; index <= 1000; index++) {
    if (index %2 != 0) {
        number += index;
        console.log(number);
    }
    else if (number >= 1000) {
        break;
    }
}
