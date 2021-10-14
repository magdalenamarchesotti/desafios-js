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
    
    const productos = [];
    
    const producto1 = new Producto("remera", "oversize", "1350");
    productos.push(producto1);

    const producto2 = new Producto("hoodie", "oversize","2500");
    productos.push(producto2);

    const producto3 = new Producto("hoodie", "slimfit", "2000");
    productos.push(producto3);

    const producto4 = new Producto("remera", "slimfit", "1200");
    productos.push(producto4);

    for (const producto of productos)
    producto.sumarIva();

    console.log(productos);