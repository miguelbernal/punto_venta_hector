$('#usuario_usuario').focus();
siguiente_campo('#usuario_usuario','#clave_usuario',false);
siguiente_campo('#clave_usuario','#boton-ingresar',false);

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
        ingresar_ajax(usuario_usuario, clave_usuario);
    }

}

async function ingresar_ajax(usuario_usuario, clave_usuario) {
    var url = 'api/login';
    var data = { usuario_usuario: usuario_usuario, clave_usuario: clave_usuario };
    var parametros = {
        method: 'POST',
        body: JSON.stringify(data)
    };
    var datos = await fetch(url, parametros)
    const json = await datos.json();
    console.log(json);
    if (json.acceso) {
        location.href = "./menu";
    } else {
        alert('Credencial incorrecta');
        $('#usuario_usuario').select();
    }
}