"use client";
import { useRouter } from "next/navigation";

export default function ButtonFilter() {
  const router = useRouter();

  const handleClick = (e) => {
    e.preventDefault();
    router.refresh();
  };

  return (
    <button
      onClick={(e) => handleClick(e)}
      className="btn btn-primary btn-block mt-4"
    >
      Aplicar filtro
    </button>
  );
}
