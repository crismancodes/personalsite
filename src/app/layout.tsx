import type { Metadata } from "next";
import { Grenze, Work_Sans } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

const serif = Grenze({
  weight: ["400", "600", "700"],
  subsets: ["latin"],
  variable: "--font-serif",
});

const sans = Work_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://seancrisman.com"),
  title: "Sean Crisman — Product Design Leader",
  description:
    "Product design leader focused on AI platforms, enterprise systems, and complex product ecosystems.",
  openGraph: {
    siteName: "Sean Crisman",
    url: "https://seancrisman.com",
    title: "Sean Crisman — Product Design Leader",
    description:
      "Product design leader focused on AI platforms, enterprise systems, and complex product ecosystems.",
    images: ["/images/og-image.png"],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/images/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const webSiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Sean Crisman",
    url: "https://seancrisman.com",
  };

  return (
    <html lang="en" className={`${serif.variable} ${sans.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(webSiteSchema) }}
        />
      </head>
      <body className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
