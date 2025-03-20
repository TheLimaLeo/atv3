class // Classes no JS

class Carro {
  // Nome de classes devem iniciar com a primeira letra maiuscula

  constructor(marca, modelo, ano) {
    this.marca = marca;
    this.modelo = modelo;
    this.ano = ano;
  }

  // metodos
  buzinar() {
    return "Beep! Beep!";
  }

  // criando uma instancia (objeto) da classe carro
}

const carroPopular = new Carro("Fiat", "Uno", "2021");
console.log(
  `O carro ${carroPopular.marca} modelo ${carroPopular.modelo} é do ano ${
    carroPopular.ano
  } e faz ${carroPopular.buzinar()}`
);

// Instancia carroEsportivo
const carroEsportivo = new Carro();
carroEsportivo.marca = "Chevrolet";
carroEsportivo.modelo = "Camaro";
carroEsportivo.ano = "2024";
console.log(`O carro ${carroEsportivo.marca} modelo ${carroEsportivo.modelo} é do ano ${carroEsportivo.ano} e também faz ${carroEsportivo.buzinar()}`);

//adicionando um novo atributo

carroEsportivo.corNeon = "Azul";

//adicionando um novo metodo
carroEsportivo.turbo = function () {
  return "ZUMMMMMMMMMMMMM";
  
};
console.log(`O carro ${carroEsportivo.marca} modelo ${carroEsportivo.modelo} é do ano ${carroEsportivo.ano} e também faz ${carroEsportivo.buzinar()} da cor ${carroEsportivo.corNeon}
que faz ${carroEsportivo.turbo}`)

//CLasse, data e moeda
//Classes no Javascript

class Carro {
  //nome de classes devem iniciar com a primeira letra maiúscula
  //Atributos
  constructor(marca, modelo, ano) {
    this.marca = marca;
    this.modelo = modelo;
    this.ano = ano;
  }
  //Métodos
  buzinar() {
    return "Beep! Beep!";
  }
}

const dataAtual = new Date()
console.log(typeof(dataAtual))

//Pegando o dia atual
const dia = dataAtual.getDate()
console.log(`Hoje é dia ${dia}.`)

//Pegando o mês atual
const mes = dataAtual.getMonth()+1 //Javascript começa a contagem pelo mês 0 zero
console.log(`O mês atual é ${mes}`)

//Pegando o ano atual
const ano = dataAtual.getFullYear()
console.log(`Ano atual : ${ano}`)

//Adicionando dias, meses a nos à data atual
//Adicionar 10 dias à data atual

dataAtual.setDate(dataAtual.getDate()+10);

//Exibe a nova data:
console.log(`Daqui a 10 dias será ${dataAtual.getDate()}.`)

//Adicionar 3 meses à data atual
dataAtual.setMonth(dataAtual.getMonth() + 3);

//Exibe a nova data:
console.log(`Daqui a 3 meses será mês ${dataAtual.getMonth()+1.}`) //adicionar mais um mês devido o erro de contagem de meses no Javascript

//Adicionar 2 anos à data atual
dataAtual.setFullYear(dataAtual.getFullYear()+2);

//Exibe o novo ano 
console.log(`Daqui 2 anos será ${dataAtual.getFullYear()}.`)


////////////////////////////////////
//Trabalhando com moedas no Javascript
//Casa decimal é utilizado o "." . Ex: salário 2500.00

let salario = 2500.30
console.log(salario)
//forçar a exibir as casas decimais
console.log(salario.toFixed(2))

//Ocultando as casas decimais
console.log(salario.toFixed(0))

//Alterando marcador de casa decimal
console.log(salario.toFixed(2).replace('.',','))