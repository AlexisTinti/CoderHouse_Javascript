
//Se crea añadirACarritoBotones. Dentro, se guardan todos los botones donde exista "addToCart", en posiciones NodeList.
const añadirACarritoBotones = document.querySelectorAll('.addToCart');

//Se usa el metodo forEach para recorrer la lista dentro de añadirACarritoBotones, por cada vez que se haya hecho click a un boton de compra
añadirACarritoBotones.forEach((añadirACarritoBoton) => {
  añadirACarritoBoton.addEventListener('click', añadirACarritoClick);
});

//Se crea comprarBoton. Dentro se guarda el boton de Compra donde exista "compratButton" en posicion 0 NodeList
const comprarBoton = document.querySelector('.comprarButton');

//Se lanza la funcion "comprarBotonClick" al hacer click en el boton de compra
comprarBoton.addEventListener('click', comprarBotonClick);

//Se crea contenedorItemsCarrito. Dentro se guardan el contenedor que muestra la seccion de items ya seleccionados
const contenedorItemsCarrito = document.querySelector(
  '.shoppingCartItemsContainer'
);

//Se crea la funcion añadirACarritoClick donde se guardan en las constantes escritas los valores boton, item, titulo, precio e imagen del boton clickeado por el usuario
function añadirACarritoClick(event) {
  const button = event.target;
  const item = button.closest('.item');

  const tituloItem = item.querySelector('.item-title').textContent;
  const precioItem = item.querySelector('.item-price').textContent;
  const imagenItem = item.querySelector('.item-image').src;

  //Se llama la funcion añadirItemACarrito y se le pasan los parametros tomados anteriormente
  añadirItemACarrito(tituloItem, precioItem, imagenItem);
 
}


//Se crea la funcion añadirItemACarrito, la cual graficara, eliminara o cambiara los elementos que hayan sido añadidos al carrito. y sus cantidades
function añadirItemACarrito(tituloItem, precioItem, imagenItem) {
  //Se crea tituloElementos, que es igual a la cantidad de contenedorItemsCarrito que tengan dentro el nombre de clase "shoppingCartItemTitle"
  const tituloElementos = contenedorItemsCarrito.getElementsByClassName(
    'shoppingCartItemTitle'
  );
  //Se crea un for para recorrer las posiciones dentro de tituloElementos
  for (let i = 0; i < tituloElementos.length; i++) {
    //Si el texto dentro de la posicion i de tituloElementos es exactamente igual al texto dentro de "tituloItem" entonces:
    //Se crea cantidadDeElementos, que seria igual a la cantidad de "shoppingCartItemQuantity" que existen dentro de la posicion i de "tituloElementos"
    if (tituloElementos[i].innerText === tituloItem) {
      let cantidadDeElementos = tituloElementos[i].parentElement.parentElement.parentElement.querySelector('.shoppingCartItemQuantity');
      //se incrementa el valor de cantidadDeElementos +1
      cantidadDeElementos.value++;
      $('.toast').toast('show');
      //se llama a la funcion actualizarTotalCarrito
      actualizarTotalCarrito();
      return;
    }
  }

  //Se crea carritoRow para graficar los elementos
  const carritoRow = document.createElement('div');

  //Se crea contenidoCarrito, donde se grafican los items dentro del carrito
  const contenidoCarrito = `
  <div class="row shoppingCartItem">
        <div class="col-6">
            <div class="shopping-cart-item d-flex align-items-center h-100 border-bottom pb-2 pt-3">
                <img src=${imagenItem} class="shopping-cart-image" width="150px" height="100px">
                <h6 class="shopping-cart-item-title shoppingCartItemTitle text-truncate ml-3 mb-0">${tituloItem}</h6>
            </div>
        </div>
        <div class="col-2">
            <div class="shopping-cart-price d-flex align-items-center h-100 border-bottom pb-2 pt-3">
                <p class="item-price mb-0 shoppingCartItemPrice">${precioItem}</p>
            </div>
        </div>
        <div class="col-4">
            <div
                class="shopping-cart-quantity d-flex justify-content-between align-items-center h-100 border-bottom pb-2 pt-3">
                <input class="shopping-cart-quantity-input shoppingCartItemQuantity" type="number"
                    value="1">
                <button class="btn btn-danger buttonDelete" type="button">X</button>
            </div>
        </div>
    </div>`;

    //Se muestra en carritoRow el contenido graficado en contenidoCarrito
  carritoRow.innerHTML = contenidoCarrito;

  //Se crea un nuevo carritoRow debajo de cada shoppingCartItem
  contenedorItemsCarrito.append(carritoRow);

  //Se busca dentro de carritoRow el elemento que contenga "buttonDelete". Si se clickea el boton, se ejecuta "eliminarItemCarrito"
  carritoRow.querySelector('.buttonDelete').addEventListener('click', eliminarItemCarrito);

 //Se busca dentro de carritoRow el elemento que contenga "shoppingCartItemQuantity". Si se cambia el valor, se ejecuta "cambioCantidad"
  carritoRow.querySelector('.shoppingCartItemQuantity').addEventListener('change', cambioCantidad);

  //Se ejecuta actualizarTotalCarrito
  actualizarTotalCarrito();
}

//Se crea la funcion actualizarTotalCarrito
function actualizarTotalCarrito() {
  let total = 0;
  //Se crea totalCarrito, que tiene el valor de la cantidad de veces que existe shoppingCarTotal
  const totalCarrito = document.querySelector('.shoppingCartTotal');
  //Se crea itemsCarrito, que tiene el valor de la cantidad de veces que existe shoppingCarItem
  const itemsCarrito = document.querySelectorAll('.shoppingCartItem');

  itemsCarrito.forEach((itemCarrito) => {
    const precioItemsCarrito = itemCarrito.querySelector(
      '.shoppingCartItemPrice'
    );
    const precioItemCarrito = Number(
      precioItemsCarrito.textContent.replace('$', '')
    );
    const cantidadItemsCarrito = itemCarrito.querySelector(
      '.shoppingCartItemQuantity'
    );
    const cantidadItemCarrito = Number(
      cantidadItemsCarrito.value
    );
    total = total + precioItemCarrito * cantidadItemCarrito;
  });
  totalCarrito.innerHTML = `${total.toFixed(2)}$`;
  
  guardarLocalStore(total);
}

function guardarLocalStore(total)
{
  var totalActual = total;
  localStorage.setItem("totalActual", totalActual);
 
}

function eliminarItemCarrito(event) {
  const botonClick = event.target;
  botonClick.closest('.shoppingCartItem').remove();
  actualizarTotalCarrito();
}

function cambioCantidad(event) {
  const input = event.target;
  input.value <= 0 ? (input.value = 1) : null;
  actualizarTotalCarrito();
}

function comprarBotonClick() {
  
  window.location.href="./Assets/Compra.html"
  contenedorItemsCarrito.innerHTML = '';
  
}
