function validacion () {
if(document.form.email.value===""){

document.form.email.focus()

console.log("el campo email esta vacio pon un usuario para funcionar")

return false

 }
 if(document.form.nombre.value===""){

document.form.nombre.focus()

console.log("el campo de nombre y apellido esta vacio pon tu nombre y apellido para que funcione")

return false

 }
if(document.form.comentarios.value===""){

document.form.comentarios.focus()

console.log("el comentario es requerido deja tu comentario")

return false

}

console.log ('soy la funcion validacion')
return false



}