export function Login(){
    return(
        <main>
        <section className="form-section">
            <form id="form-login" className="formulario" novalidate>
                <h1>INICIAR SESIÓN</h1>

                <div className="campo">
                    <label for="correo">Email:</label>
                    <input type="email" id="correo" autocomplete="email"/>
                    <span className="error-mensaje" id="error-correo"></span>
                </div>

                <div className="campo">
                    <label for="password">Contraseña:</label>
                    <input type="password" id="password" name="password"/>
                    <span className="error-mensaje" id="error-password"></span>
                </div>

                <button type="submit" className="btn-primary">Iniciar</button>
                <p className="form-exito" id="login-exito"></p>

                <p className="form-enlace">¿Deseas Registrarse? <a href="registro.html">Crear Cuenta</a></p>

            </form>
        </section>
    </main>
    )
}