export default function Footer() {
  return (
    <footer className="bg-black text-gray-300 py-10 mt-12">
      <div className="container mx-auto px-6 grid md:grid-cols-3 gap-8">
        {/* Info productora */}
        <div>
          <h3 className="text-xl font-bold text-white mb-3">🎬 ProductoraTV</h3>
          <p className="text-sm">
            Innovación audiovisual y producción televisiva con alcance nacional
            e internacional.
          </p>
        </div>

        {/* Redes */}
        <div>
          <h4 className="font-semibold text-white mb-3">Síguenos</h4>
          <ul className="space-y-2">
            <li>
              <a
                href="#"
                className="hover:text-purple-400 transition"
              >
                Instagram
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-purple-400 transition"
              >
                Facebook
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-purple-400 transition"
              >
                YouTube
              </a>
            </li>
          </ul>
        </div>

        {/* Datos de desarrollador */}
        <div className="border-t md:border-t-0 md:border-l border-gray-700 pt-6 md:pt-0 md:pl-6">
          <h4 className="font-semibold text-white mb-3">Desarrollado por</h4>
          <p className="text-sm">David Palazzi – Fullstack Dev</p>
          <a
            href="mailto:tuemail@ejemplo.com"
            className="text-purple-400 hover:underline text-sm"
          >
            tuemail@ejemplo.com
          </a>
        </div>
      </div>
      <div className="text-center text-xs mt-10 text-gray-500">
        © {new Date().getFullYear()} ProductoraTV. Todos los derechos reservados.
      </div>
    </footer>
  );
}
