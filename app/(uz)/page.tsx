import HomePage from "@/components/pages/HomePage";
import { getDictionary } from "@/content/dictionary";
import { pageMetadata } from "@/lib/seo";

export async function generateMetadata() {
  const m = getDictionary("uz").meta.home;
  return pageMetadata({ locale: "uz", path: "/", title: m.title, description: m.description, isHome: true });
}

export default async function Page() {
  return <HomePage locale={"uz"} />;
}
