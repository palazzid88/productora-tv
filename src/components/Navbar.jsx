export default function Navbar() {
  return (
    <header className="bg-black/90 backdrop-blur-md text-white sticky top-0 z-50 shadow-lg">
      <div className="container mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo productora */}
        <h1 className="text-2xl font-extrabold tracking-wide">
          🎬 ProductoraTV
        </h1>

        {/* Links */}
        <nav className="space-x-6 hidden md:flex">
          <a href="#programas" className="hover:text-purple-400 transition">
            Programas
          </a>
          <a href="#nosotros" className="hover:text-purple-400 transition">
            Nosotros
          </a>
          <a href="#contacto" className="hover:text-purple-400 transition">
            Contacto
          </a>
        </nav>
      </div>
    </header>
  );
}
