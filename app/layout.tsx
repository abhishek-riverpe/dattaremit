import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ChatWidget } from "@/components/chat-widget";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl = "https://dattaremit.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "DattaRemit - Money without borders",
    template: "%s | DattaRemit",
  },
  description:
    "Send money internationally with zero fees, instant transfers, and the best exchange rates. Global banking and payments powered by regulated stablecoins.",
  keywords: [
    "international money transfer",
    "send money abroad",
    "remittance",
    "USD to INR",
    "zero fee transfer",
    "instant money transfer",
    "stablecoin payments",
    "global payments",
    "cross-border payments",
    "DattaRemit",
  ],
  authors: [{ name: "DattaRemit" }],
  creator: "DattaRemit",
  publisher: "DattaRemit",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "DattaRemit",
    title: "DattaRemit - Money without borders",
    description:
      "Send money internationally with zero fees, instant transfers, and the best exchange rates. Global banking and payments powered by regulated stablecoins.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "DattaRemit - Money without borders",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "DattaRemit - Money without borders",
    description:
      "Send money internationally with zero fees, instant transfers, and the best exchange rates.",
    images: ["/og-image.png"],
    creator: "@dattaremit",
  },
  verification: {
    // Add these when you have the verification codes
    // google: "your-google-verification-code",
    // yandex: "your-yandex-verification-code",
  },
  alternates: {
    canonical: siteUrl,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${siteUrl}/#organization`,
      name: "DattaRemit",
      url: siteUrl,
      logo: {
        "@type": "ImageObject",
        url: `${siteUrl}/logo.png`,
      },
      sameAs: [
        "https://twitter.com/dattaremit",
        "https://linkedin.com/company/dattaremit",
      ],
      contactPoint: {
        "@type": "ContactPoint",
        contactType: "customer service",
        email: "support@dattaremit.com",
      },
    },
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      url: siteUrl,
      name: "DattaRemit",
      publisher: {
        "@id": `${siteUrl}/#organization`,
      },
      description:
        "Send money internationally with zero fees, instant transfers, and the best exchange rates.",
    },
    {
      "@type": "FinancialService",
      "@id": `${siteUrl}/#financialservice`,
      name: "DattaRemit",
      description:
        "International money transfer service with zero fees and instant transfers powered by stablecoins.",
      url: siteUrl,
      priceRange: "Free",
      areaServed: {
        "@type": "Country",
        name: "Worldwide",
      },
      serviceType: "International Money Transfer",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <ChatWidget />
      </body>
    </html>
  );
}
