window.onload = function (e) {
var btn1 = document.getElementById("btn1");
var caixa1 = document.getElementById("caixa1");
var caixa2 = document.getElementById("caixa2");
var caixa3 = document.getElementById("caixa3");

btn1.onclick = function (e) {
    var nome = caixa1.value;
    var valor = caixa2.value;
    var hora = caixa3.value;

    calcular(nome, valor, hora);
}
    
function calcular(nome, valor, hora) {
    var xhr = new XMLHttpRequest();
xhr.withCredentials = true;

xhr.addEventListener("readystatechange", function() {
  if(this.readyState === 4) {
    var mensagem = this.responseText;
    alert(mensagem);
  }
});

xhr.open("GET", "https://localhost:44370/api/aula8/salario?valorHr=" + valor + "&horas=" + hora + "&funcionario=" + nome);
xhr.send();

}

}