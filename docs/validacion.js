
var eleform = document.getElementById('mensajeForm')

eleform.style.display='none'

function callPhp(objform){
    console.log('recibiendo el ojeto form en la funcion callPhp',objform)
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
    
var objform={ email:'',nombre:'',comentarios:''}

    eleform.style.display='none'


    if(document.form.email.value===""){
        document.form.email.focus()
        eleform.style.display='inline'
        eleform.innerHTML='el campo email es requerido'
        return false
    } else {
        console.log(document.form.email.value)
        objform.email=document.form.email.value
    }


    if(document.form.nombre.value===""){
        document.form.nombre.focus()
        eleform.style.display='inline'
        eleform.innerHTML='el campo de nombre y apellido es requerido'
        return false
    }else{
        console.log(document.form.nombre.value)
        objform.nombre=document.form.nombre.value
    }

    if(document.form.comentarios.value===""){
        document.form.comentarios.focus()
        eleform.style.display='inline'
        eleform.innerHTML='el comentario es requerido deja tu comentario'
        return false
    } else{
        console.log(document.form.comentarios.value)
        objform.comentarios=document.form.comentarios.value
    }

    console.log('soy la funcion validacion', objform)
    return callPhp(objform)
}