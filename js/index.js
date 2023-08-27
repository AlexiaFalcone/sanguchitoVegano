const productos = [
    {
        id: 1,
        nombre: "Pan integral",
        precio: 850,
        stock: 10,
        img: "../img/panIntegral.jpeg",
        cantidad: 0
    },

    {
        id: 2,
        nombre: "Chipa Vegano",
        precio: 1000,
        stock: 15,
        img: "../img/chipacito.jpeg",
        cantidad: 0
    },

    {
        id: 3,
        nombre: "Sanguchito Caprese",
        precio: 1600,
        stock: 10,
        img: "../img/sanguchito.jpeg",
        cantidad: 0
    },
];

let carrito = [];

JSON.parse(localStorage.getItem("carrito"));

const prodBox = document.querySelector("#listaProductos");

const mostrarCardHtml = () => {
    prodBox.innerHTML = "";

    productos.forEach((producto) => {
        const { id, nombre, precio, img } = producto
        const cardProd = document.createElement("div");
        cardProd.innerHTML = `
        <img class="imgProd" src=${img}>
        <p>Nombre:${nombre}</p>
        <p>Precio:${precio}</p>`;
        prodBox.appendChild(cardProd)

        const button = document.createElement("button")
        button.innerHTML = "Agregar al carrito";
        prodBox.appendChild(button)

        button.onclick = () => agregarAlCarrito(id);

    })
};


const agregarAlCarrito = (id, cantidad) => {

    const productoSeleccionado = productos.find(prod => prod.id === id);
    productoSeleccionado.cantidad += 1

    const existe = carrito.find(prod => prod.id == productoSeleccionado.id);
    if (existe) {
        cantidad++;
        carrito.push(productoSeleccionado);
        localStorage.setItem("carrito", JSON.stringify(carrito));

    } else {
        productoSeleccionado.cantidad = 1;
        carrito.push(productoSeleccionado);
        localStorage.setItem("carrito", JSON.stringify(carrito));
        console.log(productoSeleccionado)
    }


}

const carritoItem = document.querySelector("#carrito");

const mostrarCarrito = () => {
    carritoItem.innerHTML = " ";
    carrito = JSON.parse(localStorage.getItem("carrito"));
    if (carrito !== null) {
        carrito.forEach((producto) => {
            const { nombre, precio, cantidad } = producto
            let contenedorCarrito = document.createElement("div");
            contenedorCarrito.innerHTML = `
                <p>Nombre:${nombre}</p>
                <p>Precio:${precio}</p>
                <p>Cantidad: ${cantidad}</p>
                <p>Valor: ${precio * cantidad}</p>
            `
            carritoItem.appendChild(contenedorCarrito);

        })
    }

}

mostrarCardHtml();
mostrarCarrito();

