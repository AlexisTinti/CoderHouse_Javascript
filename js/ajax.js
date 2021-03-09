/*
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
*/
console.log("esta trayendo bie el ava");
function validacionMail(){
var email = $("#input_mail").val();
console.log(email);

    const settings = {
        "async": true,
        "crossDomain": true,
        "url": "https://mailcheck.p.rapidapi.com/?domain=mailinator.com",
        "method": "GET",
        "headers": {
            "x-rapidapi-key": "45dbd56291msh0e520567a6b88dap1e4d69jsn5ca377c40553",
            "x-rapidapi-host": "mailcheck.p.rapidapi.com"
        }
    };
    /*
    $.ajax(settings).done(function (response) {
        console.log(response);
    });
*/
}
    