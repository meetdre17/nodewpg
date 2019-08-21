// let star = '**********';
// let sliceLength = star.length - 1;

// do {
//   console.log(star.slice(0,sliceLength));
//   sliceLength -=1 ;
// }
// while (sliceLength >= 1); 

let star = '**********';
for (let sliceLength = star.length - 1; sliceLength >= 1; sliceLength -=1) {
    console.log(star.slice(0,sliceLength));
}
