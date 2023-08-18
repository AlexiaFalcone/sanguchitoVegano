// DOM //
const productosItem = document.querySelector("#productos");
const carritoItem = document.querySelector("#carrito");


// PRODUCTOS DISPONIBLES //

class productosDisponibles {
  constructor(id, nombre, precio, stock) {
    this.id = id;
    this.nombre = nombre;
    this.precio = precio;
    this.stock = stock;
  }
};

let productos = [
  new productosDisponibles(1, "Pan Integral", 850, 10),
  new productosDisponibles(2, "Chipa Vegano", 1000, 15),
  new productosDisponibles(3, "Sanguchitos Caprese", 1600, 10),
];

console.log(productos);


/* ARRAY DEL CARRITO EN LOCALSTORAGE */

let carrito;

//if (localStorage.getItem("carrito") === null) {
  //carrito = [];
//} else {
//  localStorage.getItem("carrito");
//}


/* CARD DEL HTML */

const mostrarCardHtml = () => {
  productosItem.innerHTML = " ";

  productos.forEach((producto, index) => {
    let cardDelProducto = document.createElement("div");
    cardDelProducto.innerHTML = `
    <p>Nombre:${producto.nombre}</p>
    <p>Precio:${producto.precio}</p>
    <p>Agregar producto: <span id="contador-${producto.id}" >0</span></p>
    <button id="sumar-${producto.id}">+</button>
    <button id="resta-${producto.id}">-</button>`;
    productosItem.appendChild(cardDelProducto);

    let btnAgregarProducto = document.createElement("button");
    btnAgregarProducto.innerHTML = "Agregar Producto";
    cardDelProducto.appendChild(btnAgregarProducto);

    btnAgregarProducto.onclick = () => agregarProducto(index);

    let btnEliminarProducto = document.createElement("button");
    btnEliminarProducto.innerHTML = "Eliminar Producto";
    cardDelProducto.appendChild(btnEliminarProducto);

    btnEliminarProducto.onclick = () => btnEliminarProducto(index);
    const contadorCard = document.querySelector(`#contador-${producto.id}`);
    
    const sumarProd = document.querySelector(`#sumar-${producto.id}`);
    const restarProd = document.querySelector(`#resta-${producto.id}`);


    
  })
};

function sumar(contadorCard){
  let valorActual = parseInt(contadorCard.textContent);
  valorActual++;
  contadorCard.textContent = valorActual;

  sumarProd.addEventListener("click", sumar(contadorCard));
}

function resta(contadorCard){
  let valorActual = parseInt(contadorCard.textContent);
  valorActual--;
  contadorCard.textContent = valorActual;
  restarProd.addEventListener("click", resta(contadorCard));
}



/*AGREGAR PRODUCTOS AL CARRITO */

function agregarProducto(index) {
  const contadorCard = document.querySelector(`#contador-${productos[index].id}`);
  const cantidad = parseInt(contadorCard.textContent)

  if (cantidad > productos[index].stock) {
    return Swal.fire({
      text: `No hay suficiente stock la cantidad de máxima de productos es ${productos[index].stock}`,
      icon: "error",
    });
  }if (cantidad === 0) {
    return Swal.fire({
      text: "Debe seleccionar 1 producto",
      icon: "error",
    });
  }else{
    const productoSeleccionado= {
      id: productos[index].id,
      producto: productos[index].nombre,
      precio: productos[index].precio,
      cantidad: cantidad
    }

    carrito.push(productoSeleccionado);
    localStorage.getItem("carrito", JSON.stringify(carrito));
  }
  
};

mostrarCardHtml();
agregarProducto();