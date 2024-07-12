const p = document.querySelector('p');

const media = prompt('Digite a sua média: ');

if (media < 5) {
    p.innerHTML = `Você foi REPROVADO com a média: ${media}.`

} else if (media >= 5 && media < 7) {
    p.innerHTML = `Você está em RECUPERAÇÃO com a média: ${media}.`

} else {
    p.innerHTML = `Você foi APROVADO com a média: ${media}.`
}