import Link from "next/link";
import Image from "next/image";
import {
  Facebook,
  Instagram,
  Youtube,
  Mail,
  Phone,
  MessageCircle,
} from "lucide-react";

export default function ProgramaDetalle({ programa }) {
  return (
    <div className="max-w-5xl mx-auto p-6 text-white">
      {/* Header */}
      <div className="flex flex-col sm:flex-row items-center sm:items-start gap-8 mb-10">
        {/* Imagen más grande */}
        <div className="flex-shrink-0 w-[320px] h-[320px] sm:w-[380px] sm:h-[475px] relative mx-auto sm:mx-0">
          <Image
            src={programa.img}
            alt={programa.nombre}
            fill
            className="rounded-2xl bg-black p-2 object-contain"
          />
        </div>

        {/* Datos principales */}
        <div className="flex-1 text-center sm:text-left">
          <h1 className="text-4xl font-bold text-purple-400 mb-3">
            {programa.nombre}
          </h1>
          <p className="text-gray-300">
            <span className="font-semibold">Canal:</span> {programa.canal}
          </p>
          <p className="text-gray-300">
            <span className="font-semibold">Horario:</span> {programa.diaHora}
          </p>
          <p className="text-gray-300">
            <span className="font-semibold">Duración:</span> {programa.duracion}
          </p>
          <p className="text-gray-300">
            <span className="font-semibold">Conductor:</span>{" "}
            {programa.conductor}
          </p>
          <p className="text-gray-300">
            <span className="font-semibold">Género:</span> {programa.genero}
          </p>
        </div>
      </div>

      {/* Descripción larga */}
      <div className="mb-10">
        <h2 className="text-2xl font-semibold mb-3 text-purple-300">
          Descripción
        </h2>
        <p className="text-gray-200 leading-relaxed text-lg">
          {programa.descripcionLarga}
        </p>
      </div>

      {/* Contacto */}
      <div className="mb-10">
        <h2 className="text-2xl font-semibold mb-3 text-purple-300">
          Contacto
        </h2>
        <div className="flex flex-wrap justify-center sm:justify-start gap-5">
          {programa.contacto.youtube && (
            <Link href={programa.contacto.youtube} target="_blank">
              <Youtube className="w-7 h-7 hover:text-red-500 transition" />
            </Link>
          )}
          {programa.contacto.instagram && (
            <Link href={programa.contacto.instagram} target="_blank">
              <Instagram className="w-7 h-7 hover:text-pink-500 transition" />
            </Link>
          )}
          {programa.contacto.facebook && (
            <Link href={programa.contacto.facebook} target="_blank">
              <Facebook className="w-7 h-7 hover:text-blue-600 transition" />
            </Link>
          )}
          {programa.contacto.whatsapp && (
            <Link
              href={`https://wa.me/${programa.contacto.whatsapp.replace(
                /[^0-9]/g,
                ""
              )}`}
              target="_blank"
            >
              <MessageCircle className="w-7 h-7 hover:text-green-500 transition" />
            </Link>
          )}
          {programa.contacto.email && (
            <Link href={`mailto:${programa.contacto.email}`}>
              <Mail className="w-7 h-7 hover:text-gray-400 transition" />
            </Link>
          )}
          {programa.contacto.telefono && (
            <Link href={`tel:${programa.contacto.telefono}`}>
              <Phone className="w-7 h-7 hover:text-gray-400 transition" />
            </Link>
          )}
        </div>
      </div>

      {/* Volver al listado */}
      <div className="text-center sm:text-left">
        <Link
          href="/"
          className="inline-block mt-4 px-6 py-3 bg-purple-600 rounded-xl text-white font-semibold hover:bg-purple-700 transition"
        >
          ← Volver al listado
        </Link>
      </div>
    </div>
  );
}
