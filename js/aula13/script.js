/*function cor() {
    let cor = document.getElementById('cor')
        .value;
    cor= cor.tolowerCase();//funçao do js para passar a string para minúsculo, ajudando na comparaçao.
    switch (cor) {
        case "azul":
            document.body.style.backgroundColor = "blue"
            break;
        case "vermelho":
            document.body.style.backgroundColor = "red"
            break;
        case "amarelo":
            document.body.style.backgroundColor = "yellow"
            break;
        default:
            document.getElementById("teste").innerHTML = "nenhuma cor disponivel para:" + cor;
            break;
    }
}/*switch e ideal para quando existir muitas condiçoes ou quando nenhuma condiçao acontecer
esse comando funciona como operador comparativo, ===, ou seja, verifica ate mesmo o tipo primitivo na condiçao.*/
function diadasemana() {
    let dia = new Date().getDay();//esse comando retorna o elemnto de uma array, sendo os indices correspondentes aos dias da semana. 0-domingo, 6-sabado.
    console.log(dia);
    switch (dia) {
        case 0:
            document.getElementById("teste").innerHTML = "domingo"
            break;
        case 1:
            document.getElementById("teste").innerHTML = "segunda"
            break;
        case 2:
            document.getElementById("teste").innerHTML = "terça"
            break;
        case 3:
            document.getElementById("teste").innerHTML = "quarta"
            break;
        case 4:
            document.getElementById("teste").innerHTML = "quinta"
            break;
        case 5:
            document.getElementById("teste").innerHTML = "sexta"
            break;
        case 6:
            document.getElementById("teste").innerHTML = "sabado"
            break;
        default:
            document.getElementById("teste").innerHTML = "nao sei que dia é"
            break;
    }
}