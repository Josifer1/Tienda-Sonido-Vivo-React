import { productos } from "../data/productos";

export function obtenerProductos() {
  return new Promise((resolve) => {
    setTimeout(() => resolve(productos), 300);
  });
}

export function obtenerProductoPorId(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const producto = productos.find((p) => p.id === id);
      if (producto) {
        resolve(producto);
      } else {
        reject(new Error("Producto no encontrado"));
      }
    }, 300);
  });
}