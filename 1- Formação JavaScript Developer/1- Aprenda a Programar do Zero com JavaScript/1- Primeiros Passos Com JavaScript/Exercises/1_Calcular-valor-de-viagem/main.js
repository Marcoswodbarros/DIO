// Gasto médio de combustível em uma viagem
const h1 = document.querySelector('h1');
const precoCombustivel = 5.79;
const gastoMedioPorKm = 13;
const distanciaEmKm = 100;

const gastoTotal = (distanciaEmKm / gastoMedioPorKm) * precoCombustivel;
h1.innerHTML = `O valor total gasto em combustível foi de R$ ${gastoTotal.toFixed(2)}.`
