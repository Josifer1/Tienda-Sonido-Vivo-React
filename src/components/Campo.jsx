export function Campo({ id, etiqueta, tipo = "text", opciones = [], textoVacio = "", error, ...resto }) {
  const propsComunes = {
    id,
    name: id,
    className: error ? "input-invalido" : "",
    "aria-invalid": Boolean(error),
    "aria-describedby": `error-${id}`,
    ...resto,
  };

  let control;
  if (tipo === "textarea") {
    control = <textarea rows={5} {...propsComunes} />;
  } else if (tipo === "select") {
    control = (
      <select {...propsComunes}>
        <option value="">{textoVacio}</option>
        {opciones.map((opcion) => (
          <option key={opcion} value={opcion}>{opcion}</option>
        ))}
      </select>
    );
  } else {
    control = <input type={tipo} {...propsComunes} />;
  }

  return (
    <div className="campo">
      <label htmlFor={id}>{etiqueta}</label>
      {control}
      <span className="error-mensaje" id={`error-${id}`}>{error}</span>
    </div>
  );
}