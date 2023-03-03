//Criando classe gamer com base no diagrama UML Joguinhos

const gamer = {
    name: "suzana",
    email:"suzana@adxspace.com.br",
    ativo: true,
    charge:"gamer",
    displayInfo(){
        console.log(this.name, this.charge)
    }
}
gamer.displayInfo()

const display = function(){
    console.log(this.email)
}
display()//undefined, no context

const displayEmail = display.bind(gamer)
displayEmail() //botei em contexto com a função bind que trabalha com o this


//herança de protótipo - this 

//for commit
