"use client";

import { fetchDwelling } from "@/services/fetchData";
import LightboxContainer from "./Lightbox";
import dynamic from "next/dynamic";

export default async function DwellingContainer({ id }) {
  const data = await fetchDwelling(id);

  const Mapa = dynamic(() => import("@/components/Mapa"), {
    loading: () => <p>Cargando...</p>,
    ssr: false,
  });

  const title = data?.dwelling?.address.streetNumber
    ? `${data?.dwelling?.subtype} en ${data?.dwelling?.address.streetName} N°${data?.dwelling?.address.streetNumber}, ${data?.dwelling?.address.city}`
    : `${data?.dwelling?.subtype} en ${data?.dwelling?.address.streetName}, ${data?.dwelling?.address.city}`;

  const description = data?.dwelling?.generalDescription.replace(
    /(<([^>]+)>)/gi,
    ""
  );

  return (
    <div className="flex flex-col items-center justify-center w-full">
      <div className="flex flex-col md:flex-row items-center justify-start w-full gap-3">
        <div className="flex flex-col items-start justify-start w-full gap-1">
          <h4 className="text-xl font-bold text-left text-slate-700 underline underline-offset-2 decoration-primary">
            {data?.dwelling?.publicationType}
          </h4>
          <h2 className="text-3xl md:text-4xl font-normal text-left text-slate-900">
            {title}
          </h2>
        </div>
        <div className="flex flex-col items-center w-max"></div>
        <div className="flex flex-row gap-1 justify-center md:justify-end items-end w-full">
          <p className="text-xl font-medium text-left text-slate-700 ">
            {data?.dwelling?.currency}
          </p>
          <h4 className="text-5xl font-bold text-left text-primary">
            {data?.dwelling?.price}
          </h4>
        </div>
      </div>

      <div className="flex flex-col md:flex-row items-center justify-center w-full">
        <LightboxContainer image={data?.dwelling?.images} />
        <div className="flex h-full w-full md:w-1/2">
          <Mapa
            lat={data?.dwelling?.address.latitude}
            alt={data?.dwelling?.address.altitude}
          />
        </div>
      </div>
      <div className="flex flex-col md:flex-row items-center justify-center w-full">
        <div className="flex flex-col items-start justify-start w-full gap-1">
          <h4 className="text-xl font-bold text-left text-slate-700 ">
            Descripción
          </h4>
          <p className="text-lg font-normal text-left text-slate-900">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
}
