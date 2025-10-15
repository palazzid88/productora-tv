import Link from "next/link";

export default function ProgramaCard({ programa }) {
  return (
    <div className="bg-white/10 backdrop-blur-lg rounded-2xl overflow-hidden shadow-lg hover:scale-105 transform transition duration-300 flex flex-col">
      {/* Logo */}
      <div className="h-40 flex items-center justify-center bg-black">
        <img
          src={programa.logo}
          alt={programa.nombre}
          className="max-h-40 object-contain"
        />
      </div>

      {/* Info */}
      <div className="p-6 flex-1 flex flex-col">
        <h3 className="text-xl font-bold text-purple-400 mb-2">
          {programa.nombre}
        </h3>
        <p className="text-sm text-gray-300 mb-1">
          <span className="font-semibold">Canal:</span> {programa.canal}
        </p>
        <p className="text-sm text-gray-300 mb-1">
          <span className="font-semibold">Horario:</span> {programa.diaHora}
        </p>
        <p className="text-sm text-gray-300 mb-3">
          <span className="font-semibold">Conductor:</span> {programa.conductor}
        </p>
        <p className="text-gray-200 text-sm flex-1">{programa.descripcionCorta}</p>

        {/* Botón */}
        <div className="mt-6">
          <Link
            href={`/programas/${programa.id}`}
            className="inline-block w-full text-center px-4 py-2 bg-purple-600 text-white font-semibold rounded-xl hover:bg-purple-700 transition"
          >
            Ver más
          </Link>
        </div>
      </div>
    </div>
  );
}
