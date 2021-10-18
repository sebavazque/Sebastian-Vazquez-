
   
alert("Bienvenidos a Hechito Con Amor");

const SUMAR_PRECIOS = (a,b) => a + b;

let precioProducto = parseInt(prompt("Ingrese el precio del producto seleccionado"));

let precioEnvio = '150';

let resultadoSinIva = (SUMAR_PRECIOS(precioProducto , precioEnvio));

const calcularPrecioConIva = (iva) => iva * 1.21;

let  resultadoFinal = calcularPrecioConIva (SUMAR_PRECIOS(precioProducto , precioEnvio));

console.log("El precio final con IVA y envio incluido es de $" + resultadoFinal);