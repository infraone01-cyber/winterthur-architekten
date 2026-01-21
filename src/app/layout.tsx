import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Peer Höpli Architektur | Architekturbüro Winterthur",
  description:
    "Architekturbüro in Winterthur - Neubau, Umbau, Sanierung. Wir entwickeln architektonische Lösungen, die Ästhetik, Funktion und Nachhaltigkeit verbinden.",
  keywords: ["Architektur", "Winterthur", "Neubau", "Umbau", "Sanierung", "Architekt"],
  authors: [{ name: "Peer Höpli Architektur" }],
  openGraph: {
    title: "Peer Höpli Architektur | Architekturbüro Winterthur",
    description: "Architekturbüro in Winterthur - Neubau, Umbau, Sanierung",
    url: "https://winterthur-architekten.ch",
    siteName: "Peer Höpli Architektur",
    locale: "de_CH",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">
      <body className={`${inter.className} antialiased`}>
        <Navigation />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
