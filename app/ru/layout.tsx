import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sultan Quick Invest",
  description: "Sultan Quick Invest - Творческие идеи, успешные результаты!",
  alternates: {
    canonical: "https://sultaninvest.uz/ru",
    languages: {
      uz: "https://sultaninvest.uz/",
      ru: "https://sultaninvest.uz/ru",
    },
  },
};

export default function RuLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
