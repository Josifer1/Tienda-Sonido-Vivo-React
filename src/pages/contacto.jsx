export function Contacto(){

    return(
        <main>
        <section className="form-section">
            <form id="form-contacto" className="formulario" noValidate>
                <h1>CONTACTO</h1>

                <div className="campo">
                    <label htmlFor="nombre">Nombre completo</label>
                    <input type="text" id="nombre" name="nombre" />
                    <span className="error-mensaje" id="error-nombre"></span>
                </div>

                <div className="campo">
                    <label htmlFor="correo">Email</label>
                    <input type="email" id="correo" name="correo" />
                    <span className="error-mensaje" id="error-correo"></span>
                </div>

                <div className="campo">
                    <label htmlFor="comentario">Comentario</label>
                    <textarea id="comentario" name="comentario" rows="5" maxLength="500"></textarea>
                    <span className="error-mensaje" id="error-comentario"></span>
                </div>

                <button type="submit" className="btn-primary">Enviar mensaje</button>
                <p className="form-exito" id="contacto-exito"></p>
            </form>
        </section>
    </main>
    );
}