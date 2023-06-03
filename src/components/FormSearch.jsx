import SelectForm from "./SelectForm";
import SearchCode from "./SearchCode";

export default function FormSearch() {
  const selecciones = [
    {
      name: "Tipo de propiedad",
      options: [
        "Casa",
        "Cochera",
        "Departamento",
        "Duplex",
        "Local",
        "Lote",
        "PH",
      ],
    },

    {
      name: "Dormitorios",
      options: ["Monoambiente", "1", "2", "3", "4", "5", "6+"],
    },

    {
      name: "Localidades",
      options: [
        "La Plata",
        "Abasto",
        "Altos de San Lorenzo",
        "City Bell",
        "Gonnet",
      ],
    },
  ];

  return (
    <form className="flex flex-col items-center md:grid grid-rows-2 grid-cols-4 grid-flow-row p-4 gap-0 md:gap-4 w-full">
      {selecciones.map((seleccion, index) => (
        <SelectForm key={index} selecciones={seleccion} />
      ))}
      <div className="form-control justify-end h-full w-full max-w-xs">
        <button className="btn btn-primary w-full mt-4 md:mt-0">Buscar</button>
      </div>
      <SearchCode />
    </form>
  );
}
