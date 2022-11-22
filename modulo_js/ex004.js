// 1) Crie uma classe para representar carros. 
// Os carros possuem uma marca, uma cor e um gasto médio de combustível por Kilômetro rodado.
// Crie um método que dado a quantidade de quilómetros e o preço do combustível nos dê o valor 
// gasto em reais para realizar este percurso.
class Carro {
    constructor (marca, cor, combusKm) {
        this.marca = marca
        this.cor = cor
        this.combusKm = combusKm
    }

    descricao () {
       return console.log(`O ${marca} da cor ${cor} tem um gasto médio de ${this.combusKm}/Km`);
    }
}

const carro1 = new Carro("fiat", "vermelho", 5)
console.log(carro1);