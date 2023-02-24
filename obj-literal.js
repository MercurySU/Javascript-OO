//Sistema de Gerenciamento Joguinhos


const gamers = {  //classe gamer - sinta
    name: "Suzana",
    email:"suzana@adxspace.com.br",
    ativo: true,
    cargo:"player",
    exibeInfo : function(){
        console.log(this.name, this.email) //palabra chave --> this 
    }
}
userHBO.exibeInfo()



Object.setPrototypeOf(admin, user)