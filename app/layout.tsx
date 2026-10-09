import type { Metadata } from "next";
import "./globals.css";
import "./visual-v2.css";

export const metadata: Metadata = {
  title: "HydroBot — Evolução V1, V2 e V3",
  description: "Portfólio técnico da evolução do HydroBot: do primeiro protótipo à plataforma robótica modular com IA embarcada.",
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
    <html lang="pt-BR">
      <body className="antialiased">{children}</body>
    </html>
  );
}
