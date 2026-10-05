import { ServicesPage } from "@/components/pages/ServicesPages";
import { getDictionary } from "@/content/dictionary";
import { pageMetadata } from "@/lib/seo";

export async function generateMetadata() {
  const m = getDictionary("uz").meta.services;
  return pageMetadata({ locale: "uz", path: "/services", title: m.title, description: m.description });
}

export default async function Page() {
  return <ServicesPage locale={"uz"} />;
}
