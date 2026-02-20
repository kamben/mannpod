import SiteFooter from "@/components/site-footer";
import SiteHeader from "@/components/site-header";

export const metadata = {
  title: "Om Oss | MANNPOD",
  description: "L\u00e6r mer om MANNPOD.",
};

export default function OmOssPage() {
  return (
    <div className="min-h-screen bg-[#1f2730] text-white">
      <div className="bg-[#222b35]">
        <SiteHeader className="border-b border-white/10" />
      </div>

      <main className="mx-auto w-full max-w-4xl px-6 py-20">
        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-[#415791]">Om Oss</p>
        <h1 className="mb-4 text-4xl font-extrabold">MANNPOD</h1>
        <p className="text-xl leading-8 text-white/85">
          <strong>MANNPOD</strong> er en podkast drevet av Morten Olsen, med et tydelig mål om å løfte frem betydningen av god psykisk helse – særlig blant menn. I podkasten inviteres vanlige menn til å dele sine personlige erfaringer, utfordringer og livshistorier.
          <br/><br/>
          Gjennom modige og ærlige samtaler deler gjestene fra sitt innerste, for å vise at du ikke er alene – og at det ikke er et tegn på svakhet å streve.
          <br/><br/>
          Hver episode gir lytterne et unikt innblikk i menns indre liv. Vi tar opp temaer som sykdom, ensomhet, depresjon, angst og mye mer. Samtalene er nære, respektfulle og ekte.
          <br/><br/>
          MANNPOD ønsker å bidra til å bryte ned stigmaet rundt menns psykiske helse, og å skape rom for større åpenhet, forståelse og medmenneskelighet.
          <br/><br/>
          Gjestene våre er ekte hverdagshelter – mennesker med ulike bakgrunner og livserfaringer, men med en felles vilje til å dele. Sammen skaper vi et trygt rom der sårbarhet og ærlighet har verdi, og hvor lyttere kan finne trøst, gjenkjennelse, inspirasjon og ny innsikt.
          <br/><br/>
          Enten du selv står i utfordringer, eller ønsker å forstå og støtte mennene i livet ditt bedre, er MANNPOD et sted for refleksjon, fellesskap og håp – og et bidrag til et samfunn som tar psykisk helse på alvor.
        </p>
        <br/>
        <div className="center">
        <a
              href="https://open.spotify.com/show/2YpuFbnU5QTFrclQj05BxC?si=138cd5defc5743d5" target="new"
              className="inline-flex items-center gap-3 rounded-full bg-[#415791] px-6 py-3 text-sm font-bold uppercase tracking-wide text-white transition hover:bg-[#415791]"
            >
              <span className="grid h-8 w-8 place-items-center rounded-full bg-white/20">
                <svg viewBox="0 0 24 24" className="h-4 w-4 fill-white" aria-hidden="true">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </span>
              Hør på Spotify
            </a>
          </div>
      </main>

      <SiteFooter visPlattformer={false} />
    </div>
  );
}
