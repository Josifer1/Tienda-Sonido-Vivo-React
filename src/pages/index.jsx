export function Index(){
    return(
        <main>
        <section className="section">
            <div className="section-text">
                <h1>Tienda Sonido VIVO</h1>
                <p>Instrumentos musicales, equipos de sonido y accesorios para músicos en Viña del Mar. Más de 11 años
                    conectando a artistas con su sonido.</p>
                <a href="productos.html" className="btn-primary">Ver Productos</a>
            </div>
        </section>

        <section className="productos-destacados">
            <h2>Productos Destacados</h2>
            <div className="productos-grid">

                <article className="product-article">
                    <img src="img/productos/ge001.jpg" alt="Guitarra Eléctrica Stratocaster Squier"/>
                    <h3>Guitarra Eléctrica Stratocaster</h3>
                    <p className="brand">Squier Affinity Strat</p>
                    <p className="price">$249.990</p>
                    <button className="btn-add-article" data-id="GE001">Añadir</button>
                </article>

                <article className="product-article">
                    <img src="img/productos/ga001.jpg" alt="Guitarra Acústica Folk Yamaha F310"/>
                    <h3>Guitarra Acústica Folk</h3>
                    <p className="brand">Yamaha F310</p>
                    <p className="price">$129.990</p>
                    <button className="btn-add-article" data-id="GA001">Añadir</button>
                </article>

                <article className="product-article">
                    <img src="img/productos/tc001.jpg" alt="Teclado Digital Yamaha PSR-E373"/>
                    <h3>Teclado Digital 61 teclas</h3>
                    <p className="brand">Yamaha PSR-E373</p>
                    <p className="price">$249.990</p>
                    <button className="btn-add-article" data-id="TC001">Añadir</button>
                </article>

                <article className="product-article">
                    <img src="img/productos/mi001.jpg" alt="Micrófono Dinámico Shure SM58"/>
                    <h3>Micrófono Dinámico Cardioide</h3>
                    <p className="brand">Shure SM58</p>
                    <p className="price">$149.990</p>
                    <button className="btn-add-article" data-id="MI001">Añadir</button>
                </article>
            </div>
        </section>
    </main>
    )
}