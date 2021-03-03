var totalActual = localStorage.getItem("totalActual");
$("#totalPagar").html(totalActual);

const elementoSeleccionado = document.querySelector('.opcionCuotas');
elementoSeleccionado.addEventListener('change',(event) => {
resultado = document.querySelector('.resultado');
resultado =  event.target.value ;
resultadoTotal = parseInt(resultado);
});

const calcularBoton = document.querySelector('.calcular');
calcularBoton.addEventListener('click', calculoCuotas);

function calculoCuotas(){ 
    const cuotas = document.querySelector('.opcionCuotas');
    cuotasNumero = cuotas.length;
    console.log(cuotas.length);

    for (let i = 0; i < cuotasNumero; i++) {
        let numeroCuota = cuotas[i].innerText;
        if(numeroCuota == resultadoTotal ){
            var totalNuevo = totalActual / numeroCuota;
            mostrarTotal(totalNuevo);
            break;
        }
    }
}

function mostrarTotal(totalNuevo){
$("#cantidadCuotas").html(totalNuevo);
}


