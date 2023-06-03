"use client";
import { useState } from "react";

export default function TypeForm() {
  const [active, setActive] = useState("Comprar");

  const tipos = ["Comprar", "Alquilar"];

  const handleClick = (tipo) => {
    setActive(tipo);
  };

  return (
    <ul className="flex flex-row items-center justify-center bg-base-100 p-4 gap-3 w-full md:w-1/3 rounded-t-xl">
      {tipos.map((tipo) => (
        <li
          key={tipo}
          onClick={() => handleClick(tipo)}
          className={`flex flex-row items-center cursor-pointer text-slate-900 justify-center w-full px-2 ${
            active === tipo
              ? "bg-primary-focus p-2 rounded-lg text-white"
              : "bg-white"
          }`}
        >
          {tipo}
        </li>
      ))}
    </ul>
  );
}
