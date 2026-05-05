import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";
import { company } from "@/config/company";
import { colors } from "@/config/colors";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Iconixcode | Software Engineering Solutions",
  description:
    "Iconixcode is a software engineering solutions company building modern websites, digital products, business systems, and scalable software platforms.",
  keywords: [
    "Iconixcode",
    "software engineering solutions",
    "web development Sri Lanka",
    "software company Sri Lanka",
    "custom software development",
    "Next.js development",
    "website development",
    "digital product development",
    "business systems development",
  ],
  authors: [{ name: "Iconixcode" }],
  creator: "Iconixcode",
  publisher: "Iconixcode",
  metadataBase: new URL("https://iconixcode.com"),
  alternates: {
    canonical: "https://iconixcode.com",
  },
  openGraph: {
    title: "Iconixcode | Software Engineering Solutions",
    description:
      "Iconixcode builds modern websites, digital products, business systems, and scalable software platforms.",
    url: "https://iconixcode.com",
    siteName: "Iconixcode",
    type: "website",
  },
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
    <html lang="en">
      <body className={spaceGrotesk.className} style={themeStyle}>
        {children}
      </body>
    </html>
  );
}