document.getElementById("miImagen").src = "image/fotos (3).jpeg";

document.getElementById("miImagen2").src = "image/fotos (4).jpeg";

document.getElementById("miImagen3").src = "image/almohada.jpeg";


document.getElementById("boton1").addEventListener("click", function(){
    alert("Este producto cuesta $700");
});

document.getElementById("boton2").addEventListener("click", function(){
    alert("Este producto cuesta $800");
});

document.getElementById("boton3").addEventListener("click", function(){
    alert("Este producto cuesta $5000");
});

document.getElementById("boton4").addEventListener("click", function(){
    alert("Este producto cuesta $2800");
});

document.getElementById("boton5").addEventListener("click", function(){
    alert("Este producto cuesta $3800");
});

document.getElementById("boton6").addEventListener("click", function(){
    alert("Este producto cuesta $4800");
});

document.getElementById("boton7").addEventListener("click", function(){
    alert("Este producto cuesta $1800");
});

document.getElementById("boton8").addEventListener("click", function(){
    alert("Este producto cuesta $2800");
});




//clases

class Producto{
    constructor(id, nombre, precio) {
        this.id = id;
        this.nombre = nombre;
        this.precio = precio;
    
   
    }
}

class Cliente{
    constructor(id, nombre){
        this.id = id;
        this.nombre = nombre;
    }

}

class Pedido{
    constructor(id, nombre, producto){
        this.id = id;
        this.nombre = nombre;
        this.producto = producto;
    }

}



//funciones


//ejecucion
let arrayProductos =[];
let arrayPedidos = [];
let arrayClientes=[];



let producto1 = new Producto (1, "Porta Macetas", 700);
let producto2 = new Producto (2, "Huevera", 800);
let producto3 = new Producto (3, "Pie de cama", 5000);
let producto4 = new Producto (4, "Kit de nacimiento", 2800);
let producto5 = new Producto (5, "Almohadones", 3800);
let producto6 = new Producto (6, "Manta",4800);
let producto7 = new Producto (7, "Producto", 1800);
let producto8 = new Producto (8, "Kit table mas cazuelas", 2800);



arrayProductos.push(producto1);
arrayProductos.push(producto2);
arrayProductos.push(producto3);
arrayProductos.push(producto4);
arrayProductos.push(producto5);
arrayProductos.push(producto6);
arrayProductos.push(producto7);
arrayProductos.push(producto8);

const guardarLocal = (nombre , precio) => {localStorage.setItem(nombre, precio)};

for (const producto of arrayProductos) {
    guardarLocal(producto.id, JSON.stringify(producto));
}

let continuarPedido = true;
let continuar = true;

let contador = 1;

//Cliente




    let ingresarNombre = prompt("Bienvenidos a Hechito con amor! \n Ingrese su nombre por favor");
    
    let cliente = new Cliente(contador, ingresarNombre);
    
    arrayClientes.push(cliente);
    
    let catalogo = '';
    
    let menu = arrayProductos.map (producto => catalogo += `${producto.id} . ${producto.nombre} \n`);

    

    let pregunta = prompt("Desea comprar algun producto?");


    
    let queProductoEligio = parseInt( prompt(`Que producto desea comprar? \n ${catalogo} `));
    
    let productoElegido = arrayProductos.find (producto => producto.id === queProductoEligio );
    
    let pedido = new Pedido(contador, cliente , productoElegido );

    contador++;

    
    let seguirComprando = prompt("Desea comprar otro producto?");
    let segundoPedido =  parseInt( prompt(`Que producto desea comprar? \n ${catalogo} `));
    
    
    let productoSiguiente = arrayProductos.find (producto => producto.id === segundoPedido);

    let productoAgregado = new Pedido(contador, cliente, productoSiguiente);
    
    contador++;

    alert("Gracias por visitarnos!");

    console.log(pedido);
    console.log(productoAgregado);
    
   