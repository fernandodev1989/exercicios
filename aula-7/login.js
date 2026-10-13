window.onload = function (e) {

    var txtEmail = document.getElementById("txtEmail");

    var txtSenha = document.getElementById("txtSenha");

    var btnEntrar = document.getElementById("btnEntrar")

    txtEmail.focus();

    btnEntrar.onclick = function (e) {
        e.preventDefault();

        var email = txtEmail.value;

        var senha = txtSenha.value;

        if (email == "" || senha == "") {
            exibirMensagemErro("Preencha todos os campos.");
        }
        else {
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
            alert("Login feito com sucesso para " + email);

            limpar();
        }

        function limpar() {
               
                txtEmail.value = "";
                txtSenha.value = "";
                txtEmail.focus();
        
        }
    }
};