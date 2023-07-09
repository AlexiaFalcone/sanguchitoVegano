let bienvenida = alert("Bienvenido a Sanguchito Vegano")

let nombre = prompt("¿Cual es tu nombre?")
alert("Bienvenido" + " " + nombre)

let docenaDeSanguchitos = 2

let compra; 

let producto = 1200

stock ();



let opcionesDePago = parseInt(prompt("Seleccione la forma de pago: \ 1. Pago efectivo, 10% OFF \ 2. Pago con tarjeta 1 pago, sin recargo \ 3. Pago con tarjeta en 3 cuota, 10% de recargo"))

switch(opcionesDePago){
    
    case 1:
        let descuento = producto * 10 / 100 
        console.log (descuento)
        let valorEfectivo = producto - descuento 
        alert ("El monto es:" + " " + valorEfectivo)
        break;
    

    case 2: 
        let valorUnPago = compra
        alert ("El monto es:" + " " + valorUnPago)
        break;
    
    
    case 3: 
        let valorTresCuotas = compra + 10%
        alert ("El monto es:" + " " + valorTresCuotas)
        break;
    
}


function stock (){
    
    let compra = parseInt (prompt("¿Cuantás docenas desea?"));
    
    if (compra = 1){
        alert("El monto a abonar es" + " " + producto)
    }

    if (compra = 2){
       let resultado = producto * compra
        alert("El monto a abonar es" + " " + resultado) 
    } 
    if (compra > 2){
        alert ("Lo sentimos solo tenemos" + " " + docenaDeSanguchitos + " " + "docenas en stock")
    }
    
}
