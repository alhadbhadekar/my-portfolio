import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { siteMeta } from "@/lib/site";

export const metadata: Metadata = {
  title: {
    default: siteMeta.title,
    template: `%s | ${siteMeta.title}`,
  },
  description: siteMeta.description,
  metadataBase: new URL(siteMeta.url),
  icons: {
    icon: 'my-portfolio/logo.png',
    shortcut: 'my-portfolio/logo.png',
    apple: 'my-portfolio/logo.png',
  },
  openGraph: {
    title: siteMeta.title,
    description: siteMeta.description,
    url: siteMeta.url,
    siteName: siteMeta.title,
    images: [
      {
        url: "my-portfolio/logo.png",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

/* ✅ REQUIRED FOR MOBILE */
export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body suppressHydrationWarning>
        <Navbar />

        <main>
          <div className="container">
            {children}
          </div>
        </main>

        <Footer />
      </body>
    </html>
  );
}
