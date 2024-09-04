const h1 = document.querySelector('h1');

const precoEtiqueta = 100;
const formaDePagamento = 'Débito';
const numeroDePrazo = 2;


if (formaDePagamento === 'Débito') {
    h1.innerHTML = `O valor a ser pago é de <br> R$ ${(precoEtiqueta - (precoEtiqueta * 0.1)).toFixed(2)}.`;

} else if (formaDePagamento === 'Dinheiro' || formaDePagamento === "Pix") {
    h1.innerHTML = `O valor a ser pago é de <br> R$ ${(precoEtiqueta - (precoEtiqueta * 0.15)).toFixed(2)}.`;

} else if (formaDePagamento === 'Prazo' && numeroDePrazo == 2) {
    h1.innerHTML = `O valor a ser pago é de <br> R$ ${(precoEtiqueta).toFixed(2)}.`;
    
} else if (formaDePagamento === 'Prazo' && numeroDePrazo > 2) {
    h1.innerHTML = `O valor a ser pago é de <br> R$ ${(precoEtiqueta + (precoEtiqueta * 0.1)).toFixed(2)}.`;

}