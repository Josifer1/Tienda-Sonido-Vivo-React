import { useState, useEffect } from "react";
import { CarritoContext } from "./carritoContext";
import { agregarItem, quitarItem, actualizarCantidad, contarItems, calcularTotal } from "../utils/carrito";
import { cargarCarrito, guardarCarrito } from "../utils/almacenamientoCarrito";

export function CarritoProvider({ children }) {
  const [items, setItems] = useState(cargarCarrito);

  useEffect(() => {
    guardarCarrito(items);
  }, [items]);

  const agregarProducto = (producto) => setItems((previos) => agregarItem(previos, producto));
  const quitarProducto = (id) => setItems((previos) => quitarItem(previos, id));
  const cambiarCantidad = (id, cantidad) =>
    setItems((previos) => actualizarCantidad(previos, id, cantidad));
  const vaciarCarrito = () => setItems([]);

  const valor = {
    items,
    totalItems: contarItems(items),
    totalPrecio: calcularTotal(items),
    agregarProducto,
    quitarProducto,
    cambiarCantidad,
    vaciarCarrito,
  };

  return <CarritoContext.Provider value={valor}>{children}</CarritoContext.Provider>;
}