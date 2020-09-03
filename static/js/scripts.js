function siguiente_campo(actual, siguiente, preventDefault){
    $(actual).on('keydown', function(event){
        if (event.which === 13) {
            if (preventDefault) {
                event.preventDefault();
            }
            $(siguiente).focus();
            $(siguiente).select();
        }
    })
}

function mensaje(mensaje, textoBoton, funcion) {
    $('body').append('<div id="mensajes"></div>');
    var modal = `<div id="divModal" class="modal fade" tabindex="-1" role="dialog" 
                    aria-labelledby="gridSystemModalLabel">
                    <div class="modal-dialog" role="document">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title" id="gridSystemModalLabel">Mensaje del Sistema</h5>
                                <button type="button" class="close" data-dismiss="modal" 
                                        aria-label="Close"><span aria-hidden="true">&times;</span></button>
                            </div>
                            <div class="modal-body">
                                ${mensaje}
                            </div>
                            <div class="modal-footer">
                                <button id="botonAceptar" type="button" class="btn btn-primary"
                                        data-dismiss="modal"> ${textoBoton} </button>
                            </div>
                        </div>
                    </div>
                </div>`;
    $('#mensajes').html(modal);
    $('#divModal').modal('show');
    $('#divModal').on('shown.bs.modal', function (e) {
        $('#botonAceptar').focus();
    });
    $('#divModal').on('hidden.bs.modal', function (e) {
        eval(funcion);
        $('#mensajes').remove();
    });
}

function focus(campo){
    $(campo).select();
}