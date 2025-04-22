"use strict";
/*
let variavel = 10;
let numero:number = 10
let string:string = "isso é uma string"
const boleano = true //false
let vetorString:string[] = []
const vetor:number[] = []

//adicionar um valor no vetor
vetor.push(10)
vetorString.push("sheron")
console.log(vetor)
 
let nomeMateria:string = "Frameworks I"
console.log(nomeMateria)

//objetos em javascript

const objEstudante = {
    nome:"sheron",
    idade:16,
    cpf:"076.818.091-30",
}
objEstudante.cpf = "123.456.789-10"
console.log(objEstudante)

//crie um vetor com dois objetos de Estudante
//nome, cpf, idade
//mostre no console.log

const vetorobj2Estudante2 = [{
    Nome: "sheron",
    Idade: 16,
    CPF: "053.575.17.100",},
    {
    Nome: "vespa",
    Idade: 33,
    CPF: "07979252101",
    }]

console.log(vetorobj2Estudante2)

//type
type PessoaType = {
    nome: string,
    idade: number | string;
}

const objPessoa:PessoaType = {
    nome: "Lucas",
    idade: 30
}

objPessoa.idade = "16"

// Podemos colocar mais de um tipo de para um objeto/Variável`

let numString:string|number = 10
numString = "10"

// Em objetos podemos utilizar a | também

const objComMaisDeUmTipo:{nome:string|number} = {
    nome:"Thamires"
}

// Com isso podemos colocar uma propriedade de um objeto com mais de um tipo de dados.

// Agora passamos para funções.
// Funções em JavaScript

function soma(a,b){
    return a+b;
}
const resultado = soma(10,20)
console.log(`O resultado da soma é: ${resultado}`)

// 4 outras formas de escrever a função
function somaA(a:number,b:number){
    return a+b;
}

const somaB = function somaA(a,b):number|undefined{
    return a+b;
}

const somaC = (a:number,b:number):number[]=>{
    return [a+b];
}

const somaD = (a:any,b:any)=>a+b;




//crie uma função que receba um vetor e some
//os numeros do vetor

//somaNumeros([1,2,3,4])
//10

//quando o vetor passado for vazio:
//retorna undefined
  


  function somaNumeros(v) {
    if (v.length === 0) return undefined
    let s = 0
    for (let i = 0; i < v.length; i++) s += v[i]
    return s
  }
  
  console.log(somaNumeros([1, 2, 3, 4]))
  console.log(somaNumeros([]))
  

  //resposta
  // Cria a função que recebe um vetor vazio, passando uma tipagem do vetor e passando o tipo de retorno da função
function SomaNumeros2(vetor2: number[]): number | undefined {
    // Declaração de IF, se o tamanho do vetor for 0 retorna undefined
    if (vetor2.length == 0) {
        return undefined;
    }
     
    // Declaração de variável soma
    let soma = 0;
    // Passa Declaração de FOR loop para somar os valores do vetor
    for (let i = 0; i < vetor2.length; i++) {
        soma += vetor2[i];
    }
    return soma;
}

console.log(SomaNumeros2([1, 2, 3, 4]));


//crie uma função que receba um vetor e um numero
//sua função deve somar as posições do vetor elevado
//ao recebido por parametro


//exemplo
//somaElevado([1,2,3],2) //12

//se o vetor for vazio devolva undefined

function somaElevado (vector:number[], numero:number){
    if (vector.length === 0) return undefined
    let soma = 0
    for (let i = 0; i < vector.length; i++) {
        soma = soma + (vector[i] ** numero)
    }
    return soma;
}

console.log(somaElevado([2, 2, 2], 2));


//faça uma função que receba 2 numeros e devolva um vetor
// da sequencia dos numeros

//ex sequencia(10,16)// [10,11,12,13,14,15,16]
//ex sequencia(10,11)// [10,11]
//ex sequencia(10,5)// [10,9,8,7,6,5]
//ex sequencia(10,10)// [10]

//tres funções de vetores
//MAP
//filter
//find

const vetor:number[] = [1,2,3,4,5]
const result = vetor.map((x) =>x+2)
console.log(result)

//atividade
//crie uma função que receba um vetor
//e devolva um vetor onde cadac elemento
//do novo vetor é uma soma do valor antigo
//mais o numero 2

// ex: soma2([1,1,1,3]) // [3,3,3,5]
// ex: soma2([4,4,4,5])

function soma2(vetor:number[]){
    return vetor.map((x)=>x+2)
}
console.log

/**
 * tambem são funções de vetores
 * .find -> procurar
 * .filter -> filtrar

const vetor = [1, 2, 3, 4, 5];
function predicado(valorBuscando: number): boolean {
    if (valorBuscando < 6) {
        return true;
    } else {
        return false;
    }
}
console.log(vetor.filter(predicado));  */
/**
* Assincronidades -> caracteristicas
* tambem do javascript de
* nao executar as linhas de codigo em sequencia.
* Promises
* then / cathc
* Await / async
*/
//promises
//  function demora(){  
//     const pro = new Promise((resolve, reject) => {
//         setTimeout(()=>{
//             if(Math.random()<0.5){
//                 resolve("dados!!!")
//                 }
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
//           else{
//             reject("ma hoy, mas nao funciona néh")
//           }
//         },1000)
//     })
//     return pro
// }
// console.log("Início de Código. ")
// //then /catch
// const resultado = demora()
// resultado.then((dados)=>{console.log("resultado promessa:"+dados)})
// .catch((erro)=>{console.log(erro)})
// console.log("Executei CONSOLE2. ")
/*
*await / async
*/
/**
 * novo javascript	 trouxe esse novo conceito de await e async
 * await -> é pra vc ficar esper\ando algo assincrono (async)
 *
 * nao podemos usar await sem ser em uma função assincrona(async)
 */
