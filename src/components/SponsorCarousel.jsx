"use client";

import auspiciantes from "../data/auspiciantes.json";

export default function SponsorsGrid() {
  return (
    <div className="py-12 bg-black">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-10 items-center justify-items-center">
          {auspiciantes.map((sponsor) => (
            <a
              key={sponsor.id}
              href={sponsor.url}
              target="_blank"
              className="flex flex-col items-center group"
            >
              <img
                src={sponsor.logo}
                alt={sponsor.nombre}
                className="h-32 sm:h-36 md:h-40 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
              />
              <span className="mt-3 text-white text-sm sm:text-base text-center opacity-0 group-hover:opacity-100 transition-opacity">
                {sponsor.nombre}
              </span>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
