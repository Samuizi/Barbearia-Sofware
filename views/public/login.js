const form = document.querySelector('form');


form.addEventListener('submit',(evn)=>{
    //enpede o envio do formulario

    //obtendo valores dos inputs

    const email = form.elements.email.value;
    const password = form.elements.senha.value;

    //objeto de valores
    const usuario = {
        email: email,
        password: password,
    }

    const ul = JSON.stringify(usuario);

    //enviar meu objeto via ajax
    const xhr = new XMLHttpRequest();
    xhr.open('POST','http://localhost:3000/login');
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.onload = function() {
        if (xhr.status === 200){
            alert(this.responseText);
        }
    };
    xhr.send(ul)

    evn.preventDefault()
});
