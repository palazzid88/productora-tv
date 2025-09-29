import programasData from "@/data/programas.json";
import Link from "next/link";

export default function ProgramaDetalle({ params }) {
  const { id } = params;

  // Buscar el programa correspondiente
  const programa = programasData.find((p) => p.id === id);

  if (!programa) {
    return (
      <div className="p-8 text-center text-white">
        <h2 className="text-2xl font-bold mb-4">Programa no encontrado</h2>
        <Link href="/programas" className="text-purple-400 hover:underline">
          Volver al listado
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto p-6 text-white">
      {/* Header con logo */}
      <div className="flex items-center gap-6 mb-8">
        <img
          src={programa.logo}
          alt={programa.nombre}
          className="w-32 h-32 object-contain rounded-xl bg-black p-2"
        />
        <div>
          <h1 className="text-4xl font-bold text-purple-400 mb-2">
            {programa.nombre}
          </h1>
          <p className="text-gray-300">
            <span className="font-semibold">Canal:</span> {programa.canal}
          </p>
          <p className="text-gray-300">
            <span className="font-semibold">Horario:</span> {programa.diaHora}
          </p>
          <p className="text-gray-300">
            <span className="font-semibold">Conductor:</span> {programa.conductor}
          </p>
          <p className="text-gray-300">
            <span className="font-semibold">Duración:</span> {programa.duracion}
          </p>
          <p className="text-gray-300">
            <span className="font-semibold">Género:</span> {programa.genero}
          </p>
        </div>
      </div>

      {/* Descripción larga */}
      <div className="mb-6">
        <h2 className="text-2xl font-semibold mb-2 text-purple-300">
          Descripción
        </h2>
        <p className="text-gray-200 leading-relaxed">
          {programa.descripcionLarga}
        </p>
      </div>

      {/* Contacto */}
      <div className="mb-6">
        <h2 className="text-2xl font-semibold mb-2 text-purple-300">Contacto</h2>
        <ul className="text-gray-200 space-y-1">
          <li>📞 {programa.contacto.telefono}</li>
          <li>📧 {programa.contacto.email}</li>
          <li>💬 WhatsApp: {programa.contacto.whatsapp}</li>
          <li>
            🌐{" "}
            <a
              href={programa.contacto.youtube}
              target="_blank"
              className="text-purple-400 hover:underline"
            >
              YouTube
            </a>{" "}
            |{" "}
            <a
              href={programa.contacto.instagram}
              target="_blank"
              className="text-purple-400 hover:underline"
            >
              Instagram
            </a>{" "}
            |{" "}
            <a
              href={programa.contacto.facebook}
              target="_blank"
              className="text-purple-400 hover:underline"
            >
              Facebook
            </a>
          </li>
        </ul>
      </div>

      {/* Volver */}
      <Link
        href="/"
        className="inline-block mt-4 px-4 py-2 bg-purple-600 rounded-xl text-white font-semibold hover:bg-purple-700 transition"
      >
        ← Volver al listado
      </Link>
    </div>
  );
}
