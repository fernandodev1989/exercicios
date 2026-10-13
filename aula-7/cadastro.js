window.onload = function (e) {

    var txtNome = document.getElementById("txtNome");

    var txtSobrenome = document.getElementById("txtSobrenome");

    var txtEmail = document.getElementById("txtEmail");

    var txtTelefone = document.getElementById("txtTelefone");

    var slcOpcoes = document.getElementById("slcOpcoes");

    var txtSenha = document.getElementById("txtSenha");

    var btnCadastrar = document.getElementById("btnCadastrar");

    txtNome.focus();

    btnCadastrar.onclick = function (e) {

        e.preventDefault();

        var nome = txtNome.value;

        var sobrenome = txtSobrenome.value;

        var email = txtEmail.value;

        var telefone = txtTelefone.value;

        var genero = slcOpcoes.value;

        var senha = txtSenha.value;

        if (nome == "" || sobrenome == "" || email == "" || telefone == "" || genero == "" || senha == "") {
            exibirMensagemErro("Por favor, preencha todos os campos.");
        }
        else {
            cadastrar(nome, sobrenome, email, telefone, genero, senha);
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

    function cadastrar(nome, sobrenome, email, telefone, genero, senha) {
        alert("Cadastro realizado com sucesso para " + email);
    }

    function limpar() {
        txtNome.value = "";
        txtSobrenome.value = "";
        txtEmail.value = "";
        txtTelefone.value = "";
        txtSenha.value = "";
        txtNome.focus();
    }
};

       
