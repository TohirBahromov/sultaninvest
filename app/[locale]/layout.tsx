import { notFound } from "next/navigation";
import Shell from "@/components/Shell";
import { PREFIXED_LOCALES, isLocale } from "@/lib/i18n";

export const dynamicParams = false;

export function generateStaticParams() {
  return PREFIXED_LOCALES.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  return <Shell locale={locale}>{children}</Shell>;
}
