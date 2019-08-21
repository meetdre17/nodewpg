let star = '**********';
let sliceLength = star.length - 9;

while (sliceLength <= 10) {
  console.log(star.slice(0,sliceLength));
  sliceLength ++ ;
}
