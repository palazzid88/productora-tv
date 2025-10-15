"use client";

export default function Hero() {
  return (
    <section className="relative w-full h-[100vh] flex items-center justify-center overflow-hidden bg-black">
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        src="/banner/video-banner.mp4"
        autoPlay
        loop
        muted
        playsInline
      />
      <div className="absolute inset-0 bg-black/50"></div>

    <div className="relative z-10 text-center text-white px-6 pt-32 md:pt-24">
      <h1 className="text-4xl md:text-6xl font-bold mb-4 drop-shadow-lg">
        Producción audiovisual de <span className="text-purple-400">impacto</span>
      </h1>
      <p className="text-lg md:text-2xl max-w-2xl mx-auto">
        Creamos, producimos y transmitimos{" "}
        <span className="text-purple-400">contenido innovador</span> para TV y plataformas digitales.
      </p>
    </div>

    </section>
  );
}
