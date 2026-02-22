import Image from "next/image";
import SocialLinks from "./social-links";
import { plattformer } from "./site-data";

function PlatformIcon({ navn }) {
  if (navn === "Spotify") {
    return (
      <svg viewBox="0 0 24 24" className="h-6 w-6 fill-current" aria-hidden="true">
        <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z" />
      </svg>
    );
  }

  if (navn === "YouTube") {
    return (
      <svg viewBox="0 0 24 24" className="h-6 w-6 fill-current" aria-hidden="true">
        <path d="M21.1 7.5a2.9 2.9 0 0 0-2-2C17.3 5 12 5 12 5s-5.3 0-7.1.5a2.9 2.9 0 0 0-2 2A30.7 30.7 0 0 0 2.5 12c0 1.5.1 3 .4 4.5a2.9 2.9 0 0 0 2 2c1.8.5 7.1.5 7.1.5s5.3 0 7.1-.5a2.9 2.9 0 0 0 2-2c.3-1.5.4-3 .4-4.5s-.1-3-.4-4.5zM10.2 15.2V8.8l5.5 3.2-5.5 3.2z" />
      </svg>
    );
  }

  if (navn === "Facebook") {
    return (
      <svg viewBox="0 0 24 24" className="h-6 w-6 fill-current" aria-hidden="true">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
      </svg>
    );
  }

  /* Buzzsprout – mikrofon-ikon */
  return (
    <svg viewBox="0 0 24 24" className="h-6 w-6 fill-current" aria-hidden="true">
      <path d="M12 1a4 4 0 0 1 4 4v7a4 4 0 0 1-8 0V5a4 4 0 0 1 4-4zm-6 10h2a4 4 0 0 0 8 0h2a6 6 0 0 1-5 5.92V19h3v2H8v-2h3v-2.08A6 6 0 0 1 6 11z" />
    </svg>
  );
}

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
          {/* Bølge-separator mellom innhold og footer */}
          <svg
            className="absolute top-0 left-0 w-full h-16"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 64"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <path
              fill="#1f2730"
              d="M0,32 Q240,8 480,32 Q720,56 960,32 Q1200,8 1440,32 L1440,0 L0,0 Z"
            />
          </svg>
        </>
      )}

      <div className={`relative mx-auto flex w-full max-w-6xl flex-col items-center gap-8 px-6 text-center ${visPlattformer ? "py-16" : "pt-20 pb-16"}`}>
        {visPlattformer ? (
          <>
            <p className="text-xl font-semibold text-white">{"Abonner og f\u00f8lg:"}</p>
            <div className="grid w-full max-w-xl grid-cols-2 gap-3 sm:grid-cols-4">
              {plattformer.map((plattform) => {
                const external = plattform.lenke !== "#";
                return (
                  <a
                    key={plattform.navn}
                    href={plattform.lenke}
                    className="flex flex-col items-center gap-2 rounded-md bg-[#2f3f68] px-3 py-5 text-xs font-bold uppercase tracking-wide text-white transition hover:bg-[#5270b5]"
                    target={external ? "_blank" : undefined}
                    rel={external ? "noopener noreferrer" : undefined}
                  >
                    <PlatformIcon navn={plattform.navn} />
                    {plattform.navn}
                  </a>
                );
              })}
            </div>
          </>
        ) : null}

        <div className="flex flex-col items-center gap-3 border-t border-white/20 pt-6">
          <div className="flex items-center gap-3">
            <Image src="/logo.png" alt="MANNPOD logo" width={34} height={34} />
            <p className="text-sm text-white/85">MANNPOD</p>
          </div>
          <SocialLinks />
        </div>
      </div>
    </footer>
  );
}
