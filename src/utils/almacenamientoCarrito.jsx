const CLAVE_CARRITO = "carritoSonidoVivo";

export const cargarCarrito = () => {
  try {
    const guardado = localStorage.getItem(CLAVE_CARRITO);
    return guardado ? JSON.parse(guardado) : [];
  }catch{
    return [];
  }
}

export function guardarCarrito(items)  {
    try {
        localStorage.setItem(CLAVE_CARRITO, JSON.stringify(items));
    }catch{
        //si el navegador bloquea el almacenamiento, el carrito sigue funcionando en memoria
        console.error("Error al guardar el carrito en localStorage");
    }
}