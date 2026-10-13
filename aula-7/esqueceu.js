window.onload = function (e) {

    var txtEmail = document.getElementById("txtEmail");

    var btnRecuperar = document.getElementById("btnRecuperar");

    txtEmail.focus();

    btnRecuperar.onclick = function (e) {
        e.preventDefault();

        var email = txtEmail.value;

        if (email == "") {
            exibirMensagemErro("Digite um Email válido.");
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
        alert("Sua senha de recupeção foi enviada para o " + email);
    }

    function limpar() {
        txtEmail.value = "";
        txtEmail.focus();
    }
};