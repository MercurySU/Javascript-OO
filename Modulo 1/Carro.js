//criando uma classe com de carro 
export default class Carro {   //export to use in qqr file out the class.js, sintaxe nova
    constructor(marca, model, placa, color, seguro){
        this.marca = marca;
        this.model = model;
        this.placa = placa;
        this.color = color;
        this.seguro = seguro;
    }
}

const novo_carro = new Carro ('Chevrolet','Picape','BSB1313','Vermelho',false)
console.log(novo_carro)
