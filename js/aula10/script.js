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
/*pessoa.length; // comando lenght retorna a quantidade de items da matriz
pessoa[pessoa.length -1]//retornara o ultimo item
pessoa.push('brasil'); //acrescentara um item no fim da lista
pessoa[pessoa.lenght]="sla" //tambem adiciona um item ao fim da lista
//ao adicionar um valor usando indice muito alto, os indices que estao vazios estao undefineds
Array.isArray(pessoa)//para descobrir se e uma array
*/
//const pessoa = ["rpz", 'rrrr',134];
//pessoa.pop();//metodo que exclui o ultimo item da lista
//pessoa.push("qualquer coisa")//adiciona um item no ultimo lugar da matriz
//pessoa.shift();//remove o primeiro item da matriz (por consequencia os indices sao reorganizados)
//pessoa.unshift("bonitao");//adiciona um item no primeiro lugar da array, reorganizando os indices
//delete pessoa[0]//deleta um item especifico, mas torna o item undefined e nao reorganiza os indices
//pessoa.splice(1,0,"item addd","item add2")
//const lista1 = ["arrox", "leite", "macarrao"];
//const lista2 = ["rox", "riri"];
//const listaupper = lista1.concat(lista2);//concatena duas ou mais arrays
const jogadores = ["biro biro", "ribamar", "pele", "maradona"];
const craques = jogadores.slice(2);//metodo para fatiar uma array(e possivel disponibilizar 2 indices para fatiar uma posiçao especifica da array).
//slice(2,9)
const ordem = jogadores.sort()//ordem alfabetica
jogadores.sort()//para mostra em forma desalfabetica se organiza em alfabetica e depois induz o metodo reverse para inverter.
jogadores.reverse()
//para colocar numeros em ordem numerica e necessario:
const num = [20, 30, 50, 70];
/*num.sort(function (a, b) {
    return a - b;//para inverter basta trocar para b-a
})*/
function maiornumero(array){
    return Math.max.apply(null,array);
}
document.getElementById('teste').innerHTML = maiornumero(num);
function menornumero(array){
    return Math.min.apply(null,array);//menor
}
//para fazer filtragens na array.
const nim = [20, 30, 50, 70];
const maiorque20= numeros.filter(filtragem)
function filtragem(value, index, array){
    return value>20;
}
//nesse caso mostrar apenas valores maiores que 20.
//document.getElementById('teste').innerHTML=pessoa.join(' * ')//troca o separador de itens da array