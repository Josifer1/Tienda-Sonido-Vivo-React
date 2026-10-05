export function Contacto(){

    return(
        <main>
        <section className="form-section">
            <form id="form-contacto" className="formulario" novalidate>
                <h1>CONTACTO</h1>

                <div className="campo">
                    <label for="nombre">Nombre completo</label>
                    <span className="error-mensaje" id="error-nombre"></span>
                </div>

                <div className="campo">
                    <label for="correo">Email</label>
                    <span className="error-mensaje" id="error-correo"></span>
                </div>

                <div className="campo">
                    <label for="comentario">Comentario</label>
                    <textarea id="comentario" name="comentario" rows="5" maxlength="500"></textarea>
                    <span className="error-mensaje" id="error-comentario"></span>
                </div>

                <button type="submit" className="btn-primary">Enviar mensaje</button>
                <p className="form-exito" id="contacto-exito"></p>
            </form>
        </section>
    </main>
    )
}