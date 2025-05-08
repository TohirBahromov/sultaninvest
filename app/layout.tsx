import type { Metadata } from "next";
import "./globals.css";
import "./keyframes.css";
import "./animation.css";
import "./responsive.css";
import { Quicksand, Rubik } from "next/font/google";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import MobileDrawer from "@/components/Elements/MobileDrawer";
import Backdrop from "@/components/Elements/Backdrop";
import Script from "next/script";

const quicksand = Quicksand({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});
const rubik = Rubik({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Sultan Quick Invest",
  description:
    "Sultan Quick Invest - Ijodiy g‘oyalar, muvaffaqiyatli natijalar!",
  alternates: {
    canonical: "https://sultaninvest.uz/",
    languages: {
      uz: "https://sultaninvest.uz/",
      ru: "https://sultaninvest.uz/ru",
    },
  },
  verification: {
    google: "p7ltvlR2NdIHc6nOX8YwOi3QGI-v2CPrptxyWLNIXBI",
  },
  icons: {
    icon: "/favicon.png",
  },
  openGraph: {
    images: "/opengraph-logo.png",
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <Script
          id="google-analytics"
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-0PSY447XMP"
        />
        <Script id="gtag-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
          
            gtag('config', 'G-0PSY447XMP');
          `}
        </Script>
      </head>
      <body className={`${rubik.className} ${quicksand.className} antialiased`}>
        <Navbar />
        {children}
        <Footer />
        <Backdrop />
        <MobileDrawer />
      </body>
    </html>
  );
}
