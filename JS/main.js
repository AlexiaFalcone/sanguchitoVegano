// DOM //
const productosItem = document.querySelector("#productos");
const carritoItem = document.querySelector("#carrito");
const contadorCard = document.querySelector("#contador");
const sumarProd = document.querySelector("#sumar");
const restarProd = document.querySelector("#restar");


// PRODUCTOS DISPONIBLES //

class productosDisponibles {
  constructor(nombre, precio, stock) {
    this.nombre = nombre;
    this.precio = precio;
    this.stock = stock;
  }
};

let productos = [
  new productosDisponibles("Pan Integral", 850, 10),
  new productosDisponibles("Chipa Vegano", 1000, 15),
  new productosDisponibles("Sanguchitos Caprese", 1600, 10),
];

console.log(productos);


let carrito = [];

/* CARD DEL HTML */

const mostrarCardHtml = () => {
  productosItem.innerHTML = " ";
  productos.forEach((producto, index) => {
    let cardDelProducto = document.createElement("div");
    cardDelProducto.innerHTML = `
    <p>Nombre:${producto.nombre}</p>
    <p>Precio:${producto.precio}</p>`;
    productosItem.appendChild(cardDelProducto);
    
    let btnAgregarProducto = document.createElement("button");
    btnAgregarProducto.innerHTML = "Agregar Producto";
    cardDelProducto.appendChild(btnAgregarProducto);

    btnAgregarProducto.onclick = () => agregarProducto(index);

    let btnEliminarProducto = document.createElement("button");
    btnEliminarProducto.innerHTML = "Eliminar Producto";
    cardDelProducto.appendChild(btnEliminarProducto);

    btnEliminarProducto.onclick = () => btnEliminarProducto (index);

  })
};

/* CONTADOR */

let contador = 0

restarProd.disabled = true;

const valorDelContador = () => {
  contadorCard.innerHTML = contador;

  if (contador === 0){
    restarProd.disabled = true;
  } else {
    restarProd.disabled = false;
  }
};

sumarProd.onclick = () => {
  
  contador++;
  valorDelContador();
};

restarProd.onclick = () => {
  contador--;
  valorDelContador();
}

/*AGREGAR PRODUCTOS AL CARRITO */

const agregarProducto = (index) =>{
  productos[index].cantidad = contador;

  if (contador > productos[index].stock){
    return Swal.fire({
      text: `No hay suficiente stock la cantidad de máxima de productos es ${productos[index].stock}`,
      icon: "error",
    });
  }
  if (contador === 0){
    return Swal.fire({
      text: "Debe seleccionar 1 producto",
      icon: "error",
    });
  }
}

mostrarCardHtml();