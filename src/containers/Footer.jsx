import Image from "next/image";

export default function Footer() {
  return (
    <footer className="footer p-5 bg-base-300 text-base-content">
      <div>
        <Image src="/logo-penayo.png" width={150} height={150} />
      </div>
      <div>
        <span className="footer-title">Dirección</span>
        <a
          href="https://goo.gl/maps/kBWSa9VeUPjGkK6L6?coh=178572&entry=tt"
          target="_blank"
          rel="noopener noreferrer"
          className="link link-hover"
        >
          Calle 4 N° 799 La Plata, Buenos Aires
        </a>
      </div>
      <div>
        <span className="footer-title">Teléfonos</span>
        <a href="tel:+54 221 425-0969" className="link link-hover">
          (221) 425-0969
        </a>
        <a href="tel:+54 221 425-0970" className="link link-hover">
          (221) 425-0970
        </a>
        <a href="tel:+54 221 425-0971" className="link link-hover">
          (221) 425-0971
        </a>
      </div>
      <div>
        <span className="footer-title">Email</span>
        <a
          href="mailto:info@penayopropiedades.com.ar"
          className="link link-hover"
        >
          info@penayopropiedades.com.ar
        </a>
      </div>
    </footer>
  );
}
