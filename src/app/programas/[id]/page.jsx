import programas from "@/data/programas.json";
import ProgramaDetalle from "@/components/ProgramaDetalle";
import { notFound } from "next/navigation";

export default async function ProgramaPage({ params }) {
  const { id } = await params; // 👈 corregido: se espera params
  const programa = programas.find((p) => p.id === id);

  if (!programa) return notFound();

  return <ProgramaDetalle programa={programa} />;
}
