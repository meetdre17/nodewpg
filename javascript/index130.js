const mutants  = ['Professor X','Cyclops','Iceman','Angel','Beast','Phoenix'];
const mutantsSorts = mutants.sort();
const mutantsReverse = mutantsSorts.reverse();

console.log('Original list:', mutants);
console.log('Sorted list:', mutantsSorts);
console.log('Reversed list:', mutantsReverse);
console.log('Mutants separated:',mutants.join(' * '));