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
          Dette er en forel\u00f8pig side for informasjon om podcasten. Her kan vi senere legge inn historien bak MANNPOD, hvem vi er, og
          hva lytterne kan forvente.
        </p>
      </main>

      <SiteFooter visPlattformer={false} />
    </div>
  );
}
