// PRODUCTOS DISPONIBLES //

class productosDisponibles {
  constructor(nombre, precio, descripcion) {
    this.nombre = nombre;
    this.precio = precio;
    this.descripcion = descripcion;
  }
};

const productos = [
  new productosDisponibles("Pan Integral", 850, "Pan integral grande"),
  new productosDisponibles("Chipa Vegano", 1000, "Valor por un 250 gr"),
  new productosDisponibles("Sanguchitos Caprese", 1600, "Valor por 1/2 docena"),
];

console.log(productos);


let carrito = [];



// INTERACCION CON EL USUARIO//

let nombre = prompt("Hola, ¿Cuál es tu nombre?");
alert("Bienvenido " + nombre + " a Sanguchito Vegano.");

function mostrarProductos() {

  const elegirProducto = prompt("¿Qué desea comprar? \nPan Integral \nChipa Vegano  \nSanguchitos Caprese");

  const productoSeleccionado = productos.find(producto => producto.nombre.toLowerCase() === elegirProducto.toLowerCase());

  carrito.push(productoSeleccionado);

  console.log(carrito);

  const seguirComprando = parseInt(prompt("¿Te gustaría seguir comprando? \n 1 Si \n2 No"));

  while (seguirComprando === 1) {
    mostrarProductos();
    return;
  }
}
mostrarProductos();

const mostrarCarrito = carrito.map((prod) => prod.nombre);

console.log(mostrarCarrito);

const valorCompra = carrito.reduce((acumulador, producto) => acumulador + producto.precio, 0);

const itemsCompra = alert("Los Items seleccionados son: \n" + mostrarCarrito + "\n El valor total es:" + valorCompra);



// OPCIONES DE PAGO//


let opcionesDePago = parseInt(
  prompt(
    "Seleccione la forma de pago: \n 1. Pago efectivo, 10% OFF \n  2. Pago con tarjeta 1 pago, sin recargo \n 3. Pago con tarjeta en 3 cuota, 10% de recargo"
  )
);

switch (opcionesDePago) {
  case 1:
    const descuento = valorCompra * 10 / 100;
    console.log(descuento);
    const valorEfectivo = valorCompra - descuento;
    alert("El monto es:" + " " + valorEfectivo);
    break;

  case 2:
    const valorUnPago = valorCompra;
    alert("El monto es:" + " " + valorUnPago);
    break;

  case 3:
    const recargo = valorCompra * 10 / 100;
    const valorTresCuotas = valorCompra + recargo;
    const valorPorCuota = valorTresCuotas / 3;
    alert("El monto a abonar es:" + " " + valorTresCuotas + " " + ",en 3 cuotas de:" + " " + parseInt(valorPorCuota));
    break;
}

alert("¡Muchas gracias por tu compra!");