import { Link } from "react-router";
import { ProductCard } from "../components/ProductCard";
import { productos } from "../data/productos";
import { useCarrito } from "../hooks/useCarrito";

const IDS_DESTACADOS = ["GE001", "GA001", "TC001", "MI001"];

export function Index() {
  const {agregarProducto} = useCarrito();
  const destacados = productos.filter((p) => IDS_DESTACADOS.includes(p.id));

  return (
    <main>
      <section className="section">
        <div className="section-text">
          <h1>Tienda Sonido VIVO</h1>
          <p>
            Instrumentos musicales, equipos de sonido y accesorios para músicos en Viña del Mar.
            Más de 11 años conectando a artistas con su sonido.
          </p>
          <Link to="/productos" className="btn-primary">Ver Productos</Link>
        </div>
      </section>

      <section className="productos-destacados">
        <h2>Productos Destacados</h2>
        <div className="productos-grid">
          {destacados.map((producto) => (
            <ProductCard key={producto.id} producto={producto} onAgregar={agregarProducto} />
          ))}
        </div>
      </section>
    </main>
  );
}