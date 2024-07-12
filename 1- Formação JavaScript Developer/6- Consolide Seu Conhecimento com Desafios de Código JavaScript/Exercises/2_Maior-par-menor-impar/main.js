const p = document.querySelector('p');
const p2 = document.querySelector('.p2');

const numeros = [5, 10, 20, 30, 40, 50, 97, 98, 3, 0, 904];
let maiorNumero = 0;
let menorNumero = Infinity;


function encontraMaiorNumeroPar(numeros) {

    for (let i = 0; i < numeros.length; i++) {

        if (numeros[i] > maiorNumero && numeros[i] % 2 == 0) {
            maiorNumero = numeros[i];
            p.innerHTML = `O maior número par do Array é: ${maiorNumero}.`;
            console.log(maiorNumero);

        }
    }

}


function encontraMenorNumeroImpar(numeros) {

    for (let i = 0; i < numeros.length; i++) {

        if (numeros[i] < menorNumero && numeros[i] % 2 !== 0) {
            menorNumero = numeros[i];
            p2.innerHTML = `O menor número impar do Array é: ${menorNumero}.`;
        }
    }

}

encontraMaiorNumeroPar(numeros);
encontraMenorNumeroImpar(numeros);