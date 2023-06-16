import { BsWhatsapp } from "react-icons/bs";

export default function ContactDwelling({ phone }) {
  const message = `Hola, estoy interesado en el inmueble ${window.location.href}`;

  return (
    <>
      {phone ? (
        <a
          href={`https://api.whatsapp.com/send?phone=${phone}&text=${message}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center cursor-pointer justify-start w-full h-full gap-2 p-4"
        >
          <div className="flex flex-col items-center justify-start w-full h-full gap-2 p-4">
            <BsWhatsapp className="text-4xl text-green-500" />
            <h3 className="text-2xl font-bold text-center text-slate-900">
              Escribinos por{" "}
              <b
                className="
        text-2xl font-bold text-left text-green-500
        "
              >
                Whatsapp
              </b>{" "}
              web!
            </h3>
          </div>
        </a>
      ) : null}
    </>
  );
}
