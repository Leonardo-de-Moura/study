//aula objetos//
//objetos sao variaveis com muitos valores dentro. os valores dentro sao chamados de propriedades em objetos usa-se sempre o const//
//metodo e uma funçao colocada dentro de uma propriedade
const carro = {
    marca: "ford",
    modelo: "ka",
    ano: 2015,
    placa: "ABC-1234",
    buzina: function () { alert('biiiiiiii') },
    completo: function () {
        return "a marca e:" + this.marca + " e o modelo e" + this.modelo;
    }
};
//alert(carro.ano);//mostrar apenas uma propriedade
//carro.buzina()//chamada do metodo buzina
alert(carro.completo());