window.onload = function (e) {
  var txtEmail = document.getElementById("txtEmail");

  var txtSenha = document.getElementById("txtSenha");

  var btnEntrar = document.getElementById("btnEntrar");

  txtEmail.focus();

  btnEntrar.onclick = function (e) {
    e.preventDefault();

    var email = txtEmail.value;

    var senha = txtSenha.value;

    if (email == "" || senha == "") {
      exibirMensagemErro("Preencha todos os campos.");
    } else {
      login(email, senha);
    }

    function exibirMensagemErro(mensagem) {
      var spnErro = document.getElementById("spnErro");
      if (spnErro) {
        spnErro.innerText = mensagem;
        spnErro.style.display = "block";
        setTimeout(function () {
          spnErro.style.display = "none";
        }, 5000);
      }
    }
    function login(email, senha) {

        var login = {
            "email": email,
            "senha": senha
        };

        var data = JSON.stringify(login);
    
      var xhr = new XMLHttpRequest();
      xhr.withCredentials = true;

      xhr.addEventListener("readystatechange", function () {
        if (this.readyState === 4) {
           
            var loginResult = JSON.parse(this.responseText);

            if (loginResult.sucesso) {
                alert('Logou Fernando!');
            }
            else {
                exibirMensagemErro(loginResult.mensagem);
            }
        }
      });

      xhr.open("POST", "https://localhost:44370/api/usuario/login");
      xhr.setRequestHeader("Content-Type", "application/json");

      xhr.send(data);

      limpar();
    }

    function limpar() {
      txtEmail.value = "";
      txtSenha.value = "";
      txtEmail.focus();
    }
  };
};
