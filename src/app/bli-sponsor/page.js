import SiteFooter from "@/components/site-footer";
import SiteHeader from "@/components/site-header";
import { getWpNodeByUri } from "@/lib/wordpress";

const BLI_SPONSOR_URI = "/sammarbeid-med-mannpod/";

export const metadata = {
  title: "Bli sponsor | MANNPOD",
  description: "Sponsormuligheter hos MANNPOD.",
};

export const revalidate = 60;

export default async function BliSponsorPage() {
  let cmsContent = null;

  try {
    cmsContent = await getWpNodeByUri(BLI_SPONSOR_URI, revalidate);
  } catch {
    cmsContent = null;
  }

  return (
    <div className="min-h-screen bg-[#1f2730] text-white">
      <div className="bg-[#222b35]">
        <SiteHeader className="border-b border-white/10" />
      </div>

      <main className="mx-auto w-full max-w-4xl px-6 py-20">
        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-[#415791]">Bli sponsor</p>
        <h1 className="mb-6 text-4xl font-extrabold">{cmsContent?.title ?? "Samarbeid med MANNPOD"}</h1>

        {cmsContent ? (
          <article
            className="text-lg leading-8 text-white/85 [&_a]:text-[#8ea4dc] [&_a:hover]:text-[#b7c7ef] [&_h2]:mb-3 [&_h2]:mt-8 [&_h2]:text-3xl [&_h2]:font-bold [&_h3]:mb-2 [&_h3]:mt-6 [&_h3]:text-2xl [&_h3]:font-bold [&_p]:mb-5 [&_ul]:mb-5 [&_ul]:list-disc [&_ul]:pl-6"
            dangerouslySetInnerHTML={{ __html: cmsContent.content }}
          />
        ) : (
          <p className="text-xl leading-8 text-white/85">
            Fant ikke innhold fra WordPress akkurat n\u00e5. Sjekk at innlegget p\u00e5 <code>/sammarbeid-med-mannpod/</code> finnes og at
            GraphQL-endpointet er tilgjengelig.
          </p>
        )}
      </main>

      <SiteFooter visPlattformer={false} />
    </div>
  );
}
