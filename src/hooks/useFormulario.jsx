import { useState } from "react";
import { hayErrores } from "../utils/validaciones";

export function useFormulario(valoresIniciales, validar) {
  const [valores, setValores] = useState(valoresIniciales);
  const [tocados, setTocados] = useState({});

  // Estado derivado: los errores se calculan a partir de los valores, no se guardan aparte
  const todosLosErrores = validar(valores);
  const errores = {};
  Object.keys(todosLosErrores).forEach((campo) => {
    if (tocados[campo]) errores[campo] = todosLosErrores[campo];
  });

  const establecerValor = (nombre, valor) =>
    setValores((previos) => ({ ...previos, [nombre]: valor }));

  const manejarCambio = (evento) =>
    establecerValor(evento.target.name, evento.target.value);

  const manejarBlur = (evento) => {
    const { name } = evento.target;
    setTocados((previos) => ({ ...previos, [name]: true }));
  };

  const enviar = (alExito, alError) => (evento) => {
    evento.preventDefault();
    setTocados(Object.fromEntries(Object.keys(valoresIniciales).map((campo) => [campo, true])));

    if (hayErrores(todosLosErrores)) {
      if (alError) alError();
      return;
    }
    alExito(valores);
  };

  const reiniciar = () => {
    setValores(valoresIniciales);
    setTocados({});
  };

  return { valores, errores, manejarCambio, manejarBlur, establecerValor, enviar, reiniciar };
}