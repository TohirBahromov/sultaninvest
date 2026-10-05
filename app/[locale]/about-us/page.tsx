import { AboutPage } from "@/components/pages/OtherPages";
import { getDictionary } from "@/content/dictionary";
import type { Locale } from "@/lib/i18n";
import { pageMetadata } from "@/lib/seo";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = (await params) as { locale: Locale };
  const m = getDictionary(locale).meta.about;
  return pageMetadata({ locale: locale, path: "/about-us", title: m.title, description: m.description });
}

export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = (await params) as { locale: Locale };
  return <AboutPage locale={locale} />;
}
