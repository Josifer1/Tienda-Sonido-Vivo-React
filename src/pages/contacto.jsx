import { useState } from "react";
import { Campo } from "../components/Campo";
import { useFormulario } from "../hooks/useFormulario";
import { validarContacto } from "../utils/validaciones";

const VALORES_INICIALES = { nombre: "", correo: "", comentario: "" };

export function Contacto() {
  const [mensaje, setMensaje] = useState({ texto: "", exito: false });
  const { valores, errores, manejarCambio, manejarBlur, enviar, reiniciar } =
    useFormulario(VALORES_INICIALES, validarContacto);

  const enviarMensaje = () => {
    setMensaje({ texto: "¡Mensaje enviado! Te responderemos a la brevedad.", exito: true });
    reiniciar();
  };

  const avisarErrores = () => {
    setMensaje({ texto: "Por favor corrige los errores marcados antes de continuar.", exito: false });
  };

  return (
    <main>
      <section className="form-section">
        <form className="formulario" noValidate onSubmit={enviar(enviarMensaje, avisarErrores)}>
          <h1>CONTACTO</h1>

          <Campo id="nombre" etiqueta="Nombre completo" autoComplete="name" value={valores.nombre} error={errores.nombre} onChange={manejarCambio} onBlur={manejarBlur} />
          <Campo id="correo" etiqueta="Email (opcional)" tipo="email" autoComplete="email" placeholder="nombre@duoc.cl" value={valores.correo} error={errores.correo} onChange={manejarCambio} onBlur={manejarBlur} />
          <Campo id="comentario" etiqueta="Comentario" tipo="textarea" maxLength={500} value={valores.comentario} error={errores.comentario} onChange={manejarCambio} onBlur={manejarBlur} />

          <button type="submit" className="btn-primary">Enviar mensaje</button>
          <p className={`form-exito ${mensaje.exito ? "exito" : ""}`}>{mensaje.texto}</p>
        </form>
      </section>
    </main>
  );
}