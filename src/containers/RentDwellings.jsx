"use client";
import ListDwellings from "./ListDwellings";
import { fetchSWR } from "@/services/fetchSWR";
import Cookies from "universal-cookie";
import useSWR from "swr";
import { usePathname } from "next/navigation";

export default function RentDwellings() {
  const cookie = new Cookies().get("searchParams");
  const params = cookie ? cookie : {};
  const pathname = usePathname();

  const searchParams = {
    publicationType: pathname === "/alquileres" ? "Alquiler" : "Venta",
    ...params,
  };

  const { data, error, isLoading } = useSWR(searchParams, fetchSWR, {
    revalidateOnFocus: false,
  });

  if (error) {
    return <p>Ha ocurrido un error</p>;
  }

  const dwellings = data?.dwellings || [];

  return (
    <>
      {isLoading ? (
        <span className="loading loading-spinner loading-lg text-primary"></span>
      ) : dwellings?.length > 0 ? (
        <ListDwellings dwellings={dwellings} />
      ) : (
        <p
          className="
          text-center
          text-primary
          text-2xl
          font-bold
          mt-10
        "
        >
          No se encontraron resultados
        </p>
      )}
    </>
  );
}
