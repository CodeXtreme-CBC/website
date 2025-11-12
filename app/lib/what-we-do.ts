import { WhatWeDoSlideSpec } from "@/app/lib/types";

export const whatWeDoSlides: WhatWeDoSlideSpec[] = [
  {
    id: "hackathon",
    title: "Africa's Premier Student Hackathon",
    gradientClass: "bg-gradient-to-br from-blue-900 to-purple-900",
    paragraphs: [
      {
        text:
          "Flagship yearly in-person student hackathon in Africa. Bringing together the brightest minds for a 4-day of learning, building and sharing their passion for technology.",
        spanFull: true,
        bgStrength: 5,
      },
      {
        text: "We are building a platform and movement based on creativity, collaboration, innovation and learn-by-doing.",
        bgStrength: 5,
      },
      {
        text: "A place where fresh talent can discover their potential, get inspired and activated to learn and grow and where early founders can prototype and test.",
        bgStrength: 5,
      },
    ],
    actions: [
      { label: "Learn More", href: "/hackathons" },
      { label: "Partner", href: "mailto:partnerships@codextreme.io", external: true },
    ],
  },
  {
    id: "ingenious",
    title: "CodeXtreme Ingenious",
    gradientClass: "bg-gradient-to-br from-indigo-900 to-violet-800",
    paragraphs: [
      {
        text: "A 1-Year intensive technical program focused on three core pillars: Build, Test and Deploy and our guiding principle DIANA (Discover, Inspire, Activate, Nurture, and Accelerate). A journey from discovery to impact.",
        spanFull: true,
        bgStrength: 5,
      },
      {
        text:
          "Top 10 teams from our flagship hackathon join the program to focus on building their team, product and go-to-market strategy with mentorship from industry experts.",
        bgStrength: 5,
      },
      {
        text:
          "At the end of the program, during the Tradeshow, teams demo their products to a panel of investors, press and industry leaders to get funded and accelerated.",
        bgStrength: 5,
      },
    ],
    actions: [
      { label: "Learn More", href: "https://app.codextreme.io/ingenious" },
      { label: "Partner", href: "mailto:partnerships@codextreme.io", external: true },
    ],
  },
  {
    id: "power-of-code",
    title: "Power of Code",
    gradientClass: "bg-gradient-to-br from-teal-800 to-blue-700",
    paragraphs: [
      {
        text: "We source high-value, high-impact case studies, build solutions in-house and deploys them to the world.",
        spanFull: true,
        bgStrength: 5,
      },
      {
        text:
          "We empower talent to build real products and solutions that shape people, communities and organizations through technology.",
        bgStrength: 5,
      },
      {
        text:
          "We work with partners to identify and deliver on their technical needs directly with solutions or via access to our superior talent trove.",
        bgStrength: 5,
      },
    ],
    actions: [
      { label: "Case Studies", href: "/case-studies", className: "px-5" },
      { label: "Join Our Team", href: "mailto:team@codextreme.io", external: true, className: "px-5" },
    ],
  },
  {
    id: "trove",
    title: "Trove",
    gradientClass: "bg-gradient-to-br from-green-800 to-cyan-700",
    paragraphs: [
      {
        text: "As an employer, discover and hire the best talent in tech using pragmatic assessment metrics.",
        spanFull: true,
        bgStrength: 5,
      },
      {
        text:
          "As a talent, leverage our 1-month quaterly individual technical challenges to practically showcase your skills to potential employers, learn and stand a chance to win amazing prizes.",
        bgStrength: 5,
      },
      {
        text:
          "As an investor, get access to our pool of high-quality early tech talent and high-performing founders building real products with clear successful metrics.",
        bgStrength: 5,
      },
    ],
    actions: [
      { label: "Sign Up Now", href: "https://app.codextreme.io/", external: true },
    ],
  },
];
