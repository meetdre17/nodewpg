const mutants  = ['Professor X','Cyclops','Iceman','Angel','Magneto','Beast','Phoenix','Logan','Gambit'];

for (let index = 0; index < mutants.length; index++){
    if (mutants[index] != 'Magneto') {
      console.log(mutants[index]);
    } else {
      break;
    }
  }

console.log('             ');
  magnetoPosition = mutants.indexOf('Magneto')
console.log('Magneto Position:', magnetoPosition);

console.log('             ');

for (let index = 0; index < mutants.length; index++){
    if (mutants[index] != 'Magneto') {
      console.log((index) + ' ' + mutants[index].toUpperCase());
    }
  }

