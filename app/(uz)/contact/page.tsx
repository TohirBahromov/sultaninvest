import { ContactPage } from "@/components/pages/OtherPages";
import { getDictionary } from "@/content/dictionary";
import { pageMetadata } from "@/lib/seo";

export async function generateMetadata() {
  const m = getDictionary("uz").meta.contact;
  return pageMetadata({ locale: "uz", path: "/contact", title: m.title, description: m.description });
}

export default async function Page() {
  return <ContactPage locale={"uz"} />;
}
