function clickMenu(){
    if (itens.style.display == 'block'){
        itens.style.display = 'none'
    } else {
        itens.style.display = 'block'
    }
}
var usuarios = [
    { nome: "Fulano", email: "fulano@email.com", senha: "senha123"},
    { nome: "Ciclano", email: "ciclano@email.com", senha: "outrasenha"}
  ];
  
  function cadastrar() {
    var nome = document.getElementById("inome").value;
    var email = document.getElementById("iemail").value;
    var senha = document.getElementById("isen").value;
    for (var i = 0; i < usuarios.length; i++) {
      if (usuarios[i].email === email) {
        alert("E-mail já cadastrado");
        return;
      }
    }
        usuarios.push({ nome: nome, email: email, senha: senha });
    alert("Usuário cadastrado com sucesso");
  }
  
  function login() {
    var email = document.getElementById("lemail").value;
    var senha = document.getElementById("lsen").value; 
    for (var i = 0; i < usuarios.length; i++) {
      if (usuarios[i].email === email && usuarios[i].senha === senha) {
        alert("Bem-vindo, " + usuarios[i].nome);
        return;
      }
    }
    alert("E-mail ou senha incorretos");
  }