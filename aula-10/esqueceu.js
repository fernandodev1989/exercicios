window.onload = function (e) {
  var txtEmail = document.getElementById("txtEmail");

  var btnRecuperar = document.getElementById("btnRecuperar");

  txtEmail.focus();

function validarEmail(email) {
  const padrao = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return padrao.test(email);
}

  btnRecuperar.onclick = function (e) {
    e.preventDefault();

    var email = txtEmail.value;

    if (email == "") {
      exibirMensagemErro("Digite um Email válido.");
    } 
    else if (!validarEmail(email)) {
        exibirMensagemErro("Formato invalido!");
    }
    else {
      recuperar(email);
    }
    limpar();
  };

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
  function recuperar(email) {
    var data = JSON.stringify({
      email: email,
    });

    var xhr = new XMLHttpRequest();
    xhr.withCredentials = true;

    xhr.addEventListener("readystatechange", function () {
      if (this.readyState === 4) {
        var result = JSON.parse(this.responseText);
        if (result.sucesso) {
          alert("e-mail enviado com sucesso!!");
        } else {
          exibirMensagemErro(result.mensagem);
        }
      }
    });

    xhr.open("POST", "https://localhost:44370/api/usuario/esqueceusenha");
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.send(data);
  }

  function limpar() {
    txtEmail.value = "";
    txtEmail.focus();
  }
};
