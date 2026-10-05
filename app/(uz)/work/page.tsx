import { WorkPage } from "@/components/pages/OtherPages";
import { getDictionary } from "@/content/dictionary";
import { pageMetadata } from "@/lib/seo";

export async function generateMetadata() {
  const m = getDictionary("uz").meta.work;
  return pageMetadata({ locale: "uz", path: "/work", title: m.title, description: m.description });
}

export default async function Page() {
  return <WorkPage locale={"uz"} />;
}
