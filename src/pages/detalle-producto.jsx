import { useEffect, useState } from "react";
import { Link, useParams } from "react-router";
import { obtenerProductoPorId } from "../services/productosService";
import { formatearPrecio } from "../utils/formatearPrecio";
import { useCarrito } from "../hooks/useCarrito";

export function Detalle_Producto() {
  const {agregarProducto} = useCarrito();
  const { id } = useParams();
  const [producto, setProducto] = useState(null);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    obtenerProductoPorId(id)
      .then(setProducto)
      .catch((e) => setError(e.message))
      .finally(() => setCargando(false));
  }, [id]);

  if (cargando) {
    return <main><p className="mensaje-estado">Cargando producto...</p></main>;
  }
  if (error) {
    return (
      <main>
        <p className="mensaje-estado">{error}</p>
        <p className="mensaje-estado"><Link to="/productos" className="volver-link">Volver a productos</Link></p>
      </main>
    );
  }

  return (
    <main>
      <section className="detalle-producto">
        <div className="detalle-imagen">
          <img src={producto.imagen} alt={`${producto.nombre} ${producto.marca}`} />
        </div>
        <div className="detalle-info">
          <p className="detalle-categoria">{producto.categoria}</p>
          <h1>{producto.nombre}</h1>
          <p className="brand">{producto.marca} {producto.modelo}</p>
          <p className="price-large">{formatearPrecio(producto.precio)}</p>
          <p className="detalle-descripcion">{producto.descripcion}</p>
          <p className="detalle-stock">Stock disponible: {producto.stock} unidades</p>
          <button className="btn-add-article" onClick={() => agregarProducto(producto)}>
            Añadir al carrito
          </button>
        </div>
      </section>
    </main>
  );
}