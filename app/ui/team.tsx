import Image from "next/image";
import Link from "next/link";

interface TeamMember {
  id: string;
  name: string;
  role: string;
  imageSrc: string;
  linkedin: string;
  bio?: string;
}

const teamMembers: TeamMember[] = [
  {
    id: "member-1",
    name: "Cédric Murairi",
    role: "Founder & Head Honcho",
    imageSrc: "/team/cedric.jpg",
    linkedin: "https://www.linkedin.com/in/cedric-murairi/",
    bio: "Cédric leads the vision and strategy of CodeXtreme, bringing years of experience in tech innovation and community building. He runs the day-to-day on our Partnerships, Community and Stakeholder Engagement and our Technical Product Management."
  },
  {
    id: "member-2",
    name: "Juliet Mukamani",
    role: "Events Organizer",
    imageSrc: "/team/juliet.jpg",
    linkedin: "https://www.linkedin.com/in/julietmukamani/",
    bio: "Juliet is the mastermind behind all our events, ensuring everything runs smoothly from planning to execution. She coordinates our hackathons, workshops, and community gatherings, fostering an engaging and inclusive environment for all participants."
  },
  {
    id: "member-3",
    name: "Tihami Mahamad",
    role: "Impact & Growth Lead",
    imageSrc: "/team/tihami.png",
    linkedin: "https://www.linkedin.com/in/mahamad-tihami-adoum-172750227/",
    bio: "Tihami drives our impact initiatives and growth strategies, focusing on expanding our reach and deepening our influence in the tech community. He works on grants, partnerships, outreach, and measuring the effectiveness of our programs."
  },
  {
    id: "member-4",
    name: "Bruno Blaise",
    role: "HX & Community Manager",
    imageSrc: "/team/bruno.jpg",
    linkedin: "https://www.linkedin.com/in/brunoblaise/",
    bio: "Bruno is dedicated to enhancing the experience of our community members. He manages our online and offline communities, ensuring that participants feel supported, engaged, and connected throughout their journey with CodeXtreme."
  },
  {
    id: "member-5",
    name: "Moïse K. Lumoo",
    role: "Ops & Logistics Coordinator",
    imageSrc: "/team/moses.jpg",
    linkedin: "https://www.linkedin.com/in/mokandundao/",
    bio: "Moses ensures that all operational and logistical aspects of our programs are handled efficiently. From venue arrangements to resource management, he plays a crucial role in making sure our events and initiatives run without a hitch."
  },
];

export default function Team() {
  return (
    <section id="team" className="section-snap relative h-[100dvh]">
      <div
        style={{
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gridAutoRows: "min-content",
          objectFit: "cover",
          objectPosition: "center",
        }}
        className="md:grid gap-6 bg-gray-100 px-[5%] pt-30 md:pt-35 pb-30 text-gray-900 w-full h-full overflow-auto no-scrollbar overscroll-auto touch-pan-y"
      >
        {teamMembers.map((member) => (
          <div key={member.id} className="pb-5 md:pb-0">
            <Link href={member.linkedin} className="mb-5 rouded relative block">
              <Image
                src={member.imageSrc}
                alt={`Photo of ${member.name}`}
                width={300}
                height={300}
                className="hidden md:block w-full h-full"
              />
              <Image
                src={member.imageSrc}
                alt={`Photo of ${member.name}`}
                width={400}
                height={400}
                className="block md:hidden"
              />
            </Link>
            <h2>{member.name}</h2>
            <p className="font-bold">{member.role}</p>
            <p className="mt-1 text-xs">{member.bio}</p>
          </div>
        ))}
      </div>
      <div className="absolute inset-0 pointer-events-none flex flex-col justify-between py-10 md:py-15 px-[5%] z-20">
        <div className="text-white bg-black/40 backdrop-blur-sm w-fit py-2 px-4 rounded-full">
          <h1>The Core Team</h1>
        </div>
      </div>
    </section>
  );
}
