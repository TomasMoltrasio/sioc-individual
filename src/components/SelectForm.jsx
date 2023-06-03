export default function SelectForm({ selecciones }) {
  const { name, options } = selecciones;

  return (
    <div className="form-control w-full max-w-xs">
      <label className="label">
        <span className="label-text font-semibold text-base">{name}</span>
      </label>
      <select
        defaultValue="Elige una opción"
        className="select select-bordered text-slate-900"
      >
        <option disabled selected>
          Elige una opción
        </option>
        {options.map((seleccion) => (
          <option key={`${name}-${seleccion}`}>{seleccion}</option>
        ))}
      </select>
    </div>
  );
}
