window.onload = function (e) {
    var btn1 = document.getElementById("btn1");
    var caixaDeTexto1 = document.getElementById("caixaDeTexto1");
    var caixaDeTexto2 = document.getElementById("caixaDeTexto2");

    btn1.onclick = function (e) {
        var distancia = caixaDeTexto1.value;
        var litros = caixaDeTexto2.value;

        calcular(distancia, litros);
    }
    function calcular(distancia, litros) {
        var xhr = new XMLHttpRequest();
xhr.withCredentials = true;

xhr.addEventListener("readystatechange", function() {
  if(this.readyState === 4) {
    var mensagem = this.responseText;
    alert(mensagem);
  }
});

xhr.open("GET", "https://localhost:44370/api/aula8/consumo?distancia="+ distancia + "&litros="+ litros);

xhr.send();
    }

}