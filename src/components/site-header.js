"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import SocialLinks from "./social-links";
import { navItems } from "./site-data";

export default function SiteHeader({ className = "" }) {
  const [menuOpen, setMenuOpen] = useState(false);

  // Hindre scrolling i bakgrunnen når mobil-menyen er åpen
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const close = () => setMenuOpen(false);

  return (
    <header className={`relative z-20 ${className}`}>
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between gap-6 px-6 py-6">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3" onClick={close}>
          <Image src="/logo.png" alt="MANNPOD logo" width={44} height={44} priority />
          <span className="text-xl font-extrabold tracking-wide text-white">MANNPOD</span>
        </Link>

        {/* Desktop nav – vises fra 822px */}
        <nav className="hidden items-center gap-7 text-sm font-semibold text-white/90 min-[822px]:flex">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="transition hover:text-white">
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <SocialLinks className="hidden min-[822px]:flex" />

          {/* Gi Støtte – kun synlig på desktop */}
          <a
            href="#"
            className="hidden min-[822px]:block rounded-md bg-[#2f3f68] px-4 py-2 text-sm font-bold uppercase tracking-wide text-white transition hover:bg-[#415791]"
          >
            {"Gi St\u00f8tte"}
          </a>

          {/* Hamburger-knapp – vises under 822px */}
          <button
            className="relative z-[60] flex min-[822px]:hidden h-10 w-10 flex-col items-center justify-center gap-[5px]"
            onClick={() => setMenuOpen((v) => !v)}
            aria-label={menuOpen ? "Lukk meny" : "\u00c5pne meny"}
            aria-expanded={menuOpen}
          >
            <span
              className="block h-0.5 w-6 rounded-full bg-white transition-all duration-300 ease-in-out"
              style={{ transform: menuOpen ? "translateY(7px) rotate(45deg)" : "" }}
            />
            <span
              className="block h-0.5 w-6 rounded-full bg-white transition-all duration-300 ease-in-out"
              style={{ opacity: menuOpen ? 0 : 1, transform: menuOpen ? "scaleX(0)" : "" }}
            />
            <span
              className="block h-0.5 w-6 rounded-full bg-white transition-all duration-300 ease-in-out"
              style={{ transform: menuOpen ? "translateY(-7px) rotate(-45deg)" : "" }}
            />
          </button>
        </div>
      </div>

      {/* Mobil fullskjerm-overlay */}
      <div
        className="fixed inset-0 z-50 flex flex-col min-[822px]:hidden"
        style={{
          background: "#111820",
          transform: menuOpen ? "translateX(0)" : "translateX(100%)",
          opacity: menuOpen ? 1 : 0,
          transition: "transform 0.32s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.32s ease",
          pointerEvents: menuOpen ? "auto" : "none",
        }}
      >
        {/* Topprad i overlay */}
        <div className="flex items-center justify-between px-6 py-6">
          <Link href="/" className="flex items-center gap-3" onClick={close}>
            <Image src="/logo.png" alt="MANNPOD logo" width={40} height={40} />
            <span className="text-xl font-extrabold tracking-wide text-white">MANNPOD</span>
          </Link>
          <button
            onClick={close}
            aria-label="Lukk meny"
            className="grid h-10 w-10 place-items-center rounded-full text-white/60 transition hover:text-white"
          >
            <svg viewBox="0 0 24 24" className="h-6 w-6 fill-none stroke-current stroke-[1.8]" strokeLinecap="round">
              <path d="M18 6 6 18M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Nav-lenker */}
        <nav className="flex flex-1 flex-col justify-center px-8">
          {navItems.map((item, i) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={close}
              className="flex items-center justify-between border-b border-white/10 py-5 text-2xl font-extrabold tracking-wide text-white/90 transition hover:text-white hover:pl-2"
              style={{ transitionProperty: "padding-left, color", transitionDuration: "200ms" }}
            >
              {item.label}
              <svg viewBox="0 0 24 24" className="h-4 w-4 fill-none stroke-current stroke-[1.8] text-white/30">
                <path d="M9 18l6-6-6-6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
          ))}
        </nav>

        {/* Bunn: Gi Støtte + sosiale lenker */}
        <div className="px-8 pb-10 pt-6">
          <a
            href="#"
            className="mb-6 block w-full rounded-md bg-[#415791] py-3 text-center text-sm font-bold uppercase tracking-widest text-white transition hover:bg-[#5270b5]"
          >
            {"Gi St\u00f8tte"}
          </a>
          <div className="flex justify-center">
            <SocialLinks />
          </div>
        </div>
      </div>
    </header>
  );
}
