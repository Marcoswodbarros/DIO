const h1 = document.querySelector('h1');
const peso = 65;
const altura = 1.85;

const imc = (peso / (altura * altura)).toFixed(2);

if (imc < 18.5) {
    h1.innerHTML = `Com a média ${imc}, você encontra-se ABAIXO do peso.`

} else if (imc >= 18.5 && imc < 25) {
    h1.innerHTML = `Com a média ${imc}, você encontra-se com o peso NORMAL.`

} else if (imc >= 25 && imc < 30) {
    h1.innerHTML = `Com a média ${imc}, você encontra-se ACIMA do peso.`

} else if (imc >= 30 && imc < 40) {
    h1.innerHTML = `Com a média ${imc}, você encontra-se com o OBESO.`
    
} else {
    h1.innerHTML = `Com a média ${imc}, você encontra-se com o OBESIDADE GRAVE.`
}
