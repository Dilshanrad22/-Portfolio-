import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Script from "next/script";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Dulanjana Dilshan | Full Stack Developer",
  description: "Portfolio of Dulanjana Dilshan — Full Stack Developer, IT undergraduate, and UI/UX designer. Explore projects, skills, and contact info.",
  metadataBase: new URL("https://dulanjanadilshan.vercel.app"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Dulanjana Dilshan | Full Stack Developer",
    description: "Portfolio of Dulanjana Dilshan — Full Stack Developer, IT undergraduate, and UI/UX designer.",
    url: "https://dulanjanadilshan.vercel.app",
    siteName: "Dulanjana Dilshan Portfolio",
    images: [{ url: "/images/propic.png", width: 800, height: 800, alt: "Dulanjana Dilshan" }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dulanjana Dilshan | Full Stack Developer",
    description: "Portfolio of Dulanjana Dilshan — Full Stack Developer, IT undergraduate, and UI/UX designer.",
    images: ["/images/propic.png"],
  },
  verification: {
    google: "QAdMGf3dlQduPQGzDkYAKz7h8_x9u5V8x8KGwqIRjCI",
  },
  icons: {
    icon: "/images/propic.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Dulanjana Dilshan",
    url: "https://dulanjanadilshan.vercel.app",
    image: "https://dulanjanadilshan.vercel.app/images/propic.png",
    jobTitle: "Full Stack Developer",
    description: "IT undergraduate at University of Moratuwa specialising in Software Engineering and Web Development.",
    sameAs: [
      "https://www.linkedin.com/in/dulanjana-dilshan-6bb13a2ba",
      "https://github.com/DulanjanaDilshan",
    ],
  };

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <a
          href="#home"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[9999] focus:px-4 focus:py-2 focus:bg-purple-600 focus:text-white focus:rounded-lg focus:outline-none"
        >
          Skip to main content
        </a>
        <Script
          id="json-ld"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
