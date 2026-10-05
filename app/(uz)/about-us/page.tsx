import { AboutPage } from "@/components/pages/OtherPages";
import { getDictionary } from "@/content/dictionary";
import { pageMetadata } from "@/lib/seo";

export async function generateMetadata() {
  const m = getDictionary("uz").meta.about;
  return pageMetadata({ locale: "uz", path: "/about-us", title: m.title, description: m.description });
}

export default async function Page() {
  return <AboutPage locale={"uz"} />;
}
