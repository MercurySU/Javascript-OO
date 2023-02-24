//Funcional 

const numeros = [2, 3, 4, 5, 6, 7, 8, 9, 10]

const filtrado = numeros.filter((numero) => numero % 2 === 0).map((numero) => numero * 2) 
// [ 4, 8, 12, 16, 20 ]
console.log(filtrado)

//função pura: chamada mais de uma vez provoca o mesmo result

const e_maior = (valor1, valor2)=> valor1>valor2;
console.log(e_maior(4,13))



