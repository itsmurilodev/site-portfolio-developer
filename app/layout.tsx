import type { Metadata } from "next";
import { Outfit, Fira_Code } from "next/font/google";
import "./globals.css";
import { siteConfig } from "@/lib/site";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

const firaCode = Fira_Code({
  subsets: ["latin"],
  variable: "--font-fira-code",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.title,
    template: "%s | Murilo Alves (Murilo Dev)",
  },
  description: siteConfig.description,
  alternates: {
    canonical: siteConfig.url,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  keywords: [
    "Murilo Alves",
    "Murilo Dev",
    "itsmurilo",
    "Desenvolvedor Web",
    "Desenvolvedor Backend",
    "Contratar Desenvolvedor",
    "Desenvolvedor React",
    "Desenvolvedor Next.js",
    "Desenvolvedor PHP",
    "DevOps",
    "Automação",
    "Docker",
    "Linux",
    "n8n",
    "Async Studio",
    "Portfólio Desenvolvedor"
  ],
  authors: [{ name: "Murilo Alves", url: siteConfig.url }],
  creator: "Murilo Alves (Murilo Dev)",
  openGraph: {
    title: siteConfig.title,
    description: siteConfig.description,
    url: siteConfig.url,
    siteName: "Murilo Alves (Murilo Dev) Portfolio",
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.title,
    description: siteConfig.description,
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html 
      lang="pt-BR" 
      className={`${outfit.variable} ${firaCode.variable} scroll-smooth`}
    >
      <body className="font-sans antialiased text-zinc-300 bg-bg-main min-h-screen flex flex-col justify-between selection:bg-terminal-orange/30 selection:text-white">
        {children}
      </body>
    </html>
  );
}
