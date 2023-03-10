import Carro from "./Carro.js"

class Vendedor {
    constructor(name, cpf){
        this.name = name
        this.cpf = cpf
    }
}

const novoVendedor = new Vendedor('camila','08398298')
console.log(novoVendedor)
 