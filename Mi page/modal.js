document.getElementById("miImagen").src = "image/fotos (3).jpeg";

document.getElementById("miImagen2").src = "image/fotos (4).jpeg";

document.getElementById("miImagen3").src = "image/almohada.jpeg";

$(document).ready(function(){
    $(".close1").click(function(){
      $(".modal").hide();
    });
    $(".open1").click(function(){
      $(".modal").show();
    });
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


// $('#btnEnviar').click(function(){
//     let nombre= document.getElementById('nombre').value;
//     let apellido= document.getElementById('apellido').value;
//     let email= document.getElementById('email').value;
//     let consulta= document.getElementById('suMensaje').value;
//     let ruta= "Nom="+nombre+"Ape="+apellido+"Em="+email;

//     $.ajax({
//         url: 'dato.php',
//         type: 'POST',
//         data: ruta,
//     })
//     .done(function(resp){
//         $("#respa").html(resp);
        
//     })

// })






const urljson = "json_local.json"
$("body").prepend('<button id="btn1">JSON</button>');
$("#btn1").click(() => {
    $.getJSON(urljson, function (respuesta, estado)
    {
        if(estado === "success"){
            let misDatos = respuesta.productos;
            for ( const dato of misDatos){

                $("body").prepend(`<div>
                                        <h3>${dato.nombre}</h3> 
                                        <h4>${dato.precio}</h4>
                                    </div>`);

            }
        }else {
            console.log(estado);
        }
    })
}

)

