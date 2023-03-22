const form = document.querySelector('form');

function Login() {
form.addEventListener('submit',function(event){
    event.preventDefault();//enpede o envio do formulario

    //obtendo valores dos inputs

    const email = form.elements.email.value;
    const senha = form.elements.senha.value;

    //objeto de valores
    const usuario = {
        email: email,
        password: senha,
    }

    //enviar meu objeto via ajax
    const xhr = new XMLHttpRequest();
    xhr.open('POST','http://localhost:3333/logar');
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.onload =function() {
        if (xhr.status === 200){
            alert(this.responseText);
        }
    };
    xhr.send(JSON.stringify(usuario))
});
};