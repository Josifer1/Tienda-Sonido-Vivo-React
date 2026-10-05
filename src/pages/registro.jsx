export function Registro(){
    return(
         <main>
        <section className="form-section">
            <form id="form-registro" className="formulario" novalidate>
                <h1>Registro de usuario</h1>

                <div className="campo">
                    <label for="run">RUN</label>
                    <input type="text" id="run" name="run" placeholder="19011022K"/>
                    <span className="error-mensaje" id="error-run"></span>
                </div>

                <div className="campo">
                    <label for="nombre">Nombre completo</label>
                    <input type="text" id="nombre" name="nombre" autocomplete="given-name"/>
                    <span className="error-mensaje" id="error-nombre"></span>
                </div>

                <div className="campo">
                    <label for="apellidos">Apellidos</label>
                    <input type="text" id="apellidos" name="apellidos" autocomplete="family-name"/>
                    <span className="error-mensaje" id="error-apellidos"></span>
                </div>

                <div className="campo">
                    <label for="correo">Correo electrónico</label>
                    <input type="email" id="correo" name="correo" autocomplete="email" placeholder="nombre@duoc.cl"/>
                    <span className="error-mensaje" id="error-correo"></span>
                </div>

                <div className="campo">
                    <label for="password">Contraseña</label>
                    <input type="password" id="password" name="password" autocomplete="new-password"/>
                    <span className="error-mensaje" id="error-password"></span>
                </div>

                <div className="campo">
                    <label for="password-confirm">Confirmar contraseña</label>
                    <input type="password" id="password-confirm" name="password-confirm" autocomplete="new-password"/>
                    <span className="error-mensaje" id="error-password-confirm"></span>
                </div>

                <div className="campo-doble">
                    <div className="campo">
                        <label for="region">Región</label>
                        <select id="region" name="region">
                            <option value="">-- Seleccione la región --</option>
                        </select>
                        <span className="error-mensaje" id="error-region"></span>
                    </div>

                    <div className="campo">
                        <label for="comuna">Comuna</label>
                        <select id="comuna" name="comuna">
                            <option value="">-- Seleccione la comuna --</option>
                        </select>
                        <span className="error-mensaje" id="error-comuna"></span>
                    </div>
                </div>

                <div className="campo">
                    <label for="direccion">Dirección</label>
                    <input type="text" id="direccion" name="direccion"/>
                    <span className="error-mensaje" id="error-direccion"></span>
                </div>

                <button type="submit" className="btn-primary">Registrar</button>
                <p className="form-exito" id="registro-exito"></p>
            </form>
        </section>
    </main>
    )
}