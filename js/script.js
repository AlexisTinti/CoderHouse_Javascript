$('.enviar').click(crearTarjeta);
$("#product-list").click(eliminarTarjeta)


function crearTarjeta(e){

    const nombre = $("#nombreTarjeta").val();
    const marca =  $("#marcaTarjeta").val();
    const numero = $("#numeroTarjeta").val();

    const tarjeta = new Tarjeta(nombre, marca, numero);
    const ui = new Usuario();

    ui.agregarTarjeta(tarjeta);
    e.preventDefault();
}

function eliminarTarjeta(e){
    
    const ui = new Usuario();
    ui.eliminar(e.target);
}

class Tarjeta{
    constructor(nombre, marca, numero) {
        this.nombre = nombre;
        this.marca = marca;
        this.numero = numero;
    }}

class Usuario {
    agregarTarjeta(tarjeta){
            
    const productList = $("#product-list");
    const element = $('<div/>');
            element.html( `
            <div class="card text-center mb-4">
                <div class="card-body">
                    <strong> Nombre Titular </strong>: ${tarjeta.nombre} 
                    <strong> Tipo </strong>: ${tarjeta.marca} 
                    <strong> Num Tarjeta </strong>: ${tarjeta.numero}
                    <a href="#" class="btn btn-danger" name="delete"> Borrar </a>
                    <a href="./Pago.html" class="btn btn-success" name="delete"> Continuar </a>
                </div> 
            </div>`);
    productList.append(element);
    }
    eliminar(element){
            if(element.name === "delete"){
                element.parentElement.parentElement.parentElement.remove();
            }
        }
}
var totalActual = localStorage.getItem("totalActual");
console.log(totalActual);
    