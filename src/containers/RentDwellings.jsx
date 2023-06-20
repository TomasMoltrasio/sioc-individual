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
  const cantPerPage = 12;

  const searchParams = {
    publicationType: pathname === "/alquileres" ? "Alquiler" : "Venta",
    page: {
      justPerPage: true,
      perPage: cantPerPage,
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

  dwellings.length === 0 && total > 0 && setPage(1);

  const backPage = (e) => {
    e.preventDefault();
    if (page > 1) {
      setPage(page - 1);
      window.scrollTo(0, 0);
    }
  };

  const nextPage = (e) => {
    e.preventDefault();
    if (page < Math.ceil(total / cantPerPage)) {
      setPage(page + 1);
      window.scrollTo(0, 0);
    }
  };

  return (
    <>
      {isLoading ? (
        <span className="loading loading-spinner loading-lg text-primary"></span>
      ) : dwellings?.length > 0 ? (
        <ListDwellings dwellings={dwellings} />
      ) : (
        <p className="text-center text-primary text-2xl font-bold mt-10">
          No se encontraron resultados
        </p>
      )}
      {total > cantPerPage && (
        <div className="join mt-4">
          <button
            disabled={page === 1}
            onClick={(e) => backPage(e)}
            className="join-item btn btn-primary-content"
          >
            «
          </button>
          {new Array(Math.ceil(total / cantPerPage)).fill(0).map((_, i) => (
            <input
              className={`join-item btn btn-square ${
                i + 1 === page ? "" : "hidden lg:inline-flex"
              }`}
              type="radio"
              name="options"
              aria-label={`${i + 1}`}
              checked={page === i + 1}
              onChange={() => setPage(i + 1)}
              key={i}
            />
          ))}

          <button
            disabled={page === Math.ceil(total / 9)}
            onClick={(e) => nextPage(e)}
            className="join-item btn btn-primary-content "
          >
            »
          </button>
        </div>
      )}
    </>
  );
}
