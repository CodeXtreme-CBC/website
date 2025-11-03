"use client";

import Image from "next/image";

interface GalleryItem {
  id: string;
  imageSrc: string;
}

const galleryItems: GalleryItem[] = [
  {
    id: "image-1",
    imageSrc: "https://test-pull-store.b-cdn.net/image-1.avif",
  },
  {
    id: "image-2",
    imageSrc: "https://test-pull-store.b-cdn.net/image-2.avif",
  },
  {
    id: "image-3",
    imageSrc: "https://test-pull-store.b-cdn.net/image-3.avif",
  },
  {
    id: "image-4",
    imageSrc: "https://test-pull-store.b-cdn.net/image-4.avif",
  },
  {
    id: "image-5",
    imageSrc: "https://test-pull-store.b-cdn.net/image-5.avif",
  },
  {
    id: "image-6",
    imageSrc: "https://test-pull-store.b-cdn.net/image-6.avif",
  },
  {
    id: "image-7",
    imageSrc: "https://test-pull-store.b-cdn.net/image-7.avif",
  },
  {
    id: "image-8",
    imageSrc: "https://test-pull-store.b-cdn.net/image-8.avif",
  },
  {
    id: "image-9",
    imageSrc: "https://test-pull-store.b-cdn.net/image-9.avif",
  },
  {
    id: "image-10",
    imageSrc: "https://test-pull-store.b-cdn.net/image-10.avif",
  },
  {
    id: "image-11",
    imageSrc: "https://test-pull-store.b-cdn.net/image-11.avif",
  },
  {
    id: "image-12",
    imageSrc: "https://test-pull-store.b-cdn.net/image-12.avif",
  },
  {
    id: "image-13",
    imageSrc: "https://test-pull-store.b-cdn.net/image-13.avif",
  },
  {
    id: "image-14",
    imageSrc: "https://test-pull-store.b-cdn.net/image-14.avif",
  },
  {
    id: "image-15",
    imageSrc: "https://test-pull-store.b-cdn.net/image-15.avif",
  },
  {
    id: "image-16",
    imageSrc: "https://test-pull-store.b-cdn.net/image-16.avif",
  },
];

export default function Gallery() {
  return (
    <section className="section-snap relative h-screen flex items-center justify-center bg-gradient-to-br from-gray-100 to-gray-300 text-gray-900">
      <div
        className="grid w-full h-full py-30 gap-3 mx-[5%] overflow-auto no-scrollbar overscroll-auto touch-pan-y"
        style={{
          gridTemplateColumns: "repeat(auto-fit, minmax(400px, 1fr))",
          alignItems: "stretch",
        }}
      >
        {galleryItems.map((item) => (
          <div key={item.id} className="relative bg-white w-full h-[300px]">
            <Image
              src={item.imageSrc}
              alt={item.id}
              fill
              style={{
                objectFit: "cover",
                objectPosition: "center",
              }}
            />
          </div>
        ))}
      </div>
      <div className="absolute inset-0 pointer-events-none flex flex-col justify-between py-10 md:py-15 px-[5%] z-20">
        <div className="text-white bg-black/40 backdrop-blur-sm w-fit py-2 px-4 rounded-full"><h1>Gallery</h1></div>
      </div>
    </section>
  );
}
