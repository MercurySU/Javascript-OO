function User(name, cpf){
    this.name = name;
    this.cpf = cpf;
    this.displayInfo = function() {
        console.log(`${this.name} - ${this.cpf}`)
    }
}

const newUser = new User('Suzana','06515374100')
newUser.displayInfo()

//classe --> class User || class Car || class MyStore