import HomePage from "@/components/pages/HomePage";
import { getDictionary } from "@/content/dictionary";
import type { Locale } from "@/lib/i18n";
import { pageMetadata } from "@/lib/seo";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = (await params) as { locale: Locale };
  const m = getDictionary(locale).meta.home;
  return pageMetadata({ locale: locale, path: "/", title: m.title, description: m.description, isHome: true });
}

export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = (await params) as { locale: Locale };
  return <HomePage locale={locale} />;
}
