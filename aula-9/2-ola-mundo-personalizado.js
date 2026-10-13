window.onload = function (e) {
    var btn1 = document.getElementById("btn1");

    var txt1 = this.document.getElementById("txt1");

    btn1.onclick = function (e) {

        var nome = txt1.value;

        olaMundoPersonalizado(nome);
    };

    function olaMundoPersonalizado(nome) {
    var xhr = new XMLHttpRequest();
xhr.withCredentials = true;

xhr.addEventListener("readystatechange", function() {
  if(this.readyState === 4) {
    var mensagem = this.responseText;

    alert(mensagem);
  }
});

xhr.open("GET", "https://localhost:44370/api/aula8/olaMundoPersonalizado/?nome=" + nome);

xhr.send();

}
};