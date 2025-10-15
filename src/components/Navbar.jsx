"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react"; // íconos livianos

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="absolute top-0 left-0 w-full z-50 bg-black/30 backdrop-blur-sm text-white">
      <div className="container mx-auto flex items-center justify-between px-2 py-1">
        {/* Logo */}
        <Link href="/">
          <Image
            src="/logos/logo-sin-fondo.png"
            alt="ProductoraTV Logo"
            width={80}
            height={20}
            className="object-contain"
          />
        </Link>

        {/* Menú desktop */}
        <nav className="hidden md:flex space-x-6">
          <a href="/#programas" className="hover:text-purple-400 transition">
            Programas
          </a>
          <a href="#nosotros" className="hover:text-purple-400 transition">
            Nosotros
          </a>
          <a href="#contacto" className="hover:text-purple-400 transition">
            Contacto
          </a>
        </nav>

        {/* Botón hamburguesa mobile */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden focus:outline-none"
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Menú mobile desplegable */}
      {menuOpen && (
        <div className="md:hidden bg-black/80 backdrop-blur-md flex flex-col items-center space-y-4 py-4">
          <a href="/#programas" className="hover:text-purple-400" onClick={() => setMenuOpen(false)}>
            Programas
          </a>
          <a href="#nosotros" className="hover:text-purple-400" onClick={() => setMenuOpen(false)}>
            Nosotros
          </a>
          <a href="#contacto" className="hover:text-purple-400" onClick={() => setMenuOpen(false)}>
            Contacto
          </a>
        </div>
      )}
    </header>
  );
}
