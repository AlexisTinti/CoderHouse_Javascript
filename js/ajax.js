
$('#btnCargar').click(function(){
    var esperar = 1000;
    $.ajax({

            url: "informacion.html",
            beforeSend : function(){
                $('#informacion').text('Cargando...');
            } ,
            success : function(data){
                setTimeout(function(){
                    $('#informacion').html(data);
                }, esperar
                );
            }
    });
});
    