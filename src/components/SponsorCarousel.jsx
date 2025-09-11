"use client";

import { useEffect, useRef, useState } from "react";
import auspiciantes from "../data/auspiciantes.json";

export default function SponsorsCarousel() {
  const scrollRef = useRef(null);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    let scrollAmount = 0;

    const interval = setInterval(() => {
      if (scrollContainer && !isPaused) {
        scrollAmount += 1;
        if (scrollAmount >= scrollContainer.scrollWidth / 2) {
          scrollAmount = 0;
        }
        scrollContainer.scrollTo({
          left: scrollAmount,
          behavior: "smooth",
        });
      }
    }, 30);

    return () => clearInterval(interval);
  }, [isPaused]);

  const repeatedSponsors = [...auspiciantes, ...auspiciantes];

  return (
    <div className="overflow-hidden py-10 bg-black">
      <div
        ref={scrollRef}
        className="flex gap-8 min-w-max"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {repeatedSponsors.map((sponsor) => (
          <a
            key={sponsor.id}
            href={sponsor.url}
            target="_blank"
            className="flex-shrink-0 relative group"
          >
            <img
              src={sponsor.logo}
              alt={sponsor.nombre}
              className="h-20 object-contain"
            />
            {/* Tooltip */}
            <span className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 bg-gray-900 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity">
              {sponsor.nombre}
            </span>
          </a>
        ))}
      </div>
    </div>
  );
}
