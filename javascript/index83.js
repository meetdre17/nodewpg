let star = '**********';
let sliceLength = star.length - 1;

do {
  console.log(star.slice(0,sliceLength));
  sliceLength -=1 ;
}
while (sliceLength >= 1); 
