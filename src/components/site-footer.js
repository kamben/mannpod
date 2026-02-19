import Image from "next/image";
import { plattformer } from "./site-data";

export default function SiteFooter({ visPlattformer = true }) {
  return (
    <footer className="relative overflow-hidden">
      {visPlattformer ? (
        <>
          <div
            className="absolute inset-0 bg-center bg-no-repeat bg-scroll md:bg-fixed"
            style={{ backgroundImage: "url('/paralax.png')" }}
          />
          <div className="absolute inset-0 bg-black/65" />
        </>
      ) : (
        <>
          <div className="absolute inset-0 bg-[#1f2730]" />
          <div className="absolute inset-0 bg-black/35" />
        </>
      )}

      <div className="relative mx-auto flex w-full max-w-6xl flex-col items-center gap-8 px-6 py-16 text-center">
        {visPlattformer ? (
          <>
            <p className="text-xl font-semibold text-white">{"Abonner og f\u00f8lg:"}</p>
            <div className="grid w-full max-w-xl grid-cols-2 gap-3 sm:grid-cols-4">
              {plattformer.map((plattform) => (
                <a
                  key={plattform.navn}
                  href="#"
                  className="rounded-md bg-[#2f3f68] px-3 py-5 text-sm font-bold uppercase tracking-wide text-white transition hover:bg-[#415791]"
                >
                  {plattform.navn}
                </a>
              ))}
            </div>
          </>
        ) : null}

        <div className="flex items-center gap-3 border-t border-white/20 pt-6">
          <Image src="/logo.png" alt="MANNPOD logo" width={34} height={34} />
          <p className="text-sm text-white/85">MANNPOD</p>
        </div>
      </div>
    </footer>
  );
}
