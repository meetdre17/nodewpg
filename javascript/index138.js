const mutants = ['Professor X','Cyclops','Iceman','Angel','Magneto','Beast','Phoenix','Logan','Gambit'];

let newMutants = mutants.map(function(sample) {
    if (sample == 'Professor X'|| sample == 'Logan' || sample == 'Phoenix' || sample =='Gambit') {
        return sample = '<3' + ' ' + sample
} else {
    return sample;
} 
});

console.log(mutants);
console.log(newMutants);
