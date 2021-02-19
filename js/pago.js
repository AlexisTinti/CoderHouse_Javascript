var totalActual = localStorage.getItem("totalActual");
document.getElementById("totalPagar").innerHTML = totalActual;

const elementoSeleccionado = document.querySelector('.opcionCuotas');
elementoSeleccionado.addEventListener('change',(event) => {
resultado = document.querySelector('.resultado');
resultado =  event.target.value ;
resultadoTotal = parseInt(resultado);
});

const calcularBoton = document.querySelector('.calcular');
calcularBoton.addEventListener('click', calculoCuotas);

function calculoCuotas( resultado){ 
    const cuotas = document.querySelector('.opcionCuotas');
    cuotasNumero = cuotas.length;

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
document.getElementById("cantidadCuotas").innerHTML = totalNuevo;
}


