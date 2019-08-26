const mutants = ['Professor X','Cyclops','Iceman','Angel','Magneto','Beast','Phoenix','Logan','Gambit'];
const newMutants = [];

mutants.forEach(function(sample) {
    if (sample == 'Iceman'|| sample == 'Logan' || sample == 'Phoenix')
    newMutants.push(sample)
});

const mutantString = newMutants.toString();
console.log(mutantString);
