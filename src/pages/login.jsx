import { Link } from 'react-router';
import { useState } from 'react';
import { Campo } from '../components/Campo';
import { useFormulario } from '../hooks/useFormulario';
import { validarLogin } from '../utils/validaciones';

const VALORES_INICIALES = { correo: "", password: "" };

export function Login() {
  const [mensaje, setMensaje] = useState({ texto: "", exito: false });
  const { valores, errores, manejarCambio, manejarBlur, enviar } =
    useFormulario(VALORES_INICIALES, validarLogin);

  const iniciarSesion = () => {
    setMensaje({ texto: "¡Inicio de sesión exitoso!", exito: true });
  };

  const avisarErrores = () => {
    setMensaje({ texto: "Correo o contraseña inválidos. Revisa los campos.", exito: false });
  };

  return (
    <main>
      <section className="form-section">
        <form className="formulario" noValidate onSubmit={enviar(iniciarSesion, avisarErrores)}>
          <h1>INICIAR SESIÓN</h1>

          <Campo
            id="correo"
            etiqueta="Email:"
            tipo="email"
            autoComplete="email"
            placeholder="nombre@duoc.cl"
            value={valores.correo}
            error={errores.correo}
            onChange={manejarCambio}
            onBlur={manejarBlur}
          />
          <Campo
            id="password"
            etiqueta="Contraseña:"
            tipo="password"
            autoComplete="current-password"
            value={valores.password}
            error={errores.password}
            onChange={manejarCambio}
            onBlur={manejarBlur}
          />

          <button type="submit" className="btn-primary">Iniciar</button>
          <p className={`form-exito ${mensaje.exito ? "exito" : ""}`}>{mensaje.texto}</p>

          <p className="form-enlace">
            ¿Deseas registrarte? <Link to="/registro">Crear cuenta</Link>
          </p>
        </form>
      </section>
    </main>
  );
}