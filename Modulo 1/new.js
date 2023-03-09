function User(name, cpf){
    this.name = name;
    this.cpf = cpf;
    this.displayInfo = function() {
        console.log(`${this.name} - ${this.cpf}`)
    }
}

const newUser = new User('Suzana','0010001001') //função construtora
newUser.displayInfo()

//classe --> class User || class Car || class MyStore;
//new User é prototipo de newUser;
//nemUser novo objeto;

function Admin(name, )