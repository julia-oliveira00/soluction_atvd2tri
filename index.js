var dadosLista = [];
var emails = [];
var CPFs = [];
var generos = [];
var nascimentos = [];
var telefones = [];

function salvarData(){

    let nomeUser = document.getElementById("nomeUser").value;
    let emailUser = document.getElementById("emailUser").value;
    let userCpf = document.getElementById("userCpf").value;
    let userGenero = document.getElementById("userGenero").value;
    let userBirth = document.getElementById("userBirth").value;
    let telefoneUser = document.getElementById("telefoneUser").value;

    if(nomeUser, emailUser, userCpf, userGenero, userBirth, telefoneUser){
        dadosLista.push(nomeUser);
        emails.push(emailUser);
        CPFs.push(userCpf);
        generos.push(userGenero);
        nascimentos.push(userBirth);
        telefones.push(telefoneUser);
        
        // window.location.href = "pagetwo.html";
        
        criaLista();

        // document.getElementById("nomeUser, emailUser, userCpf, userGenero, userBirth, telefoneUser").value = '';
        // console.log(dadosLista);
    } else {
        alert("Preencha todos os dados!!!");
        document.getElementById('nomeUser').focus();
    }
}

function criaLista(){
    let tabela = document.getElementById("tabela2").innerHTML = "<tr><th>Nome</th><th>Email</th><th>CPF</th><th>Gênero</th><th>Data de Nascimento</th><th>Telefone</th><th>Nome</th></tr>";
    for(let i=0; i <= (dadosLista.length-1); i++){
        tabela += "<tr><td>" + dadosLista[i] + "</td><td>" + emails[i] + "</td><td>" + CPFs[i] + "</td><td>" + generos[i] + "</td><td>" + nascimentos[i] + "</td><td>" + telefones[i] + "</td><td><button onclick='editar(this.parentNode.parentNode.rowIndex)'>Editar</button><button onclick='excluir(this.parentNode.rowIndex)'>Excluir</button></td></tr>";
        document.getElementById('tabela2').innerHTML = tabela;
    }
}

function editar(i){
    document.getElementById('nomeUser, emailUser, userCpf, userGenero, userBirth, telefoneUser').value = dadosLista[(i - 1)];
    dadosLista.splice(dadosLista[(i - 1), 1]);
}

function excluir(i){
    dadosLista.splice((i - 1), 1);
    document.getElementById("tabela").deleteRow(i);}