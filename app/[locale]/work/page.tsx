import { WorkPage } from "@/components/pages/OtherPages";
import { getDictionary } from "@/content/dictionary";
import type { Locale } from "@/lib/i18n";
import { pageMetadata } from "@/lib/seo";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = (await params) as { locale: Locale };
  const m = getDictionary(locale).meta.work;
  return pageMetadata({ locale: locale, path: "/work", title: m.title, description: m.description });
}

export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = (await params) as { locale: Locale };
  return <WorkPage locale={locale} />;
}
