const h1 = document.querySelector('h1');

function escrevaSeuNome (nome) {
    return (
        `O meu nome é ${nome}`
    );
}


function escrevaSuaIdade (idade) {
    h1.innerHTML = `${escrevaSeuNome('Marcos')} e eu tenho ${idade} anos de idade.`
}

escrevaSuaIdade(18);