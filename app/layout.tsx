import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "BIO CAFE | Distributeurs automatiques au Maroc",
  description: "Installation, approvisionnement et maintenance de distributeurs automatiques de café, boissons et snacks pour les entreprises au Maroc.",
  other: {
    "codex-preview": "development",
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}
