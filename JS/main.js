let nombre = prompt("Hola, ¿Cuál es tu nombre?");
alert("Bienvenido" + " " + nombre + " " + "a Sanguchito Vegano.");

let docenaDeSanguchitos = 2;


let producto = 1200;

stock();

function stock() {
  const docenas = parseInt(prompt("¿Cuantás docenas desea?"));
  const resultado = docenas * producto;

  if (docenas === 1) {
    alert("El monto a abonar es" + " " + producto);
  }

  if (docenas === 2) {
    alert("El monto a abonar es" + " " + resultado);
  }
  if (docenas > 2) {
    alert(
      "Lo sentimos solo tenemos" +
      " " +
      docenaDeSanguchitos +
      " " +
      "docenas en stock"
    );
  }

  let opcionesDePago = parseInt(
    prompt(
      "Seleccione la forma de pago: \n 1. Pago efectivo, 10% OFF \n  2. Pago con tarjeta 1 pago, sin recargo \n 3. Pago con tarjeta en 3 cuota, 10% de recargo"
    )
  );

  switch (opcionesDePago) {
    case 1:
      const descuento = resultado * 10 / 100;
      console.log(descuento);
      const valorEfectivo = resultado - descuento;
      alert("El monto es:" + " " + valorEfectivo);
      break;

    case 2:
      const valorUnPago = resultado;
      alert("El monto es:" + " " + valorUnPago);
      break;

    case 3:
      const recargo = resultado * 10 /100;
      const valorTresCuotas = resultado + recargo;
      const valorPorCuota = valorTresCuotas /3;
      alert("El monto a abonar es:" + " " + valorTresCuotas + " " + ",en 3 cuotas de:" + " " + valorPorCuota);
      break;
  }
}

alert("¡Muchas gracias por tu compra!");
