alert("Bienvendios a Hechito con Amor");

class Producto{
        constructor(id, nombre, precio) {
        this.id = id;
        this.nombre = nombre;
        this.precio = parseFloat(precio);
       
        }

    } 

const productos = [];
    const producto1 = (new Producto (1 ,"Kit Porta Macetas", 600));
        productos.push (producto1)
    const producto2 = (new Producto (2 ,"Pie de Cama", 5000));
        productos.push (producto2)
    const producto3 = (new Producto (3 ,"Cestos Organizadores", 500));
        productos.push (producto3)

const baratos = productos.filter( productos => productos.precio < 700);

console.log(baratos);
    