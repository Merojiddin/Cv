import type { Metadata } from "next";
import { headers } from "next/headers";
import "./globals.css";

const title = "Akhmedov Merojiddin | Multilingual Translator & China Sourcing Specialist";
const description = "Multilingual translator and China sourcing specialist in Yiwu, Zhejiang, with 7+ years of experience in China. Uzbek, Chinese, Russian and English interpretation, sourcing, supplier negotiation and purchasing.";

export async function generateMetadata(): Promise<Metadata> {
  const requestHeaders = await headers();
  const host = requestHeaders.get("x-forwarded-host") || requestHeaders.get("host") || "localhost:3000";
  const protocol = requestHeaders.get("x-forwarded-proto") || (host.startsWith("localhost") || host.startsWith("127.0.0.1") ? "http" : "https");
  const origin = `${protocol}://${host}`;
  return {
    title,
    description,
    icons: { icon: "/icons/message-circle.svg" },
    metadataBase: new URL(origin),
    alternates: { languages: { en: "/resume.html", uz: "/resume-uz.html", "zh-CN": "/resume-zh.html", ru: "/resume-ru.html" } },
    openGraph: { title, description, type: "profile", images: [{ url: `${origin}/og.png`, width: 1730, height: 909, alt: "Akhmedov Merojiddin — multilingual translator and sourcing specialist in Yiwu, China" }] },
    twitter: { card: "summary_large_image", title, description, images: [`${origin}/og.png`] },
    robots: { index: false, follow: false },
  };
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