//  async function aux(){
//     try{
//    const resultado = await demora()
//    console.log("dados apos await"+ resultado)
// }
// catch(erro){
//     console.log("erro no try/catch"+erro)
// }
//     aux()
// }
// catch(erro){
//     console.log(erro)
// }
const promise_1 = __importDefault(require("mysql2/promise"));
const access = {
    host: "localhost",
    user: 'root',
    password: "",
    database: 'banco1023b',
    port: 3306
};
const conn = promise_1.default.createConnection(access);
conn
    .then((conn) => {
    console.log("Conectou no banco");
    conn.query("SELECT * FROM estudantes")
        .then(query => {
        //const resultado = query[0]
        //const estruturaTabela = query[1]
        const [resultado, estruturaTabela] = query;
        console.log(resultado);
    })
        .catch((erro) => {
        if (erro.code === "ER_NO_SUCH_TABLE") {
            console.log("ERRO: Não existe a tabela que você está tentando usar. Crie a tabela no banco de dados.");
        }
        else if (erro.code === "ER_PARSE_ERROR") {
            console.log("ERRO: VOCÊ DIGITOU SUA QUERY DE FORMA ERRADA. CONFIRA OS PARENTESES, VIRGULAS E NOME DAS COLUNAS");
        }
        else {
            console.log(erro);
        }
    });
    conn.end()
        .then(() => console.log("Finalizei a conexão"))
        .catch(() => console.log("Não Finalizei a conexão"));
    //.finally(()=>console.log("Não importa se executou o THEN OU CATCH vou executar o FINALLY"))
})
    .catch(erro => {
    console.log("Não conectou :(");
    if (erro.code === "ECONNREFUSED") {
        console.log("ERRO: LIGUE O LARAGÃO!!! CABEÇA!");
    }
    else if (erro.code === "ER_BAD_DB_ERROR") {
        console.log("ERRO: CONFIRA O NOME DO BANCO DE DADOS OU CRIE UM NOVO BANCO COM O NOME QUE VOCÊ COLOCOU LÁ NA CONEXÃO");
    }
    else if (erro.code === "ER_ACCESS_DENIED_ERROR") {
        console.log("ERRO: CONFIRA O USUÁRIO E SENHA NA CONEXÃO");
    }
    else {
        console.log(erro);
    }
});
