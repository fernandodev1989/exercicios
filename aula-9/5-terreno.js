window.onload = function (e) {

    var btn1 = document.getElementById("btn1");

    var inputLargura = document.getElementById("largura");

    var inputComprimento = document.getElementById("comprimento");

    var inputValor = document.getElementById("valor");

    btn1.onclick = function (e) {

        var largura = inputLargura.value;
        var comprimento = inputComprimento.value;
        var valor = inputValor.value; 

        somar(largura, comprimento, valor);

    }

    function somar (largura, comprimento, valor){

        var data = "";

var xhr = new XMLHttpRequest();
xhr.withCredentials = true;

xhr.addEventListener("readystatechange", function() {
  if(this.readyState === 4) {
    var mensagem = this.responseText;
    alert (mensagem);
  }
});

xhr.open("GET", "https://localhost:44370/api/aula8/terreno?largura=" + largura +"&comprimento="+ comprimento +"&valor="+ valor);

xhr.send(data);
    }

}