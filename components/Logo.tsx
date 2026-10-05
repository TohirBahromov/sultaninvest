import Link from "next/link";
import type { Locale } from "@/lib/i18n";
import { localePath } from "@/lib/i18n";

// TODO(owner): swap /logo.png for a true vector logo (SVG) when available.
export default function Logo({ locale }: { locale: Locale }) {
  return (
    <Link href={localePath(locale)} className="site-header__logo" aria-label="Sultan Quick Invest">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src="/logo.png" alt="" width={52} height={52} />
    </Link>
  );
}
