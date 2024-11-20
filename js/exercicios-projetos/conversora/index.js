//funçao para conversão//
function conversao() {
    //escopo da função, na qual esta sendo acionada pelo evento onclick//
    const a = document.getElementById('celsius').value; //inicaliza-se a constante (a), a mesma recebe o valor que o comando retornar após buscar o elemnto com id "celsius" e extrair seu valor.//
    const b = parseFloat(a) || 0;// após extrair o valor e atribui-lo á constante (a) e necessário mudar o tipo primitivo da constante, pois o comando .value retorna uma string e nao um number, isso implicaria em uma saída NaN.
    const c = (b * 1.8) + 32; //nesta linha os calculos de conversão são realizados//
    document.getElementById('resultado').innerText = `valor em farenheit: ${c}`; //para finalizar, e acionado um comando que encontrará o elemento com id "resultado" e adicionará um texto e o valor convertido.//
}





