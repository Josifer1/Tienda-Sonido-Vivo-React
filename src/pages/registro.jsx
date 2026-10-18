import { useState } from "react";
import { Campo } from "../components/Campo";
import {useFormulario} from "../hooks/useFormulario"
import { validarRegistro } from "../utils/validaciones";
import { regionesComunas, obtenerComunas} from "../data/regiones" 

const VALORES_INICIALES = {
  run: "",
  nombre: "",
  apellidos: "",
  correo: "",
  password: "",
  confirmacion: "",
  region: "",
  comuna: "",
  direccion: "",
};

export function Registro() {
  const [mensaje, setMensaje] = useState({ texto: "", exito: false });
  const { valores, errores, manejarCambio, manejarBlur, establecerValor, enviar, reiniciar } =
    useFormulario(VALORES_INICIALES, validarRegistro);

  const manejarCambioRegion = (evento) => {
    manejarCambio(evento);
    establecerValor("comuna", "");
  };

  const registrar = () => {
    setMensaje({ texto: "¡Registro exitoso! Bienvenido/a a Sonido Vivo.", exito: true });
    reiniciar();
  };

  const avisarErrores = () => {
    setMensaje({ texto: "Por favor corrige los errores marcados antes de continuar.", exito: false });
  };

  const propsDe = (campo) => ({
    value: valores[campo],
    error: errores[campo],
    onChange: manejarCambio,
    onBlur: manejarBlur,
  });

  return (
    <main>
      <section className="form-section">
        <form className="formulario" noValidate onSubmit={enviar(registrar, avisarErrores)}>
          <h1>Registro de usuario</h1>

          <Campo id="run" etiqueta="RUN" placeholder="Ej: 123456785 (sin puntos ni guion)" {...propsDe("run")} />
          <Campo id="nombre" etiqueta="Nombre completo" autoComplete="given-name" {...propsDe("nombre")} />
          <Campo id="apellidos" etiqueta="Apellidos" autoComplete="family-name" {...propsDe("apellidos")} />
          <Campo id="correo" etiqueta="Correo electrónico" tipo="email" autoComplete="email" placeholder="nombre@duoc.cl" {...propsDe("correo")} />
          <Campo id="password" etiqueta="Contraseña" tipo="password" autoComplete="new-password" placeholder="Entre 4 y 10 caracteres" {...propsDe("password")} />
          <Campo id="confirmacion" etiqueta="Confirmar contraseña" tipo="password" autoComplete="new-password" {...propsDe("confirmacion")} />

          <div className="campo-doble">
            <Campo
              id="region"
              etiqueta="Región"
              tipo="select"
              textoVacio="-- Seleccione la región --"
              opciones={Object.keys(regionesComunas)}
              {...propsDe("region")}
              onChange={manejarCambioRegion}
            />
            <Campo
              id="comuna"
              etiqueta="Comuna"
              tipo="select"
              textoVacio="-- Seleccione la comuna --"
              opciones={obtenerComunas(valores.region)}
              disabled={valores.region === ""}
              {...propsDe("comuna")}
            />
          </div>

          <Campo id="direccion" etiqueta="Dirección" autoComplete="street-address" {...propsDe("direccion")} />

          <button type="submit" className="btn-primary">Registrar</button>
          <p className={`form-exito ${mensaje.exito ? "exito" : ""}`}>{mensaje.texto}</p>
        </form>
      </section>
    </main>
  );
}