const h1 = document.querySelector('h1');

function verificaIdade (idade) {

    if (idade >= 18) {
        h1.innerHTML = `Você tem ${idade} anos, logo, já é maior de idade.`;
        
    } else {
        h1.innerHTML = `Você tem ${idade} anos, ou seja, ainda é menor de idade.`;
    }
}

verificaIdade(17);