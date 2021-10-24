alert("Bienvendios a Hechito con Amor");

class Producto{
        constructor(id, nombre, precio) {
        this.id = id;
        this.nombre = nombre;
        this.precio = parseFloat(precio);
       
        }

    } 

const productos = [];
    const producto1 = (new Producto (2 ,"Kit Porta Macetas", 600));
        productos.push (producto1)
    const producto2 = (new Producto (1 ,"Pie de Cama", 5000));
        productos.push (producto2)
    const producto3 = (new Producto (3 ,"Cestos Organizadores", 500));
        productos.push (producto3)

productos.sort((prev , next ) => {
    if (prev.id < next.id) {return - 1;}
    if (prev.id > next.id) {return 1;}
    return 0;
});

console.log(productos.sort());
    