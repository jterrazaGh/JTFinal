function checkInputs() {

    let envio=false;
    const form = document.getElementById('form');
    const usuario = document.getElementById('txtNombre');
    const email = document.getElementById('txtCorreo');
    const telefono = document.getElementById('txtTelefono');

    // trim to remove the whitespaces
    const usuarioValue = usuario.value.trim();
    
    const emailValue = email.value.trim();
    const telefonoValue = telefono.value.trim();

    if (usuarioValue === '') {
        envio = false;
        setErrorFor(usuario, 'No puede dejar el usuairo en blanco');
    } else if(usuarioValue.length <=2){
        envio = false;
        setErrorFor(usuario, 'Escriba al menos 3 letras');
    }
    
    else {
        envio = true;
        setSuccessFor(usuario);
    }

    if (emailValue === '') {
        envio = false;
        setErrorFor(email, 'No puede dejar el email en blanco');
    } else if (!isEmail(emailValue)) {
        envio = false;
        setErrorFor(email, 'No ingreso un email válido');
    } else {
        envio = true;
        setSuccessFor(email);
    }
    if (telefonoValue === '') {
        envio = false;
        setErrorFor(telefono, 'Teléfono no debe ingresar en blanco.');

    }
    else if(!esnumero(telefonoValue))
    {
        envio = false;
        setErrorFor(telefono, 'Escriba solo números');
    } 
    else {
        envio = true;
        setSuccessFor(telefono);
    }
    
    if(envio)
    {
        
        document.getElementById('msenviar').innerHTML="Datos Enviados";
        limpiar();
    }
    else
    {
        document.getElementById('msenviar').innerHTML="";
    }
}

function setErrorFor(input, message) {
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');
    formControl.className = 'form-control error';
    small.innerText = message;
}

function setSuccessFor(input) {
    const formControl = input.parentElement;
    formControl.className = 'form-control success';
}

function isEmail(email) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}
function esnumero(tel) {
    return /^[0-9]*$/.test(tel);
}

function limpiar()
{
    document.getElementById('txtNombre').value="";
    document.getElementById('txtCorreo').value="";
    document.getElementById('txtTelefono').value="";
    document.getElementById('txtComentarios').value="";
}