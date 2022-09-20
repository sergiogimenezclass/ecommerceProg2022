let dibujarHtmlConProductos = function () {
    console.log('Te voy a mostrar los productos en el carrito')
    let listado = JSON.parse(localStorage.getItem('miProducto'))
    console.log(listado)
    console.log(typeof listado)
    let listadoHtml = listado.map((producto) => `
        
        <div class="card mb-3 item">
            <div class="card-body">
                <div class="d-flex justify-content-between">
                    <div class="d-flex flex-row align-items-center">
                        <div>
                            <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-shopping-carts/img1.webp"
                                class="img-fluid rounded-3" alt="Shopping item"
                                style="width: 65px;">
                        </div>
                        <div class="ms-3">
                            <h5 class="item-name">${producto.nombre}</h5>
                            <p class="small mb-0 item-desc">${producto.descripcion}</p>
                        </div>
                    </div>
                    <div class="d-flex flex-row align-items-center">
                        <div style="width: 50px;">
                            <h5 class="fw-normal mb-0 item-cant">${producto.cantidad}</h5>
                        </div>
                        <div style="width: 80px;">
                            <h5 class="mb-0 item-price">${producto.precio_descuento}</h5>
                        </div>
                        <a href="#!" style="color: #cecece;"><i
                                class="fas fa-trash-alt"></i></a>
                    </div>
                </div>
            </div>
        </div>

    `).join('')
    document.querySelector('.cart-items').innerHTML = listadoHtml
}

let recuperarData = function () {
    console.log('Llamando desde el localStorage')
    console.log(localStorage.getItem('miProducto'))
    let producto = JSON.parse(localStorage.getItem('miProducto'))
    console.log('El nombre del producto: ')
    console.log(producto.nombre)

    // Vamos a traducir de texto plano a un objeto que pueda enterder JS
    console.log('Recuperamos del localStorage y pasamos a objeto')
    console.log(producto)

    console.log('El nombre del producto: ')
    console.log(producto.nombre)


    
    dibujarHtmlConProductos()
}

let borrarCarrito = function() {
    localStorage.clear()
}

recuperarData()

