"use client";

import { fetchDwelling } from "@/services/fetchData";
import LightboxContainer from "./Lightbox";
import dynamic from "next/dynamic";
import DwellingCharacter from "@/components/DwellingCharacter";
import DwellingFeatures from "@/components/DwellingFeatures";
import ContactDwelling from "@/components/ContactDwelling";

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
      <div className="flex flex-col md:flex-row items-center justify-center w-full">
        <LightboxContainer image={data?.dwelling?.images} />
      </div>
      <div className="flex flex-col md:flex-row items-center justify-start w-full gap-3">
        <div className="flex flex-col items-start justify-start w-full gap-1 p-2">
          <h4 className="text-xl font-bold text-left text-slate-700 underline underline-offset-4 decoration-primary">
            {data?.dwelling?.publicationType}
          </h4>
          <h2 className="text-2xl md:text-4xl font-normal text-left text-slate-900">
            {title}
          </h2>
          <p className="text-xs font-normal text-left text-slate-900">
            {`Cod: ${data.dwelling.siocId}`}
          </p>
        </div>
        <div className="flex flex-col items-center justify-end h-full w-full lg:w-1/3 gap-1 p-2">
          {data?.dwelling?.price ? (
            <h3 className="text-4xl font-semibold text-center lg:text-right w-full text-slate-900">
              {`${data?.dwelling?.currency}${data?.dwelling?.price}`}
            </h3>
          ) : (
            <h3 className="text-2xl font-bold text-left text-slate-900">
              {`Consulte precio`}
            </h3>
          )}
        </div>
      </div>

      <div className="flex flex-col md:flex-row items-start justify-center w-full p-2 mt-3 lg:mt-0 lg:p-4">
        <div className="flex flex-col items-center justify-start w-full h-full gap-2 md:w-1/2">
          <DwellingCharacter
            subtype={data?.dwelling?.subtype}
            spaces={data?.dwelling?.spaces}
          />

          <div className="flex flex-col items-start justify-start w-full gap-1 p-2">
            <p
              dangerouslySetInnerHTML={{ __html: description }}
              className="text-base font-normal text-left text-slate-900 first-letter:uppercase"
            ></p>
          </div>
          <DwellingFeatures features={data?.dwelling?.features} />
        </div>
        <div className="flex h-full w-full md:w-1/2">
          <Mapa
            lat={data?.dwelling?.address.latitude}
            alt={data?.dwelling?.address.altitude}
          />
        </div>
      </div>
      <div className="divider"></div>
      <div className="flex">
        <h3 className="text-2xl font-semibold text-center text-slate-900">
          ¿Querés saber más sobre esta propiedad?
        </h3>
      </div>

      <ContactDwelling phone={data?.dwelling?.createdBy?.whatsapp} />
    </div>
  );
}
