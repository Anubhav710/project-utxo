import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import dynamic from "next/dynamic";
import { myFont2 } from "@/fonts";
const HeaderNoSSR = dynamic(() => import("@/components/sections/Header"), {
  ssr: false,
});

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "UTXO Web Tech | Web, Graphic, and Digital Marketing Services",
  description:
    "UTXO Web Tech offers top-tier web development, digital marketing, graphic design, and a wide range of digital solutions for your business. Contact us today!",
  keywords:
    "Digital Marketing Services, SEO Optimization, Social Media Marketing, PPC Advertising, Web Development, Content Marketing, Email Marketing, Online Marketing Solutions, Search Engine Marketing, Digital Advertising, Web Design and Development, Marketing Automation, Lead Generation Services, Online Branding, Digital Strategy, Graphic Design, Brand Identity",
  alternates: {
    canonical: "https://utxotech.com/",
    languages: {
      en: "https://utxotech.com/",
      "x-default": "https://utxotech.com/",
    },
  },
  icons: {
    icon: [{ url: "/images/favicon.ico" }],
    apple: [{ url: "/images/favicon.ico" }],
    shortcut: [{ url: "/images/favicon.ico" }],
  },
  openGraph: {
    type: "article",
    title: "UTXO Web Tech | Web, Graphic, and Digital Marketing Services",
    description:
      "UTXO Web Tech offers top-tier web development, digital marketing, graphic design, and a wide range of digital solutions for your business. Contact us today!",
    url: "https://utxotech.com/",
    locale: "en_US",
    siteName: "UTXO Web Tech",
    images: [{ url: "/images/utxo-og.jpg" }],
  },
  twitter: {
    card: "summary",
    title: "Utxo Web Tech",
    description:
      "UTXO Web Tech offers top-tier web development, digital marketing, graphic design, and a wide range of digital solutions for your business. Contact us today!",
    site: "@utxotech",
    creator: "@utxotech",
    images: ["/images/utxo-twitter.jpg"],
  },
  other: {
    "article:publisher": "https://www.facebook.com/utxotech/",
    author: "Utxo Web Tech",
    language: "english",
    audience: "All, Business",
    robots: "index, follow",
    googlebot: "index, follow",
    "apple-mobile-web-app-capable": "yes",
    "apple-mobile-web-app-status-bar-style": "default",
    "apple-touch-full-screen": "yes",
    "apple-mobile-web-app-title":
      "UTXO Web Tech | Web, Graphic, and Digital Marketing Services",
  },
  appleWebApp: {
    title: "UTXO Web Tech",
    statusBarStyle: "default",
    startupImage: [
      {
        url: "/images/favicon.ico",
      },
    ],
  },
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
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-WV83XMDV');`,
          }}
        />
        <meta
          name="facebook-domain-verification"
          content="usxolc3084tpt8qu3tw98f6go6354g"
        />
      </head>
      <body className={`${myFont2.className} antialiased`}>
        <HeaderNoSSR />
        {children}
      </body>
    </html>
  );
}
