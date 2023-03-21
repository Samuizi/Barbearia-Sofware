const form = document.querySelector('form');

function cadastrar() {
form.addEventListener('submit',function(event){
    event.preventDefault();//enpede o envio do formulario

    //obtendo valores dos inputs

    const nome = form.elements.nome.value;
    const idade = form.elements.idade.value;
    const email = form.elements.email.value;
    const senha = form.elements.senha.value;

    //objeto de valores
    const usuario = {
        nome: nome,
        idade: idade,
        email: email,
        senha: senha,
    }

    //enviar meu objeto via ajax
    const xhr = new XMLHttpRequest();
    xhr.open('POST','/cadastro');
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.onload =function() {
        if (xhr.status === 200){
            alert('Usuário cadastrado com sucesso!');
        }else{
            alert('Ocorreu um erro ao cadastrar o usuário.')
        }
    };
    xhr.send(JSON.stringify(usuario))
});
};
