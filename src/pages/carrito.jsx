import { Link } from "react-router";
import { useCarrito } from "../hooks/useCarrito";
import { formatearPrecio } from "../utils/formatearPrecio";

export function Carrito() {
  const { items, totalPrecio, cambiarCantidad, quitarProducto, vaciarCarrito } = useCarrito();

  if (items.length === 0) {
    return (
      <main>
        <section className="carrito-vacio">
          <h1>Mi carrito de compras</h1>
          <p>Tu carrito está vacío.</p>
          <Link to="/productos" className="btn-primary">Ver productos</Link>
        </section>
      </main>
    );
  }

  return (
    <main>
      <section className="carrito">
        <h1>Mi carrito de compras</h1>
        <div className="carrito-contenido">
          <ul className="carrito-lista">
            {items.map((item) => (
              <li key={item.id} className="carrito-item">
                <img src={item.imagen} alt={item.nombre} />
                <div className="carrito-item-info">
                  <h3>{item.nombre}</h3>
                  <p className="price">{formatearPrecio(item.precio)}</p>
                </div>
                <div className="carrito-cantidad">
                  <button
                    onClick={() => cambiarCantidad(item.id, item.cantidad - 1)}
                    aria-label={`Quitar una unidad de ${item.nombre}`}
                  >
                    −
                  </button>
                  <span>{item.cantidad}</span>
                  <button
                    onClick={() => cambiarCantidad(item.id, item.cantidad + 1)}
                    disabled={item.cantidad >= item.stock}
                    aria-label={`Agregar una unidad de ${item.nombre}`}
                  >
                    +
                  </button>
                </div>
                <p className="carrito-subtotal">{formatearPrecio(item.precio * item.cantidad)}</p>
                <button className="btn-quitar" onClick={() => quitarProducto(item.id)}>
                  Quitar
                </button>
              </li>
            ))}
          </ul>

          <aside className="carrito-resumen">
            <p className="carrito-total">TOTAL: <strong>{formatearPrecio(totalPrecio)}</strong></p>
            <button type="button" className="btn-primary">Pagar</button>
            <button type="button" className="btn-secondary" onClick={vaciarCarrito}>
              Vaciar carrito
            </button>
          </aside>
        </div>
      </section>
    </main>
  );
}