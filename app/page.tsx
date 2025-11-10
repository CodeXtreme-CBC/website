import Hero from "@/app/ui/hero";
import Footer from "@/app/ui/footer";
import { heroSlides } from "@/app/lib/data";
import WhatWeDo from "@/app/ui/what-we-do";
import Gallery from "@/app/ui/gallery";
import Press from "@/app/ui/press";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "CodeXtreme — Building Things People Need",
  description:
    "Engineer, innovator, and craftsman working at the intersection of technology, business, and education in Africa.",
  metadataBase: new URL("https://www.codextreme.io"),
  openGraph: {
    title: "CodeXtreme — Discover and Nurture Talent. Build Products. Power Communities",
    description:
      "We discover and nurture early tech talent and founders, helping them build and ship real products to the world.",
    url: "https://www.codextreme.io",
    siteName: "Cedric Murairi",
    images: [
      {
        url: "https://www.codextreme.io/images/logo-bg-lg.png",
        width: 1200,
        height: 630,
        alt: "CodeXtreme Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "CodeXtreme — Discover and Nurture Talent. Build Products. Power Communities",
    description:
      "We discover and nurture early tech talent and founders, helping them build and ship real products to the world.",
    images: ["https://www.codextreme.io/images/logo-bg-lg.png"],
    creator: "@CodeXtreme",
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  keywords: [
    "CodeXtreme",
    "African Tech",
    "Software Engineering",
    "Software Development",
    "Technical Innovation",
    "Technical Talent",
    "4th Industrial Revolution",
    "Africa Technology",
    "Technical Solutions",
    "Tech Community",
    "Technical Education",
    "Technical Product Development",
    "Business and Technology",
    "Education Technology",
  ],
  authors: [{ name: "CodeXtreme", url: "https://www.codextreme.io" }],
  creator: "CodeXtreme",
  publisher: "Cedric Murairi",
};

export default function Home() {
  return (
    <main className="scroll-container">
      <Hero
        slides={heroSlides}
        title="Discover and nurture talent. Build products. Power communities."
        description="<p>We discover and nurture early tech talent and founders, helping them build and ship real products to the world.</p>
        <p>Through <strong>Power of Code</strong>, we develop high-impact tech solutions for people and communities across Africa.</p>"
        tip="Why We Exist"
      />
      <WhatWeDo />
      <Gallery />
      <Press />
      <Footer />
    </main>
  );
}