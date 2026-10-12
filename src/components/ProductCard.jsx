import { Link } from "react-router";
import { formatearPrecio } from "../utils/formatearPrecio";

export function ProductCard({ producto, onAgregar = () => {} }) {
  return (
    <article className="product-article">
      <img src={producto.imagen} alt={`${producto.nombre} ${producto.marca}`} />
      <h3>{producto.nombre}</h3>
      <p className="brand">{producto.marca} {producto.modelo}</p>
      <p className="price">{formatearPrecio(producto.precio)}</p>
      <Link to={`/detalle-producto/${producto.id}`} className="btn-secondary">
        Ver detalle
      </Link>
      <button className="btn-add-article" onClick={() => onAgregar(producto)}>
        Añadir
      </button>
    </article>
  );
}