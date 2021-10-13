class Producto {
    constructor(nombre, tipo, precio) {
        this.nombre  = nombre.toUpperCase();
        this.tipo = tipo;
        this.precio  = parseFloat(precio);
        this.stock = true;
    }
    sumarIva() {
        this.precio = this.precio * 1.21;
    }
    vender() {
        this.stock = false;
    }
    }
    
    const producto1 = new Producto("remera", "oversize", "1350"); 
    const producto2 = new Producto("hoodie", "oversize","2500");
    const producto3 = new Producto("hoodie", "slimfit", "2000");
    const producto4 = new Producto("remera", "slimfit", "1200");
    
    
    producto1.sumarIva();
    producto1.vender();
    
    producto2.sumarIva();

    producto3.sumarIva();
    producto3.vender();

    producto4.sumarIva();
    
    
console.log(producto1);
console.log(producto2);
console.log(producto3);
console.log(producto4);
    