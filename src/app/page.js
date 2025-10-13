import Hero from "../components/Hero";
import programas from "../data/programas.json";
import ProgramaCard from "../components/ProgramaCard";
import SponsorsCarousel from "@/components/SponsorCarousel";

export default function Home() {
  return (
    <div>
      {/* Hero principal */}
      <Hero />

      {/* Sección Programas */}
      <section id="programas" className="scroll-mt-32 container mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold mb-8 text-center">
          Nuestros Programas
        </h2>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {programas.map((programa) => (
            <ProgramaCard key={programa.id} programa={programa} />
          ))}
        </div>
      {/* Sponsor Carousel */}
      < SponsorsCarousel />
      </section>
    </div>
  );
}
