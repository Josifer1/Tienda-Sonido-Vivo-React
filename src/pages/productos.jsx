import { useEffect, useState } from "react";
import { ProductCard } from "../components/ProductCard";
import { obtenerProductos } from "../services/productosService";

export function Productos() {
  const [productos, setProductos] = useState([]);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    obtenerProductos()
      .then(setProductos)
      .catch(() => setError("No se pudieron cargar los productos."))
      .finally(() => setCargando(false));
  }, []);

  if (cargando) {
    return <main><p className="mensaje-estado">Cargando productos...</p></main>;
  }
  if (error) {
    return <main><p className="mensaje-estado">{error}</p></main>;
  }

  return (
    <main>
      <section className="productos-destacados">
        <h2>Todos los Productos</h2>
        <div className="productos-grid">
          {productos.map((producto) => (
            <ProductCard key={producto.id} producto={producto} />
          ))}
        </div>
      </section>
    </main>
  );
}