import Image from "next/image";
import Link from "next/link";
import SocialLinks from "./social-links";
import { navItems } from "./site-data";

export default function SiteHeader({ className = "" }) {
  return (
    <header className={`relative z-20 ${className}`}>
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between gap-6 px-6 py-6">
        <Link href="/" className="flex items-center gap-3">
          <Image src="/logo.png" alt="MANNPOD logo" width={44} height={44} priority />
          <span className="text-xl font-extrabold tracking-wide text-white">MANNPOD</span>
        </Link>

        <nav className="hidden items-center gap-7 text-sm font-semibold text-white/90 md:flex">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="transition hover:text-white">
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <SocialLinks className="hidden md:flex" />
          <a
            href="#"
            className="rounded-md bg-[#2f3f68] px-4 py-2 text-sm font-bold uppercase tracking-wide text-white transition hover:bg-[#415791]"
          >
            {"Gi St\u00f8tte"}
          </a>
        </div>
      </div>

      <nav className="mx-auto flex w-full max-w-6xl flex-wrap items-center gap-4 px-6 pb-4 text-sm font-semibold text-white/90 md:hidden">
        {navItems.map((item) => (
          <Link key={item.href} href={item.href} className="rounded-sm bg-black/25 px-3 py-2 transition hover:bg-black/35">
            {item.label}
          </Link>
        ))}
        <SocialLinks />
      </nav>
    </header>
  );
}
