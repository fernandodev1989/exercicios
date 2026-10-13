window.onload = function (e) {
    var btn1 = document.getElementById("btn1");

    var caixaN1 = this.document.getElementById("caixaN1");

    var caixaN2 = this.document.getElementById("caixaN2");

    btn1.onclick = function (e) {
        var valor1 = caixaN1.value;
        var valor2 = caixaN2.value;
        
        somar(valor1, valor2);

    }
    function somar(valor1, valor2) {
        var data = "";

var xhr = new XMLHttpRequest();
xhr.withCredentials = true;

xhr.addEventListener("readystatechange", function() {
  if(this.readyState === 4) {
    var mensagem = this.responseText;
                alert (mensagem);
  }
});

xhr.open("GET", "https://localhost:44370/api/aula8/somar?valor1=" + valor1 + "&valor2=" + valor2);

xhr.send();
    }
}