
var eleform = document.getElementById('mensajeForm')

eleform.style.display='none'


function validacion () {
eleform.style.display='none'
if(document.form.email.value===""){

document.form.email.focus()
eleform.style.display='inline'

eleform.innerHTML='el campo email es requerido'


return false

 }
 if(document.form.nombre.value===""){

document.form.nombre.focus()
eleform.style.display='inline'

eleform.innerHTML='el campo de nombre y apellido es requerido'


return false

 }
if(document.form.comentarios.value===""){

document.form.comentarios.focus()
eleform.style.display='inline'

eleform.innerHTML='el comentario es requerido deja tu comentario'


return false

}

console.log ('soy la funcion validacion')
return false



}