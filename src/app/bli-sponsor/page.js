import SiteFooter from "@/components/site-footer";
import SiteHeader from "@/components/site-header";

export const metadata = {
  title: "Bli sponsor | MANNPOD",
  description: "Sponsormuligheter hos MANNPOD.",
};

export default function BliSponsorPage() {
  return (
    <div className="min-h-screen bg-[#1f2730] text-white">
      <div className="bg-[#222b35]">
        <SiteHeader className="border-b border-white/10" />
      </div>

      <main className="mx-auto w-full max-w-4xl px-6 py-20">
        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-[#415791]">Bli sponsor</p>
        <h1 className="mb-4 text-4xl font-extrabold">Samarbeid med MANNPOD</h1>
        <p className="text-xl leading-8 text-white/85">
          Dette er en placeholder-side for sponsorer. Her kan vi senere vise annonsepakker, lyttertall, m\u00e5lgrupper og kontaktpunkt
          for samarbeid.
        </p>
      </main>

      <SiteFooter visPlattformer={false} />
    </div>
  );
}
