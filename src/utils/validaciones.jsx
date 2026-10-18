const DOMINIOS_PERMITIDOS = ["@duoc.cl", "@profesor.duoc.cl", "@gmail.com"];

export function validarRun(run) {
  const valor = run.trim().toUpperCase();

  if (valor === "") return "El RUN es obligatorio.";
  if (valor.length < 7 || valor.length > 9) return "El RUN debe tener entre 7 y 9 caracteres.";

  const cuerpo = valor.slice(0, -1);
  const digitoVerificador = valor.slice(-1);

  if (!/^\d+$/.test(cuerpo)) {
    return "El RUN solo debe contener números y el dígito verificador, sin puntos ni guion.";
  }

  let suma = 0;
  let multiplicador = 2;
  for (let i = cuerpo.length - 1; i >= 0; i--) {
    suma += Number(cuerpo[i]) * multiplicador;
    multiplicador = multiplicador === 7 ? 2 : multiplicador + 1;
  }
  const resto = 11 - (suma % 11);
  const digitoEsperado = resto === 11 ? "0" : resto === 10 ? "K" : String(resto);

  if (digitoVerificador !== digitoEsperado) {
    return "El RUN ingresado no es válido (dígito verificador incorrecto).";
  }
  return "";
}

export function validarCorreo(correo, { obligatorio = true } = {}) {
  const valor = correo.trim();

  if (valor === "") return obligatorio ? "El correo es obligatorio." : "";
  if (valor.length > 100) return "El correo no puede superar los 100 caracteres.";
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(valor)) return "El formato del correo no es válido.";

  const dominioValido = DOMINIOS_PERMITIDOS.some((dominio) => valor.toLowerCase().endsWith(dominio));
  if (!dominioValido) return "Solo se aceptan correos @duoc.cl, @profesor.duoc.cl o @gmail.com.";
  return "";
}

export function validarTexto(valor, { obligatorio = true, maximo, mensajeObligatorio = "Este campo es obligatorio." } = {}) {
  const texto = valor.trim();
  if (texto === "") return obligatorio ? mensajeObligatorio : "";
  if (maximo && texto.length > maximo) return `Máximo ${maximo} caracteres.`;
  return "";
}

export function validarPassword(password) {
  if (password === "") return "La contraseña es obligatoria.";
  if (password.length < 4 || password.length > 10) return "La contraseña debe tener entre 4 y 10 caracteres.";
  return "";
}

export function validarConfirmacion(password, confirmacion) {
  if (confirmacion === "") return "Confirma tu contraseña.";
  if (password !== confirmacion) return "Las contraseñas no coinciden.";
  return "";
}

export function validarSeleccion(valor, mensaje) {
  return valor === "" ? mensaje : "";
}

export function hayErrores(errores) {
  return Object.values(errores).some((mensaje) => mensaje !== "");
}

export function validarRegistro(valores) {
  return {
    run: validarRun(valores.run),
    nombre: validarTexto(valores.nombre, { maximo: 50, mensajeObligatorio: "El nombre es obligatorio." }),
    apellidos: validarTexto(valores.apellidos, { maximo: 100, mensajeObligatorio: "Los apellidos son obligatorios." }),
    correo: validarCorreo(valores.correo),
    password: validarPassword(valores.password),
    confirmacion: validarConfirmacion(valores.password, valores.confirmacion),
    region: validarSeleccion(valores.region, "Seleccione una región."),
    comuna: validarSeleccion(valores.comuna, "Seleccione una comuna."),
    direccion: validarTexto(valores.direccion, { maximo: 300, mensajeObligatorio: "La dirección es obligatoria." }),
  };
}

export function validarLogin(valores) {
  return {
    correo: validarCorreo(valores.correo),
    password: validarPassword(valores.password),
  };
}

export function validarContacto(valores) {
  return {
    nombre: validarTexto(valores.nombre, { maximo: 100, mensajeObligatorio: "El nombre es obligatorio." }),
    correo: validarCorreo(valores.correo, { obligatorio: false }),
    comentario: validarTexto(valores.comentario, { maximo: 500, mensajeObligatorio: "El comentario es obligatorio." }),
  };
}