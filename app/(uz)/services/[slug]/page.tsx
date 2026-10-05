import { notFound } from "next/navigation";
import { ServicePage } from "@/components/pages/ServicesPages";
import { SERVICE_SLUGS, getService } from "@/content/services";
import type { Locale } from "@/lib/i18n";
import { pageMetadata } from "@/lib/seo";
import { serviceJsonLd } from "@/lib/jsonld";

export const dynamicParams = false;

export function generateStaticParams() {
  return SERVICE_SLUGS.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const locale: Locale = "uz";
  const s = getService(slug);
  if (!s) return {};
  const c = s.copy[locale];
  return pageMetadata({ locale, path: `/services/${slug}`, title: c.seoTitle, description: c.short });
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const locale: Locale = "uz";
  const s = getService(slug);
  if (!s) notFound();
  return (
    <>
      <ServicePage locale={locale} service={s} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd(s, locale)).replace(/</g, "\u003c") }}
      />
    </>
  );
}
