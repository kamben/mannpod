import SiteFooter from "@/components/site-footer";
import SiteHeader from "@/components/site-header";

export default function Home() {
  const episoder = [
    {
      id: 1,
      kategori: "LIVSSTIL",
      tittel: "Hvorfor gode samtaler gir bedre hverdager",
      bilde: "https://placehold.co/800x800/cfd4db/1e2530?text=Episode+1",
    },
    {
      id: 2,
      kategori: "INTERVJU",
      tittel: "M\u00f8t stemmen bak ukens mest delte historie",
      bilde: "https://placehold.co/800x800/a29f9c/171b21?text=Episode+2",
    },
    {
      id: 3,
      kategori: "KARRIERE",
      tittel: "Slik bygger du et kreativt studio hjemme",
      bilde: "https://placehold.co/800x800/8d7d70/f4f4f4?text=Episode+3",
    },
  ];

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
              <p className="text-xs font-semibold uppercase tracking-[0.26em] text-white/85">En modig og ærlig</p>
            </div>
            <h1 className="mb-5 text-4xl font-extrabold leading-tight sm:text-5xl lg:text-6xl">Podcast-opplevelse</h1>
            <p className="mb-9 max-w-lg text-base leading-8 text-white/85 sm:text-lg">
              MANNPOD er en podcast om psykisk helse og ærlige samtaler. Her deler vanlige menn sine erfaringer med livets utfordringer.
            </p>
            <a
              href="https://open.spotify.com/show/2YpuFbnU5QTFrclQj05BxC?si=138cd5defc5743d5" target="new"
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

      <section className="mannpod-surface py-14 md:py-16">
        <div className="mx-auto w-full max-w-6xl px-6">
          <div className="mb-7 flex items-center justify-between md:mb-8">
            <h2 className="text-3xl font-bold sm:text-4xl">Siste episoder</h2>
            <div className="flex items-center gap-2 text-sm text-white/70">
              <button className="grid h-8 w-8 place-items-center rounded-full bg-white/10 transition hover:bg-white/20" aria-label="Forrige episoder">
                <svg viewBox="0 0 24 24" className="h-4 w-4 fill-white" aria-hidden="true">
                  <path d="M15.5 19l-7-7 7-7 1.4 1.4L11.3 12l5.6 5.6z" />
                </svg>
              </button>
              <button className="grid h-8 w-8 place-items-center rounded-full bg-white/10 transition hover:bg-white/20" aria-label="Neste episoder">
                <svg viewBox="0 0 24 24" className="h-4 w-4 fill-white" aria-hidden="true">
                  <path d="M8.5 5l7 7-7 7-1.4-1.4 5.6-5.6-5.6-5.6z" />
                </svg>
              </button>
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {episoder.map((episode) => (
              <article key={episode.id} className="rounded-md bg-[#313a45] p-3">
                <div
                  className="relative mb-3 h-72 overflow-hidden rounded-md bg-cover bg-center md:h-80"
                  style={{ backgroundImage: `url(${episode.bilde})` }}
                  role="img"
                  aria-label={`Placeholder-bilde for ${episode.tittel}`}
                >
                  <a
                    href="#"
                    className="absolute bottom-4 left-4 grid h-11 w-11 place-items-center rounded-full bg-white/95 text-[#1f2730] transition hover:scale-105"
                    aria-label={`Spill av ${episode.tittel}`}
                  >
                    <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current" aria-hidden="true">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </a>
                </div>
                <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-[#415791]">{episode.kategori}</p>
                <h3 className="text-2xl font-bold leading-snug sm:text-3xl">{episode.tittel}</h3>
              </article>
            ))}
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
