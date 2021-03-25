
var eleform = document.getElementById('mensajeForm')

eleform.style.display='none'

function callPhp(){
let data = {nombres:'maxi'}
    fetch('https://example.com/profile', { method: 'POST', 
    headers: { 'Content-Type': 'application/json', }, 
    body: JSON.stringify(data), }) 
    .then(response => response.json()) 
    .then(data => { console.log('Success:', data); }) 
    .catch((error) => { console.error('Error:', error); });
return false

} 

function validacion () {
    
    eleform.style.display='none'


    if(document.form.email.value===""){
        document.form.email.focus()
        eleform.style.display='inline'
        eleform.innerHTML='el campo email es requerido'
        return false
    }else {
        console.log(document.form.email.value)

    }


    if(document.form.nombre.value===""){
        document.form.nombre.focus()
        eleform.style.display='inline'
        eleform.innerHTML='el campo de nombre y apellido es requerido'
        return false
    }else{
        console.log(document.form.nombre.value)
    }

    if(document.form.comentarios.value===""){
        document.form.comentarios.focus()
        eleform.style.display='inline'
        eleform.innerHTML='el comentario es requerido deja tu comentario'
        return false
    }else{
        console.log(document.form.comentarios.value)
    }

    console.log ('soy la funcion validacion')
    return false
}