import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";
import { colors } from "@/config/colors";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const siteUrl = "https://iconixcode.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),

  title: {
    default: "ICONIXCODE | Software Engineering Solutions",
    template: "%s | ICONIXCODE",
  },

  description:
    "Iconixcode is a software engineering solutions company in Sri Lanka building modern websites, mobile apps, digital products, business systems, and scalable software platforms.",

  keywords: [
    "Iconixcode",
    "ICONIXCODE",
    "Iconixcode Sri Lanka",
    "software engineering solutions",
    "software company Sri Lanka",
    "web development Sri Lanka",
    "website development Sri Lanka",
    "mobile app development Sri Lanka",
    "custom software development",
    "digital product development",
    "business systems development",
    "backend API development",
    "cloud deployment",
    "Next.js development",
    "logo design Sri Lanka",
    "digital growth consulting",
  ],

  authors: [{ name: "Iconixcode" }],
  creator: "Iconixcode",
  publisher: "Iconixcode",

  applicationName: "ICONIXCODE",
  category: "Software Engineering",

  alternates: {
    canonical: siteUrl,
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  openGraph: {
    title: "ICONIXCODE | Software Engineering Solutions",
    description:
      "Iconixcode builds modern websites, mobile apps, digital products, business systems, and scalable software platforms for growing businesses.",
    url: siteUrl,
    siteName: "ICONIXCODE",
    type: "website",
    locale: "en_LK",
  },

  twitter: {
    card: "summary_large_image",
    title: "ICONIXCODE | Software Engineering Solutions",
    description:
      "Modern websites, mobile apps, digital products, business systems, and scalable software platforms built by Iconixcode.",
  },

  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon-96x96.png", sizes: "96x96", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },

  manifest: "/site.webmanifest",

  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Iconixcode",
  url: siteUrl,
  email: "hello@iconixcode.com",
  telephone: "+94785739319",
  description:
    "Iconixcode is a software engineering solutions company building modern websites, mobile apps, digital products, business systems, and scalable software platforms.",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Dehiwala",
    addressCountry: "LK",
  },
  areaServed: [
    {
      "@type": "Country",
      name: "Sri Lanka",
    },
    {
      "@type": "Place",
      name: "Worldwide",
    },
  ],
  contactPoint: {
    "@type": "ContactPoint",
    email: "hello@iconixcode.com",
    telephone: "+94785739319",
    contactType: "customer support",
    areaServed: "LK",
    availableLanguage: ["English", "Sinhala"],
  },
  makesOffer: [
    {
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: "Web Development",
      },
    },
    {
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: "Mobile App Development",
      },
    },
    {
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: "Backend and API Development",
      },
    },
    {
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: "Cloud and Deployment",
      },
    },
    {
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: "Logo Design",
      },
    },
    {
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: "Digital Growth Consulting",
      },
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const themeStyle = {
    "--color-background": colors.background,
    "--color-background-soft": colors.backgroundSoft,
    "--color-text-primary": colors.textPrimary,
    "--color-text-secondary": colors.textSecondary,
    "--color-text-muted": colors.textMuted,
    "--color-border": colors.border,
    "--color-border-soft": colors.borderSoft,
    "--color-glow": colors.glow,
    "--color-card": colors.card,
  } as React.CSSProperties;

  return (
    <html lang="en" style={themeStyle}>
      <body className={spaceGrotesk.className}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationJsonLd),
          }}
        />
        {children}
      </body>
    </html>
  );
}