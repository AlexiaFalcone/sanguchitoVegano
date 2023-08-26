const productos = [
    {
        id: 1,
        nombre: "Pan integral",
        precio: 850,
        stock: 10,
        img: "../img/panIntegral.jpeg"
    },

    {
        id: 2,
        nombre: "Chipa Vegano",
        precio: 1000,
        stock: 15,
        img: "../img/chipacito.jpeg"
    },

    {
        id: 3,
        nombre: "Sanguchito Caprese",
        precio: 1600,
        stock: 10,
        img: "../img/sanguchito.jpeg"
    },
];

let carrito = [];

const prodBox = document.querySelector("#listaProductos");
//const agregarProducto = document.querySelectorAll("#agregar");
//console.log(agregarProducto)





const mostrarCardHtml = () => {
    productos.forEach((producto) =>{
        const {id, nombre, precio, img} = producto
        prodBox.innerHTML += `<div>
        <img src=${img}>
        <p>Nombre:${nombre}</p>
        <p>Precio:${precio}</p>
        </div>`;

        const button = document.createElement("button")
        button.innerHTML = "Agregar al carrito"
        prodBox.appendChild(button)

        button.onclick =(e)=> agregarAlCarrito(e);

    })
};

const agregarAlCarrito=(e)=>{
    console.log(e);
    
}



mostrarCardHtml();
