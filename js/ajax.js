
function validacionMail(){
    var email = $("#input_mail").val();

    const settings = {
        "async": true,
        "crossDomain": true,
        "url": "https://mailcheck.p.rapidapi.com/?domain="+email,
        "method": "GET",
        "headers": {
            "x-rapidapi-key": "45dbd56291msh0e520567a6b88dap1e4d69jsn5ca377c40553",
            "x-rapidapi-host": "mailcheck.p.rapidapi.com"
        }
    };
    
    $.ajax(settings).done(function (response) {
        if(response.valid) {
            $("#formulario").submit();
        } else {
            $("#alerta").text("El email ingresado no es válido");
        }
    });
  }
    