function calculateFitness() {
  for (var i = 0; i < population.length; i++) {
    population[i]
    var d = calcDistance(cities, population[i])
    if (d < recordDistance) {
      recordDistance = d;
      bestEver = population[i];
    }
    fitness[i] = 1 / (d + 1);
  }

}

function normalizeFitness() {
  var sum = 0;
  for (var i = 0; i < fitness.length; i++) {
    sum += fitness[i];
  }
  for (var i = 0; i < fitness.length; i++) {
    fitness[i] = fitness[i] / sum;
  }
}

function nextGeneration() {
  var newPopulation = [];
  for (var i = 0; i < population.length; i++) {
    newPopulation[i] = population[i].slice();
    var order = pickOne(population);
  }
  population = newPopulation;
}

function pickOne(list, prob) {
  var index = 0;
  var r = random(1);

  while( r > 0) {
    r = r - prob[index];
    index ++;
  }
  index --;
  return list[index].slice();
}
