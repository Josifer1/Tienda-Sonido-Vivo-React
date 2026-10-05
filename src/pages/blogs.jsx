export function Blogs(){
    return(
        <main>
        <section className="blogs-section">
            <h1>NOTICIAS</h1>
            <article className="blog-card">
                <img src="img/blog/caso-curioso-1.jpg" alt="Como elegir tu primera guitarra"/>
                <div className="blog-info">
                    <h2>Dato curioso: ¿Cómo elegir tu primera guitarra?</h2>
                    <p>Muchos clientes llegan sin saber si partir con una acústica o eléctrica. Te contamos las claves para decidir según tu estilo musical y presupuesto.</p>
                    <a href="detalle-blog-1.html" className="btn-secondary">Ver caso</a>
                </div>
            </article>

            <article className="blog-card">
                <img src="img/blog/caso-curioso-2.jpg" alt="El cuidado de los instrumentos de cuerda"/>
                <div className="blog-info">
                    <h2>Caso curioso: El cuidado de los instrumentos de cuerda</h2>
                    <p>La humedad y la temperatura son los principales enemigos de una guitarra. Aprende a mantener tu instrumento en óptimas condiciones.</p>
                    <a href="detalle-blog-2.html" className="btn-secondary">Ver caso</a>
                </div>
            </article>
        </section>
    </main>
    )
}