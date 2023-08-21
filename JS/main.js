// DOM //
const productosItem = document.querySelector("#productos");
const carritoItem = document.querySelector("#carrito");
const btnSumar = document.querySelector(`btnSuma`);
const btnRestar = document.querySelector(`btnResta`);


// PRODUCTOS DISPONIBLES //

class productosDisponibles {
  constructor(id, nombre, precio, stock) {
    this.id = id;
    this.nombre = nombre;
    this.precio = precio;
    this.stock = stock;
    this.contador = 0;
  }
};

let productos = [
  new productosDisponibles(1, "Pan Integral", 850, 10),
  new productosDisponibles(2, "Chipa Vegano", 1000, 15),
  new productosDisponibles(3, "Sanguchitos Caprese", 1600, 10),
];

console.log(productos);


/* ARRAY DEL CARRITO EN LOCALSTORAGE */

let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

/* CARD DEL HTML */

const mostrarCardHtml = () => {
  productosItem.innerHTML = " ";

  productos.forEach((producto, index) => {
    let cardDelProducto = document.createElement("div");
    cardDelProducto.innerHTML = `
    <p>Nombre:${producto.nombre}</p>
    <p>Precio:${producto.precio}</p>
    <p>Agregar producto: <span>${producto.contador}</span></p>`;
    productosItem.appendChild(cardDelProducto);

    let btnSuma = document.createElement("button");
    btnSuma.innerHTML = "+";
    cardDelProducto.appendChild(btnSuma);

    let btnResta = document.createElement("button");
    btnResta.innerHTML = "-";
    cardDelProducto.appendChild(btnResta);

    btnSuma.onclick = () => {
      producto.contador += 1;

    };
    btnResta.onclick = () => {
      btnResta.disabled = true;
      producto.contador -= 1

    }

    let btnAgregarProducto = document.createElement("button");
    btnAgregarProducto.innerHTML = "Agregar Producto";
    cardDelProducto.appendChild(btnAgregarProducto);

    btnAgregarProducto.onclick = () => agregarProducto(index);

    let btnEliminarProducto = document.createElement("button");
    btnEliminarProducto.innerHTML = "Eliminar Producto";
    cardDelProducto.appendChild(btnEliminarProducto);

    btnEliminarProducto.onclick = () => btnEliminarProducto(index);

  })
};


/*AGREGAR PRODUCTOS AL CARRITO */

const agregarProducto = (id) => {
const producto = productos.find( producto => producto.id === id)

carrito.push(producto);
localStorage.setItem("carrito", JSON.stringify(carrito)); 

};

mostrarCardHtml();
//const cantidad = parseInt(prodSumados.textContent);

//if (cantidad > productos[index].stock) {
 // return Swal.fire({
  //  text: `No hay suficiente stock la cantidad de máxima de productos es ${productos[index].stock}`,
 //  icon: "error",
 //});
//} if (cantidad === 0) {
 // return Swal.fire({
//   text: "Debe seleccionar 1 producto",
 //   icon: "error",
 // });
//} else {
 // const productoSeleccionado = {
 //   id: productos[index].id,
 //   producto: productos[index].nombre,
 //  precio: productos[index].precio,
 //   cantidad: cantidad
 // }
//};
