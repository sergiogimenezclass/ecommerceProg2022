let almacenaDatos = function(){
    let tarjeta = {}
    tarjeta.nombre = document.querySelector("#typeName").value
    tarjeta.numero = document.querySelector("#typeCardNumber").value
    tarjeta.exp = document.querySelector("#typeExp").value
    tarjeta.cvv = document.querySelector("#typeCvv").value
    
    
    localStorage.setItem('tarjeta',JSON.stringify(tarjeta))
    console.log(tarjeta)
}


let recuperaDatos = function(){
    let tarjeta =JSON.parse(localStorage.getItem('tarjeta'))
}

let validar = function(){
    console.log('Estamos validando los datos de la tarjeta')
    let respuesta
    let condition = "verificar"
    if (condition == "verificar") {
        respuesta = true
    } else {
        respuesta = false
    }
    return respuesta
}

let actualizarDatos = function() {
    // Verificar si necesitamos esta funcion, sino borrarla
}

let comprar = function() {
    console.log('Estamos comprobando si se aprueba o no la compra')
    // RESPUESTAS
    // Sï, te dejo comprar
    // No, no está autorizado
    let condition = "chequear"
    let respuesta
    if (condition == "chequearYYY") {
        respuesta = true
    }else{
        respuesta = false
    }
    return respuesta
}