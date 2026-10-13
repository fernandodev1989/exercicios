window.onload = function (e) {
    var btn1 = document.getElementById("btn1");

    var caixaNota1 = this.document.getElementById("caixaNota1");

    var caixaNota2 = this.document.getElementById("caixaNota2");


    btn1.onclick = function (e) {
        var nota1 = caixaNota1.value;
        var nota2 = caixaNota2.value;
        
        media(nota1, nota2);

    }
    function media(nota1, nota2) {

        var xhr = new XMLHttpRequest();
xhr.withCredentials = true;

xhr.addEventListener("readystatechange", function() {
  if(this.readyState === 4) {
    var mensagem = this.responseText;
                alert (mensagem);
  }
});

xhr.open("GET", "https://localhost:44370/api/aula8/media?nota1=" + nota1 + "&nota2=" + nota2);

xhr.send();
    }
}    