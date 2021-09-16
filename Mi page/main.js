alert("Bienvenidos a Hechito Con Amor");

const sumaPrecios = (a,b) => a + b;

let precioProducto = parseInt(prompt("Ingrese el precio del producto seleccionado"));

let precioEnvio = parseInt('150');

let resultadoSinIva = (sumaPrecios(precioProducto , precioEnvio));

const iva = (iva) => iva * 1.21;

let = resultadoFinal = iva(sumaPrecios(precioProducto , precioEnvio));

console.log("El precio final con IVA y envio incluido es de $" + resultadoFinal);


