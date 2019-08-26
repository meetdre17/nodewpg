const firstPerson = ['Sam','Enik','Tallgrass Cresent',28];
// const firstPerson = ['Olu','Deshegs','Grant Ave',24];
// const secondPerson = ['Olu','Deshegs','Grant Ave',24];
const secondPerson = ['Sam','Enik','Tallgrass Cresent',28];

const first = firstPerson.reduce(function(name, info) {
    return name + ' ' + info;
  });

  const second = secondPerson.reduce(function(name1, info1) {
    return name1 + ' ' + info1;
  });


  console.log(`${first} and ${second}`);
  console.log('          ');
  if (first === second) {
      console.log('Are the same people')
} else {
    console.log('Are not the same people')
};


  