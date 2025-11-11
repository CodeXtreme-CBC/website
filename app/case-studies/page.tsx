import Footer from "../ui/footer";
import { CompleteNavDark } from "@/app/ui/nav";
import Link from "next/link";

export default function CaseStudies() {
  return (
    <main className="scroll-container">
      <section className="section-snap h-[100dvh] bg-white px-[5%] pt-10 md:pt-15 pb-20 md:pb-30 text-gray-900 w-full h-full overflow-auto no-scrollbar overscroll-auto touch-pan-y">
        <CompleteNavDark />
        <h1 className="text-2xl md:text-4xl font-bold mb-6">
          Case Studies
        </h1>
        <div className="leading-relaxed space-y-5">
          <p>
            If you have something worth building, email it to <Link className="underline" href="mailto:team@codextreme.io">team@codextreme.io</Link>
          </p>
         </div>
      </section>
      <Footer />
    </main>
  );
}
