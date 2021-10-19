alert("Bienvendios a Hechito con Amor");
class Productos{
    constructor(id, nombre, precio) {
        this.id = id;
        this.nombre = nombre;
        this.precio = parseInt(precio);
        this.mostrar = function(){ alert("El producto" + " " + this.nombre + " " + "tiene un valor de $" + this.precio);}
        
        }

    }


const producto1 = new Producto (1 ,"Kit Porta Macetas", 600);
const producto2 = new Producto (2 ,"Pie de Cama", 5000);
const producto3 = new Producto (3 ,"Cestos Organizadores", 500);
producto1.mostrar();
producto2.mostrar();
producto3.mostrar();
