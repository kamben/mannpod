import BuzzsproutPlayer from "@/components/buzzsprout-player";
import SiteFooter from "@/components/site-footer";
import SiteHeader from "@/components/site-header";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#1f2730] text-white">
      <section className="relative min-h-[72vh] overflow-hidden lg:min-h-[78vh]">
        <div className="absolute inset-0 bg-[url('/background.jpeg')] bg-cover bg-[center_20%]" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#131a23f2] via-[#131a23d9] to-[#131a2359]" />

        <SiteHeader />

        <main className="relative z-10 mx-auto flex w-full max-w-6xl px-6 pb-16 pt-8 md:pb-20 md:pt-12">
          <div className="max-w-xl md:pt-14">
            <div className="mb-5 flex items-center gap-3">
              <span className="h-px w-11 bg-white/70" />
              <p className="text-xs font-semibold uppercase tracking-[0.26em] text-white/85">{"En modig og \u00e6rlig"}</p>
            </div>
            <h1 className="mb-5 text-4xl font-extrabold leading-tight sm:text-5xl lg:text-6xl">Podcast-opplevelse</h1>
            <p className="mb-9 max-w-lg text-base leading-8 text-white/85 sm:text-lg">
              {"MANNPOD er en podcast om psykisk helse og \u00e6rlige samtaler. Her deler vanlige menn sine erfaringer med livets utfordringer."}
            </p>
            <a
              href="https://open.spotify.com/show/2YpuFbnU5QTFrclQj05BxC?si=138cd5defc5743d5"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 rounded-full bg-[#415791] px-6 py-3 text-sm font-bold uppercase tracking-wide text-white transition hover:bg-[#415791]"
            >
              <span className="grid h-8 w-8 place-items-center rounded-full bg-white/20">
                <svg viewBox="0 0 24 24" className="h-4 w-4 fill-white" aria-hidden="true">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </span>
              Start lytting
            </a>
          </div>
        </main>
      </section>

      <section className="mannpod-surface py-8 md:py-6">
        <div className="mx-auto w-full max-w-6xl px-6">
          <div className="mb-7 md:mb-2">
            <h2 className="text-3xl font-bold sm:text-4xl">Siste episoder</h2>
          </div>

          <div className=" p-3 md:p-5">
            <BuzzsproutPlayer />
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
