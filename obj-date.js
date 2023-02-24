//Date utilizado p datas e hora em JS

const dateHour = Date()
    console.log(dateHour) //Fri Feb 24 2023 11:32:49 GMT-0300 (Horário Padrão de Brasília)
    console.log(typeof dateHour) //string


//criar uma instancia date para guardar as informações
const dataHour2 = new Date() //o new tras os metodos do Date
    console.log(dataHour2) 
    console.log(typeof dataHour2) //object

const dataContructor = dataHour2.getDate()
    console.log(dataContructor) //24 (dia de hoje eu acho)

console.log(dataHour2.getMilliseconds())
console.log(dataHour2.getDay())
console.log(dataHour2.getHours())
console.log(dataHour2.getMonth())
console.log(dataHour2.getFullYear())




//node obj-date.js