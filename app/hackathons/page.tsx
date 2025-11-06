import Hero from "@/app/ui/hero";
import { hackathonPageSlides } from "@/app/lib/data";
import Footer from "@/app/ui/footer";

export default function Hackathons() {
  return (
    <main className="scroll-container">
      <Hero slides={hackathonPageSlides} showSponsors />
      <Footer />
    </main>
  );
}
