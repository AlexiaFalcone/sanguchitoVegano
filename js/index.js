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

const prodBox = document.querySelector("#listaProductos");

const mostrarCardHtml = () => {
    prodBox.innerHTML = "";

    productos.forEach((producto) => {
        const { id, nombre, precio, img } = producto
        const cardProd = document.createElement("div");
        cardProd.classList.add("card-prod")
        cardProd.innerHTML = `
        <img class="imgProd" src=${img}>
        <p>Nombre:${nombre}</p>
        <p>Precio:${precio}</p>`;
        prodBox.appendChild(cardProd)

        const button = document.createElement("button");
        button.innerHTML = "Agregar al carrito";
        cardProd.appendChild(button)

        button.onclick = () => agregarAlCarrito(id);
        

    })
};


const agregarAlCarrito = (id) => {
    
    const productoSeleccionado = productos.find(prod => prod.id === id);
    console.log(productoSeleccionado)
    console.log(carrito)   
    if (carrito.length == 0) {
        productoSeleccionado.cantidad = 1;
        carrito.push(productoSeleccionado);
        localStorage.setItem("carrito", JSON.stringify(carrito));
        console.log(productoSeleccionado) 
          
    }else{
       const existe = carrito.find(prod => prod.id === productoSeleccionado.id)
       if(existe){
       existe.cantidad++
       localStorage.setItem("carrito", JSON.stringify(carrito));
       }else{
        productoSeleccionado.cantidad = 1;
        carrito.push(productoSeleccionado);
        localStorage.setItem("carrito", JSON.stringify(carrito));
       }
    }
    Toastify({

        text: "Se agregó un producto al carrito",
        
        duration: 3000
        
        }).showToast();
    mostrarCarrito();
};

const carritoItem = document.querySelector("#contenedorCarrito");

const mostrarCarrito = () => {
    carritoItem.innerHTML = " ";
    carrito = JSON.parse(localStorage.getItem("carrito")) || [];
    console.log(carrito)
    if (carrito.length != 0) {
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

    }else{
        carritoItem.innerHTML = "";
        const carritoVacio= document.createElement("p");
        carritoVacio.classList.add("empty-cart")
        carritoVacio.innerHTML= "El carrito está vacío";
        carritoItem.appendChild(carritoVacio);
    }
    const totalCompra = document.querySelector("#precioTotal");
    totalCompra.innerText = carrito.reduce((acc,prod) => acc + prod.cantidad * prod.precio,0);
};

const vaciarCarrito = () => {
    const vaciar = document.querySelector(".botonVaciar");
    vaciar.onclick = () =>{
    carrito = [];
    localStorage.setItem("carrito", JSON.stringify(carrito));
    mostrarCarrito();
    } 
};

const finalizarCompra = () => {
    const finalizar = document.querySelector(".botonFinalizar");
    finalizar.onclick = () =>{
        if(carrito.length != 0){
            Swal.fire({
                icon: 'success',
                title: 'Su compra ha sido exitosa',
                text: 'Ticker número: 001-001306',
                showConfirmButton: true,
                timer: 1500
              }) 
        }else{
            Swal.fire({
                icon: 'error',
                title: 'Debe agregar un producto',
                showConfirmButton: false,
                timer: 1500
            })

        }
   
    }
};


mostrarCardHtml();
mostrarCarrito();
vaciarCarrito();
finalizarCompra();
