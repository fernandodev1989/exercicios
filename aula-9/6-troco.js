window.onload = function (e) {
    var btn1 = document.getElementById("btn1");
    var inputProduto = document.getElementById("produto");
    var inputQuantidade = document.getElementById("quantidade");
    var inputValorPg = this.document.getElementById("valorPg");

    btn1.onclick = function (e) {
        var produto = inputProduto.value;
        var quantidade = inputQuantidade.value;
        var valorPg = inputValorPg.value;

        calcular(produto, quantidade, valorPg);
    }
    function calcular(produto, quantidade, valorPg) {

        var xhr = new XMLHttpRequest();
xhr.withCredentials = true;

xhr.addEventListener("readystatechange", function() {
  if(this.readyState === 4) {
    var mensagem = this.responseText;
    alert(mensagem);
  }
});

xhr.open("GET", "https://localhost:44370/api/aula8/troco?produto=" + produto +" &quantidade=" + quantidade +"&valorPg="+ valorPg);

xhr.send();
    }



}