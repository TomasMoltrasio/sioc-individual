"use client";
import ListDwellings from "./ListDwellings";
import { fetchSWR } from "@/services/fetchSWR";
import Cookies from "universal-cookie";
import useSWR from "swr";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function RentDwellings() {
  const cookie = new Cookies().get("searchParams");
  const params = cookie ? cookie : {};
  const pathname = usePathname();
  const [page, setPage] = useState(1);

  const searchParams = {
    publicationType: pathname === "/alquileres" ? "Alquiler" : "Venta",
    page: {
      justPerPage: true,
      perPage: 12,
      pageNumber: page,
    },
    ...params,
  };

  const { data, error, isLoading } = useSWR(searchParams, fetchSWR, {
    revalidateOnFocus: false,
  });

  if (error) {
    return <p>Ha ocurrido un error</p>;
  }

  const dwellings = data?.dwellings || [];
  const total = data?.totalCount || 0;

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
      {total > 12 && (
        <div className="join mt-4">
          <button
            disabled={page === 1}
            onClick={() => setPage(page > 1 ? page - 1 : page)}
            className="join-item btn btn-primary"
          >
            «
          </button>
          <button className="join-item btn btn-primary btn-wide">{`Página ${page}`}</button>
          <button
            disabled={page === Math.ceil(total / 9)}
            onClick={() =>
              setPage(page < Math.ceil(total / 9) ? page + 1 : page)
            }
            className="join-item btn btn-primary "
          >
            »
          </button>
        </div>
      )}
    </>
  );
}
