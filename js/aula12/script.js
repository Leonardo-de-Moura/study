/*var hora = new Date().getHours();
alert(hora);
if(hora<12){
    alert('bom dia')
}
else if (hora<18){
    alert('boa tarde')
}
else{
    alert('boa noite')
}*/
function verificar() {
    let nome = document.getElementById('input').value;
    if (nome == "" || nome == null) {
        let p = document.getElementById('teste')
        p.innerHTML = "o campo nao pode ser vazio";
        p.style.color = "red";

    }
    else{
        let p = document.getElementById('teste')
        p.innerHTML = "parabens, tudo certo";
        p.style.color = "green";
    }
}