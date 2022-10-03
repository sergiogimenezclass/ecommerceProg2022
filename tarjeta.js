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

}

let actualizarDatos = function() {
    // Verificar si necesitamos esta funcion, sino borrarla
}

let comprar = function() {
    // RESPUESTAS
    // Sï, te dejo comprar
    // No, no está autorizado
}