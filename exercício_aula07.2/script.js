const nome = window.prompt('Qual é o seu nome?')

//ALTERNANDO PARA MAIÚSCULAS
document.write(` Seu nome em maiúsculas é: ${nome.toUpperCase()} <br>`)


const ano = Number(window.prompt('Qual é o ano do seu nascimento?'))
const idd = 2026 - ano
document.write(`Você tem ${idd} anos`)

const cidade = window.prompt('Qual é o nome da sua cidade?')
//CONTANDO OS CARACTERES
document.write(`Sua cidade tem ${cidade.length} caracteres.<br>`)

//ALTERNANDO PARA MAIÚSCULAS
document.write(` Sua cidade em maiúsculas é: ${cidade.toUpperCase()} <br>`)

const salario = Number(window.prompt('Digite seu salário: '))
document.write(`Seu salário em real: ${salario.toLocaleString('pt-br', {style:'currency' , currency:'BRL'})} <br>`)

const dol = salario * 0.19
document.write(`Seu salário em dólar: ${dol.toLocaleString('pt-br', {style:'currency' , currency:'USD'})} <br>`)

const eur = salario * 0.16
document.write(`Seu salário em euro: ${salario.toLocaleString('pt-br', {style:'currency' , currency:'EUR'})} <br>`)