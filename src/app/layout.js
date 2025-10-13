import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export const metadata = {
  title: "ProductoraTV",
  description: "Productora audiovisual y TV",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className="bg-black text-white">
        <Navbar />
        {children}
        <Footer className="mt-20"/>
      </body>
    </html>
  );
}
