alert("Bienvendios a Hechito con Amor");
    function Producto (nombre, precio) {
        this.nombre = nombre;
        this.precio = parseInt(precio);
        this.mostrar = function(){ alert("El producto" + " " + this.nombre + " " + "tiene un valor de $" + this.precio);
        }
    }


const producto1 = new Producto ("Kit Porta Macetas", 600);
const producto2 = new Producto ("Pie de Cama", 5000);
const producto3 = new Producto ("Cestos Organizadores", 500);
producto1.mostrar();
producto2.mostrar();
producto3.mostrar();
