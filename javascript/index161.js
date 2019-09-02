const person = {
    name: 'Nico',
    age: 38
  }
  
  const properties = Object.keys(person);
  
  properties.forEach(function(property) {
    console.log(person[property]);
  });
  