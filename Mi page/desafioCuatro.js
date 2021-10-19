alert("Bienvenidos a Hechito Con Amor");

const sumarPrecio = (a,b) => a + b;

let precioProducto = parseInt(prompt("Ingrese el precio del producto seleccionado"));

const PRECIO_ENVIO = 150;

let resultadoSinIva = (sumarPrecio(precioProducto , PRECIO_ENVIO));

const calcularPrecioConIva = (precioTotal) => precioTotal * 1.21;

let  resultadoFinal = calcularPrecioConIva (sumarPrecio(precioProducto , PRECIO_ENVIO));

console.log("El precio final con IVA y envio incluido es de $" + resultadoFinal);