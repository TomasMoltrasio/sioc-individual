"use client";
import { useRouter } from "next/navigation";
import Cookies from "universal-cookie";
import { MdOutlineFilterAltOff } from "react-icons/md";

export default function ButtonFilter() {
  const router = useRouter();
  const cookies = new Cookies();

  const searchParams = cookies.get("searchParams") || {};

  const handleFilter = (e) => {
    e.preventDefault();
    router.refresh();
  };

  const handleClick = (e) => {
    e.preventDefault();
    const cookies = new Cookies();
    cookies.remove("searchParams");
    window?.location ? window.location.reload() : router.refresh();
  };

  return (
    <div className="flex w-full justify-between items-center">
      <button
        onClick={(e) => handleFilter(e)}
        className={`btn btn-primary btn-block mt-4 ${
          Object.keys(searchParams).length === 0 ? "" : "w-9/12"
        }`}
      >
        Aplicar filtro
      </button>
      {Object.keys(searchParams).length > 0 ? (
        <button
          onClick={(e) => handleClick(e)}
          className="btn btn-outline btn-primary mt-4 w-1/5 tooltip tooltip-bottom"
          data-tip="Limpiar filtros"
        >
          <MdOutlineFilterAltOff className="inline-block text-2xl" />
        </button>
      ) : null}
    </div>
  );
}
