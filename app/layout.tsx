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
    template: "%s | Murilo Alves",
  },
  description: siteConfig.description,
  keywords: [
    "Murilo Alves",
    "Desenvolvedor Web",
    "Backend",
    "DevOps",
    "Automação",
    "React",
    "Next.js",
    "PHP",
    "MySQL",
    "Docker",
    "Linux",
    "Portfólio Desenvolvedor",
    "n8n",
    "Async Studio"
  ],
  authors: [{ name: "Murilo Alves" }],
  creator: "Murilo Alves",
  openGraph: {
    title: "Murilo Alves | Backend, DevOps e Automação",
    description: siteConfig.description,
    url: siteConfig.url,
    siteName: "Murilo Alves Portfolio",
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Murilo Alves | Desenvolvedor Web em formação",
    description: "Backend, DevOps e Automação aplicados ao desenvolvimento web.",
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
