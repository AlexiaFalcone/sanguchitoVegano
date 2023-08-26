// DOM //
const productosItem = document.querySelector("#productos");
const prodSuma = document.querySelector(".suma");
const prodResta = document.querySelector(".resta");
const agregarAlCarrito = document.querySelector(".agregar");
const carritoItem = document.querySelector("#carrito");

// PRODUCTOS DISPONIBLES //

class ProductoDisponible {
  constructor(id, nombre, precio, stock) {
    this.id = id;
    this.nombre = nombre;
    this.precio = precio;
    this.stock = stock;
    this.contador = 0;
  }
};

let productos = [
  new ProductoDisponible(1, "Pan Integral", 850, 10),
  new ProductoDisponible(2, "Chipa Vegano", 1000, 15),
  new ProductoDisponible(3, "Sanguchitos Caprese", 1600, 10),
];

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

    let cantidad = document.createElement("p");
    cantidad.innerHTML = `Cantidad: ${producto.contador}`;
    cardDelProducto.appendChild(cantidad);

    let btnSuma = document.createElement("button");
    btnSuma.innerHTML = "+";
    cardDelProducto.appendChild(btnSuma);
    btnSuma.onclick = () => sumarProducto();

    const sumarProducto = () => {
      cantidad.innerHTML = producto.contador += 1;
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
    };

    const btnAgregarProducto = document.createElement("button");
    btnAgregarProducto.innerHTML = "Agregar Producto";
    cardDelProducto.appendChild(btnAgregarProducto);

    btnAgregarProducto.onclick = () => agregarProducto(producto.id);

    const agregarProducto = (id) => {
      const productoSeleccionado = productos.find(item => item.id === id);
      if (productoSeleccionado.contador > productoSeleccionado.stock) {
        return Swal.fire({
          text: `No hay suficiente stock la cantidad de máxima de productos es ${producto.stock}`,
          icon: "error",
        });
      } if (productoSeleccionado.contador === 0) {
        return Swal.fire({
          text: "Debe seleccionar 1 producto",
          icon: "error",
        });
      } else {
        
        carrito.push(productoSeleccionado);
        localStorage.setItem("carrito", JSON.stringify(carrito));       
      }
    };

  }); 
};


const mostrarCarrito = () => {
  carritoItem.innerHTML = " ";
  carrito = JSON.parse(localStorage.getItem("carrito"));
  if(carrito !== null){
  carrito.forEach((producto) => {
    let prodBox = document.createElement("div");
    prodBox.innerHTML = `
    <p>Nombre:${producto.nombre}</p>
    <p>Precio:${producto.precio}</p>
    <p>Cantidad: ${producto.contador}</p>
    <p>Valor: ${producto.precio * producto.contador}</p>`
    carritoItem.appendChild(prodBox);
  })}

  const vaciarCarrito = document.createElement("button");
  vaciarCarrito.innerHTML = "Vaciar Carrito";
  carritoItem.appendChild(vaciarCarrito);

  vaciarCarrito.onclick = () => {
    carrito = [];
    localStorage.setItem("carrito", JSON.stringify("carrito"));
  }
};

mostrarCardHtml();

mostrarCarrito();



