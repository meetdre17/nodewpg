const superHero = {
    name: 'Batman',
    secretName: 'Bruce',
    sidekick: ['Robin', 'Alfred', 'Gordon'],
    strength: 70,
}

console.log(`Name: ${superHero.name}`);
console.log(`SecretName: ${superHero.secretName}`);
console.log(`Sidekick: ${superHero.sidekick}`);
console.log(`Strength: ${superHero.strength}`);
console.log(superHero.speed);

superHero.speed = 80;

console.log(`Speed: ${superHero.speed}`);


