export function agregarItem(items, producto) {
  const existente = items.find(item => item.id === producto.id);
  if (existente) {
    if (existente.cantidad >= existente.stock) return items;
        return items.map((item) =>
        item.id === producto.id? { ...item, cantidad: item.cantidad + 1 }: item
        );
    
    }      


    if(producto.stock <= 0) return items;

    return [
        ...items, 
        { 
            id: producto.id,
            nombre: producto.nombre,
            precio: producto.precio,
            imagen: producto.imagen,
            stock: producto.stock,
            cantidad: 1,
        },
    ];
}

export function quitarItem(items, id) {
    return items.filter((item) => item.id != id);
}

export function actualizarCantidad(items, id, cantidad) {
    if (cantidad <= 0) return quitarItem(items, id);
    return items.map((item) =>
        item.id === id ? { ...item, cantidad: Math.min(cantidad, item.stock) } : item
    );
}

export function contarItems(items) {
    return items.reduce((total, item) => total + item.cantidad, 0);
}

export function calcularTotal(items) {
    return items.reduce((total, item) => total + item.precio * item.cantidad, 0);
}   