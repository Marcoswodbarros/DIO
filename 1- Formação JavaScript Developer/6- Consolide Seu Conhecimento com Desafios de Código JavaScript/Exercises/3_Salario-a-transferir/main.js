// Criando a variável para o parágrafo
const p = document.querySelector('p');

// Criando a variável referente aos benefícios
const beneficios = 0;

// Coletando o valor do salário bruto
const salarioBruto = Number(prompt('Digite o seu salário: '));

// Executando a funcão para calculo do imposto
const impostoCalculado = calculaImposto(salarioBruto);

// Criando a variável referente ao calculo do salário líquido
const salarioLiquido = salarioBruto - impostoCalculado + beneficios;


function calculaImposto(salarioBruto) {
    let impostos = 0;

    if (salarioBruto > 0 && salarioBruto <= 1100) {
        impostos = (5 / 100) * salarioBruto;

    } else if (salarioBruto > 1100 && salarioBruto <= 2500) {
        impostos = (10 / 100) * salarioBruto;

    } else {
        impostos = (15 / 100) * salarioBruto;
    }

    return impostos;
}


function exibeSalario() {
    p.innerHTML = `O salário líquido do colaborador é de: R$ ${salarioLiquido.toFixed(2)}.`;
}

exibeSalario();