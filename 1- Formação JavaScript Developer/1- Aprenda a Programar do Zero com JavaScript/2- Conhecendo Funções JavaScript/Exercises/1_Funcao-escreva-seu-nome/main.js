const h1 = document.querySelector('h1');

function escreveNome (nome) {
    h1.innerHTML = `O meu nome é: ${nome}.`;
}

escreveNome('Marcos');