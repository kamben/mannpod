import SiteFooter from "@/components/site-footer";
import SiteHeader from "@/components/site-header";

export const metadata = {
  title: "Kontakt Oss | MANNPOD",
  description: "Ta kontakt med MANNPOD.",
};

export default function KontaktOssPage() {
  return (
    <div className="min-h-screen bg-[#1f2730] text-white">
      <div className="bg-[#222b35]">
        <SiteHeader className="border-b border-white/10" />
      </div>

      <main className="mx-auto w-full max-w-4xl px-6 py-20">
        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-[#415791]">Kontakt Oss</p>
        <h1 className="mb-4 text-4xl font-extrabold">La oss h\u00f8re fra deg</h1>
        <p className="mb-6 text-xl leading-8 text-white/85">
          Dette er en placeholder-side for kontakt. Vi kan senere legge inn kontaktskjema, e-post, sosiale medier og annen relevant
          informasjon.
        </p>
        <a
          href="mailto:kontakt@mannpod.no"
          className="inline-flex items-center rounded-md bg-[#415791] px-5 py-3 text-sm font-bold uppercase tracking-wide text-white transition hover:bg-[#415791]"
        >
          kontakt@mannpod.no
        </a>
      </main>

      <SiteFooter visPlattformer={false} />
    </div>
  );
}
