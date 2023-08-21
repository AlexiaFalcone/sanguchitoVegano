// DOM //
const productosItem = document.querySelector("#productos");
const carritoItem = document.querySelector("#carrito");
const prodSuma = document.querySelector(".suma");
const prodResta = document.querySelector(".resta");
const agregarAlCarrito = document.querySelector(".agragar");



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

  productos.forEach((producto) => {
    let cardDelProducto = document.createElement("div");
    cardDelProducto.innerHTML = `
    <p>Nombre:${producto.nombre}</p>
    <p>Precio:${producto.precio}</p>`;
    productosItem.appendChild(cardDelProducto);
    
    let cantidad = document.createElement ("p");
    cantidad.innerHTML = `Cantidad: ${producto.contador}`;
    cardDelProducto.appendChild(cantidad);

    let btnSuma = document.createElement("button");
    btnSuma.innerHTML = "+";
    cardDelProducto.appendChild(btnSuma);
    btnSuma.onclick = () => sumarProducto();

    const sumarProducto = () =>{
      cantidad.innerHTML = producto.contador +=1;
    }

    let btnResta = document.createElement("button");
    btnResta.innerHTML = "-";
    cardDelProducto.appendChild(btnResta);

    btnResta.onclick = () => restarProducto();

    const restarProducto = () => {
      if (cantidad == 0) {
        cantidad.innerHTML = producto.contador += 1
      } else {
        cantidad.innerHTML = producto.contador -= 1
      }

    }

    const btnAgregarProducto = document.createElement("button");
    btnAgregarProducto.innerHTML = "Agregar Producto";
    cardDelProducto.appendChild(btnAgregarProducto);

    btnAgregarProducto.onclick = () => agregarProducto(producto.id);

    const btnEliminarProducto = document.createElement("button");
    btnEliminarProducto.innerHTML = "Eliminar Producto";
    cardDelProducto.appendChild(btnEliminarProducto);

    btnEliminarProducto.onclick = () => btnEliminarProducto(producto.id);

    /*AGREGAR PRODUCTOS AL CARRITO */

    const agregarProducto = (id) => {

      if (producto.contador > producto.stock) {
        return Swal.fire({
          text: `No hay suficiente stock la cantidad de máxima de productos es ${producto.stock}`,
          icon: "error",
        });
      } if (producto.contador === 0) {
        return Swal.fire({
          text: "Debe seleccionar 1 producto",
          icon: "error",
        });
      } else {
        const producto = productos.find(producto => producto.id === id)
        carrito.push(producto);
        localStorage.setItem("carrito", JSON.stringify(carrito));
        console.log(producto);
      }


    };
  })
};





mostrarCardHtml();


;
