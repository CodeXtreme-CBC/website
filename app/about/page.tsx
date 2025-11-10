import Footer from "../ui/footer";
import { CompleteNavDark } from "../ui/nav";

export default function About() {
  return (
    <main className="scroll-container">
      <section className="section-snap h-[100dvh] bg-gradient-to-b from-gray-100 to-gray-300 px-[5%] pt-10 md:pt-15 pb-20 md:pb-30 text-gray-900 w-full h-full overflow-auto no-scrollbar overscroll-auto touch-pan-y">
        <CompleteNavDark />
        <h1 className="text-2xl md:text-4xl font-bold mb-6">
          About CodeXtreme
        </h1>
        <div className="leading-relaxed space-y-5">
          <p>
            CodeXtreme started as a passion project, a need to build a platform
            that promoted technical innovation and skill development for early
            tech talent. A system that championed learning by doing,
            collaboration, and real-world problem solving to bridge the gap
            between theoretical knowledge and practical application.
          </p>
          <p>
            I started it all to create the opportunities, support systems and
            platform to learn, build and share my passion for technology with
            others. Things I wish I had when I was starting out in tech.
          </p>
          <p>
            Over time, CodeXtreme has evolved into a vibrant community of
            developers, designers, and tech enthusiasts who share a common goal:
            to push the boundaries of technology and create impactful solutions.
            We believe in the power of technology to transform lives and are
            committed to providing opportunities for growth, learning, and
            collaboration.
          </p>
          <p>
            With our hackathons, workshops, and community events, we aim to
            inspire the next generation of tech innovators and contribute to the
            broader tech ecosystem by nurturing talent and fostering a culture
            of continuous learning and building through our core tenet: "Build
            Things People Need: High-value, high-impact tech solutions to shape
            communities."
          </p>
          <p>
            We have seen great progress since our initial hackathon in 2024 and
            now our team is taking major bold steps to push our vision futher.
          </p>
          <p>
            Right now, we are focusing our efforts on:
          </p>
          <ul className="list-disc list-inside space-y-2 pl-5 md:pl-10">
            <li>
              Secure funding and launch CodeXtreme Ingenious (a 1-year program
              designed to discover, nurtured talent and support early founders
              to build real product and launch to the world -- from the
              Hackathon to the Tradeshow)
            </li>
            <li>
              Launch our Platform & Trove to engage more students we cannot
              reach with our physical events and help talent and founders
              showcase their skills and products to potential investors and
              employers.
            </li>
            <li>
              Implement and test internal case studies our team has judged
              valuable, and launch them to the real world
            </li>
            <li>
              Solidify our roots in Rwanda before expanding to other regions
            </li>
          </ul>
          <p>
            Our team cannot wait to see each of these aspirations materialize
            one by one and bring forth the impact we so much look forward to.
          </p>
        </div>
        <div className="space-y-5">
          <p>
            Thank you for being part of our journey. Together, we are building a
            movement that will greatly impact the technology landscape in Africa
            and beyond.
          </p>
          <img src="/images/ced-signature.svg" alt="Cedric's signature" />
          <p className="font-bold">Cédric, Founder of CodeXtreme</p>
        </div>
      </section>
      <Footer />
    </main>
  );
}
