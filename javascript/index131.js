let femaleStudents =['mary', 'aman', 'mercy', 'gwen', 'candice'];
let maleStudents = ['sam,', 'gagan', 'dipo', 'vhrutik', 'nico'];

let students =[femaleStudents, maleStudents];
students.sort();

console.log(students);
console.log('====================');

console.log(`the female students are: ${students[0]}`);

let index = 1
while (index <= 1){
    console.log(`the male students are: ${students[index]}`);
    index++
}

for(let index = 0; index <= 1; index++){
    console.log(students[index]);
}