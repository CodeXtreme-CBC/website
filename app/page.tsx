import Image from "next/image";
import Hero from "@/app/ui/hero";
import Footer from "@/app/ui/footer";
import { heroSlides } from "@/app/lib/data";
import WhatWeDo from "@/app/ui/what-we-do";
import Gallery from "@/app/ui/gallery";

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
      <Footer />
    </main>
  );
}