const h1 = document.querySelector('h1');

const precoEtiqueta = 100;
const formaDePagamento = 'Prazo';
const numeroDePrazo = 5;


if (formaDePagamento === 'Débito') {
    h1.innerHTML = `O valor a ser pago é de <br> R$ ${calculaPreco(precoEtiqueta, 10)}.`;

} else if (formaDePagamento === 'Dinheiro' || formaDePagamento === "Pix") {
    h1.innerHTML = `O valor a ser pago é de <br> R$ ${calculaPreco(precoEtiqueta, 15)}.`;

} else if (formaDePagamento === 'Prazo' && numeroDePrazo == 2) {
    h1.innerHTML = `O valor a ser pago é de <br> R$ ${(precoEtiqueta).toFixed(2)}.`;
    
} else if (formaDePagamento === 'Prazo' && numeroDePrazo > 2) {
    h1.innerHTML = `O valor a ser pago é de <br> R$ ${calculaPrecoPrazo(precoEtiqueta, 10)}.`;
}


function calculaPreco (valor, desconto) {
    return (
        (valor - (valor * (desconto / 100))).toFixed(2)
    );
}


function calculaPrecoPrazo (valor, desconto) {
    return (
        (valor + (valor * (desconto / 100))).toFixed(2)
    )
}