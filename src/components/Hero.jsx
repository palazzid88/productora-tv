export default function Hero() {
  return (
    <section className="relative bg-gradient-to-r from-black via-purple-900 to-black text-white py-32 overflow-hidden">
      <div className="absolute inset-0 opacity-30 bg-[url('/banner.jpg')] bg-cover bg-center"></div>
      <div className="relative container mx-auto px-6 text-center">
        <h2 className="text-5xl md:text-6xl font-extrabold drop-shadow-lg">
          Producción Audiovisual de Impacto
        </h2>
        <p className="mt-6 text-lg max-w-2xl mx-auto text-gray-200">
          Creamos, producimos y transmitimos contenido innovador para TV y
          plataformas digitales. Tu historia merece estar en pantalla.
        </p>
        <div className="mt-8 flex justify-center gap-4">
          <a
            href="#programas"
            className="px-6 py-3 bg-purple-600 rounded-2xl text-white font-semibold shadow-lg hover:bg-purple-700 transition"
          >
            Ver Programas
          </a>
          <a
            href="#contacto"
            className="px-6 py-3 border border-white rounded-2xl text-white font-semibold hover:bg-white hover:text-black transition"
          >
            Contacto
          </a>
        </div>
      </div>
    </section>
  );
}
