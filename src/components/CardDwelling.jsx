import Image from "next/image";
import { IoBed, IoContract, IoLogoUsd, IoLocationSharp } from "react-icons/io5";
import { FaBath } from "react-icons/fa";
import Link from "next/link";

export default function CardDwelling({ dwelling }) {
  const {
    address,
    price,
    currency,
    features,
    spaces,
    images,
    subtype,
    publicationType,
    updatedAt,
    siocId,
  } = dwelling;

  const calcularDiferencia = (fecha) => {
    const hoy = new Date();
    const fechaPublicacion = new Date(fecha);
    const diferencia = hoy.getTime() - fechaPublicacion.getTime();
    const dias = Math.round(diferencia / (1000 * 60 * 60 * 24));
    const meses = Math.round(dias / 30);
    return { dias, meses };
  };

  return (
    <div className="group rounded-xl w-full cursor-pointer bg-white shadow hover:shadow-xl text-slate-900 overflow-hidden ease-in-out duration-500">
      <Link href={`/dwelling/${siocId}`}>
        <div className="relative w-full h-[250px]">
          <Image
            src={images[0].secure_url}
            alt="dwelling image"
            fill
            className="cover transform group-hover:scale-110 transition duration-500 ease-in-out"
          />
        </div>
        <div className="p-4">
          <div className="pb-6">
            <h3 className="text-lg hover:text-green-600 font-medium ease-in-out duration-500">
              {`${subtype} en ${publicationType}`}
            </h3>
          </div>
          <div className="pb-6 flex justify-start items-center">
            <IoLocationSharp className="text-primary text-xl mr-2" />
            <h3 className="text-lg font-normal ease-in-out duration-500">
              {`${address.streetName} N°${address.streetNumber}, ${address.city}`}
            </h3>
          </div>

          <ul className="py-6 border-y border-slate-100 text-base flex items-center list-none">
            {features?.coveredSurface >= 0 ? (
              <li className="flex items-center me-4">
                <IoContract className="me-2 text-primary text-xl" />
                {features.coveredSurface} m2
              </li>
            ) : null}
            {spaces?.bedrooms >= 0 ? (
              <li className="flex items-center me-4">
                <IoBed className="me-2 text-primary text-xl" />
                {spaces?.bedrooms === 0 ? "Monoambiente" : spaces.bedrooms}
              </li>
            ) : null}
            {spaces?.bathRoom > 0 ? (
              <li className="flex items-center me-4">
                <FaBath className="me-2 text-primary text-lg" />
                {spaces.bathRoom}
              </li>
            ) : null}
          </ul>
          <ul className="py-6  flex items-center list-none">
            <li className="flex items-center text-lg me-4">
              <IoLogoUsd className="me-2 text-primary text-xl" />
              {currency + price}
            </li>
          </ul>
        </div>
        <div className="flex justify-end items-end p-2">
          <p className="text-xs text-slate-500">
            {calcularDiferencia(updatedAt).meses === 0 &&
            calcularDiferencia(updatedAt).dias === 0 ? (
              <>Actualizado hoy</>
            ) : calcularDiferencia(updatedAt).meses > 0 ? (
              <>Actualizado hace {calcularDiferencia(updatedAt).meses} mes/es</>
            ) : (
              <>Actualizado hace {calcularDiferencia(updatedAt).dias} día/s</>
            )}
          </p>
        </div>
      </Link>
    </div>
  );
}
