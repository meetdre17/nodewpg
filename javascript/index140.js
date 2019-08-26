const mutants = ['Professor X','Cyclops','Iceman','Angel','Magneto','Beast','Phoenix','Logan','Gambit'];

const newMutantas = mutants.filter(function(sample) {
    return sample != 'Magneto' && sample != 'Iceman' && sample != 'Gambit';
  });

  console.log(newMutantas);