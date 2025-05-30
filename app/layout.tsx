import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Joshua Zone | Software Engineering Leader | Principal Architect",
  description: "Director of Engineering with 10+ years of experience in software engineering, system architecture, and technical leadership. Expert in distributed systems, microservices, cloud-native architecture, and API strategy.",
  keywords: [
    "Joshua Zone",
    "Software Engineer",
    "Principal Architect", 
    "Director of Engineering",
    "React",
    "JavaScript",
    "Python",
    "AWS",
    "Kubernetes",
    "Microservices",
    "System Architecture",
    "Technical Leadership"
  ],
  authors: [{ name: "Joshua Zone" }],
  creator: "Joshua Zone",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://zonejm.netlify.app",
    title: "Joshua Zone | Software Engineering Leader",
    description: "Director of Engineering with 10+ years of experience in software engineering, system architecture, and technical leadership.",
    siteName: "Joshua Zone Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Joshua Zone | Software Engineering Leader",
    description: "Director of Engineering with 10+ years of experience in software engineering, system architecture, and technical leadership.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code", // Add your actual verification code
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Joshua Zone",
  "jobTitle": "Director of Engineering",
  "description": "Director of Engineering with 10+ years of experience in software engineering, system architecture, and technical leadership.",
  "url": "https://zonejm.netlify.app",
  "sameAs": [
    "https://linkedin.com/in/zonejm",
    "https://github.com/jzone1366",
    "https://x.com/jzone1366"
  ],
  "knowsAbout": [
    "Software Engineering",
    "System Architecture",
    "Technical Leadership",
    "Distributed Systems",
    "Microservices",
    "Cloud Architecture",
    "Python",
    "JavaScript",
    "React",
    "AWS",
    "Kubernetes"
  ],
  "alumniOf": {
    "@type": "EducationalOrganization",
    "name": "Rensselaer Polytechnic Institute",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Troy",
      "addressRegion": "NY"
    }
  },
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Atlanta",
    "addressRegion": "GA",
    "addressCountry": "US"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body className={`${inter.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}
