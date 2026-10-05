// Facts about the agency shared by every language.

export const PHONE_DISPLAY = "+998 98 070 88 83";
export const PHONE_HREF = "tel:+998980708883";
export const TELEGRAM_URL = "https://t.me/+998980708883";
export const EMAIL = "sultaninvestuz@gmail.com";

export const GA_ID = "G-0PSY447XMP";
export const GOOGLE_SITE_VERIFICATION = "p7ltvlR2NdIHc6nOX8YwOi3QGI-v2CPrptxyWLNIXBI";

/** Where the lead form posts. Served by lead-api/ behind nginx on the VPS. */
export const LEAD_ENDPOINT = "/api/lead";

/**
 * TODO(owner): approximate figures carried over from the old site.
 * Confirm or correct before launch.
 */
export const STATS = { years: 5, projects: 45, videos: 1000 };

/**
 * TODO(owner): drop the showreel at public/media/showreel.mp4 (1080p, 30-90 s,
 * H.264, no sound needed) and a still at public/media/showreel-poster.jpg,
 * then set this to true. Until then the opening titles run on their own.
 */
export const HAS_SHOWREEL = false;

export const ADDRESS = {
  uz: "Toshkent, Mirzo Ulug‘bek tumani, Tepamasjid-2",
  ru: "Ташкент, Мирзо-Улугбекский район, Тепамасжид-2",
  en: "Tepamasjid-2, Mirzo Ulugbek district, Tashkent",
} as const;
