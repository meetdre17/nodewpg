const mutants  = ['Professor X','Cyclops','Iceman','Angel','Beast','Phoenix'];
const mutants2 = [... mutants];
const mutants3 = [... mutants2];
const mutantsSorts = mutants3.sort();
const mutantsReverse = mutants2.reverse();

console.log(`Original list: ${mutants}`);
console.log(`Sorted list:': ${mutantsSorts}`);
console.log(`Reversed list:': ${mutantsReverse}`);
console.log(`Mutants separated: ${mutants.join(' * ')}`);