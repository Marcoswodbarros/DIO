const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 45, 46];

for (let i = 0; i < numeros.length; i++) {

    const numerosGerais = numeros[i];

    if (numerosGerais % 2 == 0) {
        console.log(numerosGerais);
    }
}