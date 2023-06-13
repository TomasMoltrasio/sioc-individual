import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/containers/Footer";

export default function RootLayout({ children }) {
  return (
    <html data-theme="lemonade" lang="es">
      <head>
        <title>Penayo Propiedades</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://rsms.me/inter/inter.css" />
        <meta property="og:title" content="Penayo Propiedades" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/logo-penayo.png" />
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
