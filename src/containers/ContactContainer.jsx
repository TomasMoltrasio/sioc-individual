import { HiOutlineMail, HiPhone, HiLocationMarker } from "react-icons/hi";

export default function ContactContainer() {
  return (
    <section className="flex min-h-screen w-full flex-col items-center justify-between bg-base-100">
      <div className="flex flex-col w-full items-center justify-center">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3271.822882865735!2d-57.95076618883247!3d-34.910894073672154!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95a2e7cd410e691b%3A0x2d997ac46b5e0d02!2sPenayo%20Negocios%20Inmobiliarios!5e0!3m2!1ses-419!2sar!4v1685247862677!5m2!1ses-419!2sar"
          className="w-full h-96"
          loading="lazy"
        ></iframe>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-[30px] mt-4">
        <div className="text-center px-6">
          <div className="relative overflow-hidden text-transparent -m-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              className="h-32 w-32 fill-green-600/5 mx-auto"
            >
              <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
            </svg>
            <div className="absolute top-2/4 -translate-y-2/4 start-0 end-0 mx-auto text-green-600 rounded-xl transition-all duration-500 ease-in-out text-4xl flex align-middle justify-center items-center">
              <HiPhone />
            </div>
          </div>
          <div className="content mt-7">
            <h5 className="text-slate-900 h5 text-xl font-medium">Telefono</h5>
            <div className="mt-5 flex flex-col items-center justify-center">
              <a
                href="tel:+54 221 425-0969"
                className="link link-hover text-green-600 hover:text-green-600 after:bg-green-600 transition duration-500"
              >
                (221) 425-0969
              </a>
              <a
                href="tel:+54 221 425-0970"
                className="link link-hover text-green-600 hover:text-green-600 after:bg-green-600 transition duration-500"
              >
                (221) 425-0970
              </a>
              <a
                href="tel:+54 221 425-0971"
                className="link link-hover text-green-600 hover:text-green-600 after:bg-green-600 transition duration-500"
              >
                (221) 425-0971
              </a>
            </div>
          </div>
        </div>
        <div className="text-center px-6">
          <div className="relative overflow-hidden text-transparent -m-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              className="h-32 w-32 fill-green-600/5 mx-auto"
            >
              <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
            </svg>
            <div className="absolute top-2/4 -translate-y-2/4 start-0 end-0 mx-auto text-green-600 rounded-xl transition-all duration-500 ease-in-out text-4xl flex align-middle justify-center items-center">
              <HiOutlineMail />
            </div>
          </div>
          <div className="content mt-7">
            <h5 className="text-slate-900 h5 text-xl font-medium">Email</h5>

            <div className="mt-5">
              <a
                href="mailto:info@penayopropiedades.com.ar"
                className="link link-hover text-green-600 hover:text-green-600 after:bg-green-600 transition duration-500"
              >
                info@penayopropiedades.com.ar
              </a>
            </div>
          </div>
        </div>
        <div className="text-center px-6">
          <div className="relative overflow-hidden text-transparent -m-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              className="h-32 w-32 fill-green-600/5 mx-auto"
            >
              <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
            </svg>
            <div className="absolute top-2/4 -translate-y-2/4 start-0 end-0 mx-auto text-green-600 rounded-xl transition-all duration-500 ease-in-out text-4xl flex align-middle justify-center items-center">
              <HiLocationMarker />
            </div>
          </div>
          <div className="content mt-7">
            <h5 className="text-slate-900 h5 text-xl font-medium">Dirección</h5>
            <p className="text-slate-400 mt-3">
              Calle 4 N° 799 La Plata, Buenos Aires
            </p>
            <div className="mt-5">
              <a
                href="https://www.google.com/maps/place/Penayo+Negocios+Inmobiliarios,+C.+4+799,+La+Plata,+Provincia+de+Buenos+Aires/@-34.910898,-57.948186,16z/data=!4m6!3m5!1s0x95a2e7cd410e691b:0x2d997ac46b5e0d02!8m2!3d-34.9108985!4d-57.9481859!16s%2Fg%2F1tykwkw1?hl=es-419&gl=AR"
                data-type="iframe"
                target="_blank"
                className="video-play-icon read-more lightbox btn btn-link text-green-600 hover:text-green-600 after:bg-green-600 transition duration-500"
              >
                Ver en Google maps
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
