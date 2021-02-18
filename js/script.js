
class Tarjeta 
{
    constructor(nombre, marca, numero) 
    {
        this.nombre = nombre;
        this.marca = marca;
        this.numero = numero;
    }
}


class Usuario 
{
    agregarTarjeta(tarjeta)
    {
       const productList = document.getElementById("product-list");
       const element = document.createElement("div");
       element.innerHTML = `
       <div class="card text-center mb-4">
            <div class="card-body">
                 <strong> Nombre Titular </strong>: ${tarjeta.nombre} 
                 <strong> Tipo </strong>: ${tarjeta.marca} 
                 <strong> Num Tarjeta </strong>: ${tarjeta.numero}
                 <a href="#" class="btn btn-danger" name="delete"> Borrar </a>
                 <a href="./Pago.html" class="btn btn-success" name="delete"> Continuar </a>
            </div> 
        </div>`;
        productList.appendChild(element);
    }

    eliminarTarjeta(element)
    {
        if(element.name === "delete")
        {
            element.parentElement.parentElement.parentElement.remove();
        }
    }
   
    resetearForm()
    {
        document.getElementById('product-form').reset();
    }

}



document.getElementById("product-form").addEventListener("submit", function(e)
{
   const nombre = document.getElementById("nombreTarjeta").value;
   const marca = document.getElementById("marcaTarjeta").value;
   const numero = document.getElementById("numeroTarjeta").value;

   const tarjeta = new Tarjeta(nombre, marca, numero);
   const ui = new Usuario();
   ui.agregarTarjeta(tarjeta);
   ui.resetearForm();


   e.preventDefault();
});

document.getElementById("product-list").addEventListener("click", function(e)
{
    const ui = new Usuario();
    ui.eliminarTarjeta(e.target);
})

var totalActual = localStorage.getItem("totalActual");
console.log(totalActual);


    