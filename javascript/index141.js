const tripExpenses = [30,42,80];
const budget = tripExpenses.reduce(function(trip, expense) {
  return trip + expense;
});

console.log(`hotel: ${tripExpenses[0]}, trip: ${tripExpenses[1]}, meals: ${tripExpenses[2]}`);
console.log(`Total trip budget: ${budget}`);
