
const entradas = [5, 7, 10, 22, 44];
let i = 0;

function gets() {
    const valor = entradas[i];
    i++;
    return valor;
}

function print() {

}

module.exports = { gets, print};