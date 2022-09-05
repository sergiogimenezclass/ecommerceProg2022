let recuperarData = function() {
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
}

recuperarData()