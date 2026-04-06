function logar() {
    var usuario = document.getElementById('inputUsuario').value
    var senha = document.getElementById('inputsenha').value

if(usuario == "Davi" || usuario == "Davi@davi.com" && senha == "Davi1234") {
        window.location.href = "home.html"
        Swal.fire({
    title: "Acesso Aceito",
    text: "Dados enviados com sucesso",
    icon: "success"
    });
     }else{
        
       Swal.fire({
    title: "Acesso Negado",
    text: "Usuário/senha incorretos",
    icon: "error"
    });
    }

}