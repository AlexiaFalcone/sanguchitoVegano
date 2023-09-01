const obtenerProd = () =>{
    fetch ("../js/productos.json")
    .then ((resp) => resp.json())
    .then ((data) => mostrarCardHtml(data))
};

const buscarProducto = (id, data ) =>{
    return data.find(prod => prod.id === id)
}

let carrito = [];

const prodBox = document.querySelector("#listaProductos");

const mostrarCardHtml = (data) => {
    prodBox.innerHTML = "";
    if(data){
    data.forEach((producto) => {
        const { id, nombre, precio, img } = producto
        const cardProd = document.createElement("div");
        cardProd.classList.add("card-prod")
        cardProd.innerHTML = `
        <img class="imgProd" src=${img}>
        <p class="nombreProd"> ${nombre}</p>
        <p class="precioProd">Precio: ${precio}</p>`;
        prodBox.appendChild(cardProd)

        const button = document.createElement("button");
        button.classList.add("botonAgregar")
        button.innerHTML = "Agregar al carrito";
        cardProd.appendChild(button)

        button.onclick = () => agregarAlCarrito(id, data);
    })}
};


const agregarAlCarrito = (id, data) => {
    const productoSeleccionado = buscarProducto(id, data);  
    if (carrito.length == 0) {
        productoSeleccionado.cantidad = 1;
        carrito.push(productoSeleccionado);
        localStorage.setItem("carrito", JSON.stringify(carrito));
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
    if (carrito.length != 0) {
        carrito.forEach((producto) => {
            const { img, nombre, precio, cantidad } = producto
            let contenedorCarrito = document.createElement("div");
            contenedorCarrito.classList.add("divCart")
            contenedorCarrito.innerHTML = `
                <img class="imgProdCart" src=${img}>
                <div class= "divCartInfo">
                <p>${nombre}</p>
                <p>Precio:${precio}</p>
                <p>Cantidad: ${cantidad}</p>
                <p>Valor: ${precio * cantidad}</p>
                </div>
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
            localStorage.clear()
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

obtenerProd();
mostrarCardHtml();
mostrarCarrito();
vaciarCarrito();
finalizarCompra();
