function salir(){
    location.href='./';
}

function ingresar(){
    console.log('ingresar');
    var usuario_usuario = $('#usuario_usuario').val();
    var clave_usuario = $('#clave_usuario').val();
    if(usuario_usuario.trim() === ''){
        alert('Usuario vacio');
        $('#usuario_usuario').focus();
    } else if(clave_usuario.trim() === ''){
        alert('Contraseña vacia');
        $('#clave_usuario').focus();
    } else {
        console.log('validando contra el servidor');
    }

}