import { notFound } from "next/navigation";
import programas from "@/data/programas.json";
import Image from "next/image";
import Link from "next/link";
import { Facebook, Instagram, Youtube, Mail, Phone, MessageCircle } from "lucide-react";

export default function ProgramaPage({ params }) {
  const programa = programas.find((p) => p.id === params.id);

  if (!programa) {
    return notFound();
  }

  return (
    <div className="max-w-4xl mx-auto py-12 px-4">
      {/* Header */}
      <div className="flex flex-col sm:flex-row items-center gap-6 border-b pb-6">
        <Image
          src={programa.logo}
          alt={programa.nombre}
          width={120}
          height={120}
          className="rounded-xl"
        />
        <div>
          <h1 className="text-3xl font-bold">{programa.nombre}</h1>
          <p className="text-gray-600">{programa.genero}</p>
          <p className="text-sm text-gray-500">
            {programa.canal} • {programa.diaHora} • {programa.duracion}
          </p>
          <p className="mt-1 font-medium">Conduce: {programa.conductor}</p>
        </div>
      </div>

      {/* Descripción */}
      <div className="mt-6">
        <p className="text-lg leading-relaxed text-gray-800">
          {programa.descripcionLarga}
        </p>
      </div>

      {/* Contacto y Redes */}
      <div className="mt-10">
        <h2 className="text-2xl font-semibold mb-4">Contacto y redes</h2>
        <div className="flex flex-wrap gap-4">
          {programa.contacto.youtube && (
            <Link href={programa.contacto.youtube} target="_blank">
              <Youtube className="w-6 h-6 hover:text-red-500" />
            </Link>
          )}
          {programa.contacto.instagram && (
            <Link href={programa.contacto.instagram} target="_blank">
              <Instagram className="w-6 h-6 hover:text-pink-500" />
            </Link>
          )}
          {programa.contacto.facebook && (
            <Link href={programa.contacto.facebook} target="_blank">
              <Facebook className="w-6 h-6 hover:text-blue-600" />
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
              <MessageCircle className="w-6 h-6 hover:text-green-500" />
            </Link>
          )}
          {programa.contacto.email && (
            <Link href={`mailto:${programa.contacto.email}`}>
              <Mail className="w-6 h-6 hover:text-gray-700" />
            </Link>
          )}
          {programa.contacto.telefono && (
            <Link href={`tel:${programa.contacto.telefono}`}>
              <Phone className="w-6 h-6 hover:text-gray-700" />
            </Link>
          )}
        </div>
      </div>

      {/* Botón volver */}
      <div className="mt-10">
        <Link
          href="/programas"
          className="px-4 py-2 rounded-lg bg-gray-900 text-white hover:bg-gray-700"
        >
          ← Volver a programas
        </Link>
      </div>
    </div>
  );
}
