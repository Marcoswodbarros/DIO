// Gasto médio de combustível em uma viagem
const h1 = document.querySelector('h1');
const precoEtanol = 4.79;
const precoGasolina = 5.79;
const tipoDeCombustivel = 'Gasolina';
const gastoMedioPorKm = 13;
const distanciaEmKm = 100;


if (tipoDeCombustivel === 'Gasolina') {
    const gastoTotal = (distanciaEmKm / gastoMedioPorKm) * precoGasolina;
    h1.innerHTML = `O valor total gasto em combustível foi de R$ ${gastoTotal.toFixed(2)}.`

} else {
    const gastoTotal = (distanciaEmKm / gastoMedioPorKm) * precoEtanol;
    h1.innerHTML = `O valor total gasto em combustível foi de R$ ${gastoTotal.toFixed(2)}.`
}
