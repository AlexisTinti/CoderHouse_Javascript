const añadirACarritoBotones = $('.addToCart').click(añadirACarritoClick);
const comprarBoton = $('.comprarButton').click(comprarBotonClick);

const contenedorItemsCarrito = $('.shoppingCartItemsContainer');

function añadirACarritoClick(event) {
  const item = $(event.target).closest('.item');

  const tituloItem = item.find('.item-title').text();
  const precioItem = item.find('.item-price').text();
  const imagenItem = item.find('.item-image').attr('src');

  añadirItemACarrito(tituloItem, precioItem, imagenItem);
}
function añadirItemACarrito(tituloItem, precioItem, imagenItem) {
  const tituloElementos = contenedorItemsCarrito.find('shoppingCartItemTitle');

  for (let i = 0; i < tituloElementos.length; i++) {

    if (tituloElementos[i].text() === tituloItem) {
      let cantidadDeElementos = tituloElementos[i].$(this).closest('.shoppingCartItemQuantity');
      cantidadDeElementos.value++;
      $('.toast').toast('show');
      actualizarTotalCarrito();
      return;
    }
  }
  const carritoRow = $('<div/>');

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

  carritoRow.html(contenidoCarrito);
  contenedorItemsCarrito.append(carritoRow);
  carritoRow.find('.buttonDelete').click(eliminarItemCarrito);

  carritoRow.find('.shoppingCartItemQuantity').change(cambioCantidad);
  actualizarTotalCarrito();
}

var totalLS;
function actualizarTotalCarrito() {
  let total = 0;
  const totalCarrito = $('.shoppingCartTotal');
  const itemsCarrito = $('.shoppingCartItem');

  $.each(itemsCarrito, function(index, element) {

    const precioItemsCarrito = $(this).find('.shoppingCartItemPrice');
    const precioItemCarrito = Number(precioItemsCarrito.text().replace('$', ''));
    const cantidadItemsCarrito = $(this).find('.shoppingCartItemQuantity');
    const cantidadItemCarrito = Number(cantidadItemsCarrito.val());

    total = total + precioItemCarrito * cantidadItemCarrito;
    
  });

  totalCarrito.html(`${total.toFixed(2)}$`);
  totalLS = parseInt(total);
}


function guardarLocalStore(totalLS){
  var totalActual = totalLS;
  localStorage.setItem("totalActual", totalActual);
  console.log("el valor guardado hasta ahora es de" + totalActual);
}

function eliminarItemCarrito(event) {
  const botonClick = $(event.target).closest('.shoppingCartItem').remove();
  actualizarTotalCarrito();
}

function cambioCantidad(event) {
  const input = ($(event.target).val() <= 0) ? ($(event.target).val() = 1) : null;
  actualizarTotalCarrito();
}

function comprarBotonClick() {
  
  guardarLocalStore(totalLS);
  actualizarTotalCarrito();
  window.location.href="./Assets/Compra.html"
  contenedorItemsCarrito.html('');
  
  
}
