"use client";

interface GalleryItem {
  id: string;
  title: string;
  description?: string;
  imageSrc: string;
}

const galleryItems: GalleryItem[] = [
  {
    id: "1",
    title: "Project Alpha",
    description: "An innovative solution for modern problems.",
    imageSrc: "/images/gallery/project-alpha.jpg",
  },
  {
    id: "2",
    title: "Project Beta",
    description: "A groundbreaking approach to solving complex issues.",
    imageSrc: "/images/gallery/project-beta.jpg",
  },
  {
    id: "3",
    title: "Project Gamma",
    description: "Revolutionizing the way we think about technology.",
    imageSrc: "/images/gallery/project-gamma.jpg",
  },
  {
    id: "4",
    title: "Project Delta",
    description:
      "Advanced machine learning algorithms for business optimization.",
    imageSrc: "/images/gallery/project-delta.jpg",
  },
  {
    id: "5",
    title: "Project Epsilon",
    description: "Cloud-native architecture for scalable applications.",
    imageSrc: "/images/gallery/project-epsilon.jpg",
  },
  {
    id: "6",
    title: "Project Zeta",
    description: "Mobile-first design patterns for modern user experiences.",
    imageSrc: "/images/gallery/project-zeta.jpg",
  },
  {
    id: "7",
    title: "Project Eta",
    description: "Blockchain solutions for secure data management.",
    imageSrc: "/images/gallery/project-eta.jpg",
  },
  {
    id: "8",
    title: "Project Theta",
    description: "AI-powered analytics dashboard for real-time insights.",
    imageSrc: "/images/gallery/project-theta.jpg",
  },
  {
    id: "9",
    title: "Project Iota",
    description: "IoT integration platform for smart city initiatives.",
    imageSrc: "/images/gallery/project-iota.jpg",
  },
  {
    id: "10",
    title: "Project Kappa",
    description: "Microservices architecture for enterprise applications.",
    imageSrc: "/images/gallery/project-kappa.jpg",
  },
  //   {
  //     id: "11",
  //     title: "Project Lambda",
  //     description: "Serverless computing solutions for cost optimization.",
  //     imageSrc: "/images/gallery/project-lambda.jpg",
  //   },
  //   {
  //     id: "12",
  //     title: "Project Mu",
  //     description: "Progressive web application with offline capabilities.",
  //     imageSrc: "/images/gallery/project-mu.jpg",
  //   },
  //   {
  //     id: "13",
  //     title: "Project Nu",
  //     description: "Real-time collaboration tools for remote teams.",
  //     imageSrc: "/images/gallery/project-nu.jpg",
  //   },
  //   {
  //     id: "14",
  //     title: "Project Xi",
  //     description: "Augmented reality interface for industrial applications.",
  //     imageSrc: "/images/gallery/project-xi.jpg",
  //   },
  //   {
  //     id: "15",
  //     title: "Project Omicron",
  //     description: "Data visualization platform for business intelligence.",
  //     imageSrc: "/images/gallery/project-omicron.jpg",
  //   },
  //   {
  //     id: "16",
  //     title: "Project Pi",
  //     description: "Cross-platform mobile development framework.",
  //     imageSrc: "/images/gallery/project-pi.jpg",
  //   },
  //   {
  //     id: "17",
  //     title: "Project Rho",
  //     description: "Cybersecurity monitoring and threat detection system.",
  //     imageSrc: "/images/gallery/project-rho.jpg",
  //   },
  //   {
  //     id: "18",
  //     title: "Project Sigma",
  //     description: "DevOps automation pipeline for continuous deployment.",
  //     imageSrc: "/images/gallery/project-sigma.jpg",
  //   },
  //   {
  //     id: "19",
  //     title: "Project Tau",
  //     description: "E-commerce platform with personalized recommendations.",
  //     imageSrc: "/images/gallery/project-tau.jpg",
  //   },
  //   {
  //     id: "20",
  //     title: "Project Upsilon",
  //     description: "Quantum computing simulation environment.",
  //     imageSrc: "/images/gallery/project-upsilon.jpg",
  //   },
];

export default function Gallery() {
  return (
    <section className="section-snap relative h-screen flex items-center justify-center bg-gradient-to-br from-gray-100 to-gray-300 text-gray-900">
      <div
        className="grid w-full h-full py-30 gap-3 px-[5%]"
        style={{
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          alignItems: "stretch",
        }}
      >
        {galleryItems.map((item) => (
          <div key={item.id} className="bg-white w-full h-full">
            <img
              src={item.imageSrc}
              alt={item.title}
              style={{
                objectFit: "cover",
                objectPosition: "center",
              }}
            />
          </div>
        ))}
      </div>
      <div className="absolute inset-0 pointer-events-none flex flex-col justify-between py-15 px-[5%] z-20">
        <h1>Gallery</h1>
      </div>
    </section>
  );
}
