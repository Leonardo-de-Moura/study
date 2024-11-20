//arrays sao como uma lista de itens, com controle, por ordem de posiçao dentro dele. a diferença entre matrizes e objetos e que matrizes nao tem propriedades, e possivel armazenar tudo em uma array(funcoes,objetos,arrays e etc. diferente de um objeto, os itens sao buscados pelo indice e nao pelo nome.)*/

/*const array = ["ar",
    "ft",
    "mac",
    "rr"];
alert(array[0]); //retorna ar, pois esta indicado o indice 0//*/
/*
const lista = [];
lista[0] = "ar"; //adiciona valores na array

const list = new Array("arr", "eee"); //tambem adiciona

let x = lista[0]//variaveis podem receber elementos de uma matriz//
lista[0] = "cf" //e possivel mudar os valores da matriz
*/
const pessoa = ["rpz", 'rrrr'];
pessoa.length; // comando lenght retorna a quantidade de items da matriz
pessoa[pessoa.length -1]//retornara o ultimo item
pessoa.push('brasil'); //acrescentara um item no fim da lista
pessoa[pessoa.lenght]="sla" //tambem adiciona um item ao fim da lista
//ao adicionar um valor usando indice muito alto, os indices que estao vazios estao undefineds
Array.isArray(pessoa)//para descobrir se e uma array

