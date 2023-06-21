"use client";
import { usePathname } from "next/navigation";
import { TbShare } from "react-icons/tb";

export default function ButtonShare({ title }) {
  const router = usePathname();
  const path = `https://sioc.vercel.app${router}`;

  return (
    <div className="tooltip" data-tip="Compartir por Whatsapp">
      <a
        href={`https://api.whatsapp.com/send?text=${title} - ${path}`}
        target="_blank"
        rel="noopener noreferrer"
        className="flex flex-row items-center justify-start gap-1"
      >
        <TbShare className="text-3xl font-normal text-left text-primary" />
      </a>
    </div>
  );
}
