// Criando a classe Pessoa
class Pessoa {
    nome;
    peso;
    altura;

    constructor(nome, peso, altura) {
        this.nome = nome;
        this.peso = peso;
        this.altura = altura;
    }

    calculaImc() {
        return (this.peso / (this.altura * this.altura)).toFixed(2);
    }

    classificaImc() {
        const imc = this.calculaImc();

        if (imc < 18.5) {
            return `Com a média ${imc}, você encontra-se ABAIXO do peso.`

        } else if (imc >= 18.5 && imc < 25) {
            return `Com a média ${imc}, você encontra-se com o peso NORMAL.`

        } else if (imc >= 25 && imc < 30) {
            return `Com a média ${imc}, você encontra-se ACIMA do peso.`

        } else if (imc >= 30 && imc < 40) {
            return `Com a média ${imc}, você encontra-se com o OBESO.`

        } else {
            return `Com a média ${imc}, você encontra-se com o OBESIDADE GRAVE.`
        }
    }
}


// Criando as instâncias da classe Pessoa
const marcos = new Pessoa('Marcos', 65, 1.85);
const amanda = new Pessoa('Amanda', 67, 1.68);
const jose = new Pessoa('José', 70, 1.75);


// Invocando o método 'apresentaImc'
console.log(marcos.classificaImc());
console.log(amanda.classificaImc());
console.log(jose.classificaImc());
