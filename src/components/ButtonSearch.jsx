"use client";
import Cookies from "universal-cookie";
import { useRouter } from "next/navigation";

export default function ButtonSearch() {
  const router = useRouter();

  const handleClick = (e) => {
    e.preventDefault();
    const cookies = new Cookies();
    const cookie = cookies.get("searchParams");
    cookie?.tipo === "Alquilar"
      ? router.push("/alquileres")
      : router.push("/ventas");
  };

  return (
    <div className="form-control justify-end h-full w-full max-w-xs">
      <button
        onClick={(e) => handleClick(e)}
        className="btn btn-primary w-full mt-4 md:mt-0"
      >
        Buscar
      </button>
    </div>
  );
}
