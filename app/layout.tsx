import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Christine Solignac - Conseil Conjugal et Familial Thérapie",
  description: "J'accompagne des personnes seules et des couples qui souhaitent prendre soin de leurs relations affectives, relationnelles et sexuelles, avancer dans leur relation conjugale et accroître leur estime d'eux même. A Aix-en-Provence, Marseille et en Visio.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}

