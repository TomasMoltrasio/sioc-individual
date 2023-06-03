import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/containers/Footer";

export default function RootLayout({ children }) {
  return (
    <html data-theme="lemonade" lang="es">
      <head>
        <title>Penayo Propiedades</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logo-penayo.ico" />
      </head>
      <body>
        <>
          <Navbar />
          <main className="flex h-full flex-col items-center justify-between px-2 md:px-4 bg-base-100">
            {children}
          </main>
          <Footer />
        </>
      </body>
    </html>
  );
}
