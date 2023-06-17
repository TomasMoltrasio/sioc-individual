"use client";

import OptionFilter from "./OptionFilter";
import { selecciones, option } from "../services/selecciones";
import ButtonFilter from "./ButtonFilter";
import SelectOrder from "./SelectOrder";

export default function Filter() {
  return (
    <>
      <ul className="menu menu-vertical bg-base-100 rounded-md text-slate-900 w-full">
        {selecciones.map((seleccion) => (
          <OptionFilter key={seleccion.name} selecciones={seleccion} />
        ))}
        <SelectOrder options={option} />
      </ul>

      <ButtonFilter />
    </>
  );
}
