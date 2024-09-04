const h1 = document.querySelector('h1');

const nota1 = 8;
const nota2 = 7;
const nota3 = 10;

const media = (nota1 + nota2 + nota3) / 3;

if (media <= 5) {
    h1.innerHTML = `Você foi reprovado com a média ${media.toFixed(2)}.`
    
} else if (media > 5 && media < 7) {
    h1.innerHTML = `Você ficou com a média ${media.toFixed(2)}, logo, encontra-se em RECUPERAÇÃO.`
    
} else {
    h1.innerHTML = `Você ficou com a média ${media.toFixed(2)}, logo, encontra-se em APROVADO.`
}