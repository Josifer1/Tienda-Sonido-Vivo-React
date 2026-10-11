import { Link } from 'react-router';
export function Login(){
    return(
        <main>
        <section className="form-section">
            <form id="form-login" className="formulario" noValidate>
                <h1>INICIAR SESIÓN</h1>

                <div className="campo">
                    <label htmlFor="correo">Email:</label>
                    <input type="email" id="correo" autoComplete="email"/>
                    <span className="error-mensaje" id="error-correo"></span>
                </div>

                <div className="campo">
                    <label htmlFor="password">Contraseña:</label>
                    <input type="password" id="password" name="password"/>
                    <span className="error-mensaje" id="error-password"></span>
                </div>

                <button type="submit" className="btn-primary">Iniciar</button>
                <p className="form-exito" id="login-exito"></p>

                <p className="form-enlace">¿Deseas Registrarse? <Link to="/registro">Crear Cuenta</Link></p>

            </form>
        </section>
    </main>
    )
}