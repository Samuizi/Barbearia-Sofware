const { aggregate } = require("../../models/User");

const form = document.querySelector('form');

function cadastrar() {
form.addEventListener('submit',(event)=>{
    event.preventDefault();//enpede o envio do formulario

    //obtendo valores dos inputs

    const name = form.elements.nome.value;
    const age = form.elements.idade.value;
    const email = form.elements.email.value;
    const password = form.elements.senha.value;

    //objeto de valores
    const usuario = {
        name: name,
        age: age,
        email: email,
        password: password,
    }

    //enviar meu objeto via ajax
    const xhr = new XMLHttpRequest();
    xhr.open('POST','http://localhost:3000/cadastro');
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.onload = function() {
        if (xhr.status === 200){
            alert(this.responseText);
        }else{
            alert(this.responseText);
        }
    };
    xhr.send(JSON.stringify(usuario))
});
};
