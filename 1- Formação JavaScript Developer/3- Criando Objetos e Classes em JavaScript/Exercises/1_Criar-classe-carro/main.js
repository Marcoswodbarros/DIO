// Criando variáveis para salvar as informações sobre a distância e o preço
const distancia = 100;
const precoGasolina = 5.65;


// Criando a classe carro
class Carro {
    marca;
    cor;
    kmPorLitro;
    gastoComGasolina;

    constructor(marca, cor, kmPorLitro) {
        this.marca = marca;
        this.cor = cor;
        this.kmPorLitro = kmPorLitro;
    }

    apresentaInformacoes() {
        this.gastoComGasolina = ((precoGasolina / this.kmPorLitro) * distancia).toFixed(2);

        console.log(` Marca: ${this.marca}\n Cor: ${this.cor}\n Km/L: ${this.kmPorLitro}`);
        console.log(`Total gasto no trajeto: R$ ${this.gastoComGasolina}`);
    }
}


// Criando instâncias (objeto) da classe carro
const sandero = new Carro('Renault', 'Branco', 14);
const hb20 = new Carro('Volkswagen', 'Preto', 14.1);
const classic = new Carro('Volkswagen', 'Azul', 13.3);


// Executando o método 'apresentaInformacoes'
sandero.apresentaInformacoes();
hb20.apresentaInformacoes();
classic.apresentaInformacoes();
