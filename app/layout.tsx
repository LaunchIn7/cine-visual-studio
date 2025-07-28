import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Rahul Nag - Professional Photographer in Sydney | Wedding & Portrait Photography",
  description: "Award-winning photographer Rahul Nag specializes in wedding, portrait, and event photography in Sydney. 5+ years experience, 200+ satisfied clients. Book your session today!",
  keywords: [
    "photographer Sydney",
    "wedding photographer Sydney",
    "portrait photographer Sydney",
    "event photographer Sydney",
    "professional photography Sydney",
    "Rahul Nag photographer",
    "Sydney photography services",
    "best photographer Sydney",
    "wedding photography Sydney",
    "corporate photography Sydney"
  ],
  authors: [{ name: "Rahul Nag" }],
  creator: "Rahul Nag",
  publisher: "Rahul Nag Photography",
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
  openGraph: {
    type: "website",
    locale: "en_AU",
    url: "https://cinevisualstudio.com",
    title: "Rahul Nag - Professional Photographer in Sydney",
    description: "Award-winning photographer specializing in wedding, portrait, and event photography in Sydney. 5+ years experience, 200+ satisfied clients.",
    siteName: "Rahul Nag Photography",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Rahul Nag - Professional Photographer Sydney",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Rahul Nag - Professional Photographer in Sydney",
    description: "Award-winning photographer specializing in wedding, portrait, and event photography in Sydney.",
    creator: "@rahulnagphoto",
    images: ["/twitter-image.jpg"],
  },
  verification: {
    google: "your-google-verification-code",
  },
  alternates: {
    canonical: "https://cinevisualstudio.com",
  },
  category: "Photography",
};

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "LocalBusiness",
      "@id": "https://cinevisualstudio.com/#business",
      "name": "Rahul Nag Photography",
      "image": "https://cinevisualstudio.com/rahul-portrait.jpg",
      "url": "https://cinevisualstudio.com",
      "telephone": "+61493325512",
      "email": "rahulnag0299@gmail.com",
      "priceRange": "$$",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Sydney",
        "addressRegion": "NSW",
        "addressCountry": "AU"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": -33.8688,
        "longitude": 151.2093
      },
      "openingHoursSpecification": {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday"
        ],
        "opens": "09:00",
        "closes": "18:00"
      },
      "sameAs": [
        "https://www.instagram.com/rahulnag04__"
      ]
    },
    {
      "@type": "Person",
      "@id": "https://cinevisualstudio.com/#person",
      "name": "Rahul Nag",
      "image": "https://cinevisualstudio.com/rahul-portrait.jpg",
      "jobTitle": "Professional Photographer",
      "worksFor": {
        "@id": "https://cinevisualstudio.com/#business"
      },
      "url": "https://cinevisualstudio.com",
      "telephone": "+61493325512",
      "email": "rahulnag0299@gmail.com",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Sydney",
        "addressRegion": "NSW",
        "addressCountry": "AU"
      },
      "sameAs": [
        "https://www.instagram.com/rahulnag04__"
      ]
    },
    {
      "@type": "Service",
      "@id": "https://cinevisualstudio.com/#services",
      "name": "Professional Photography Services",
      "provider": {
        "@id": "https://cinevisualstudio.com/#business"
      },
      "areaServed": {
        "@type": "City",
        "name": "Sydney",
        "containedInPlace": {
          "@type": "State",
          "name": "New South Wales",
          "containedInPlace": {
            "@type": "Country",
            "name": "Australia"
          }
        }
      },
      "serviceType": [
        "Wedding Photography",
        "Portrait Photography",
        "Event Photography",
        "Corporate Photography",
        "Family Photography"
      ]
    }
  ]
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
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {children}
      </body>
    </html>
  );
}
