"use client";

import Image from "next/image";
import Link from "next/link";

interface SponsorListItem {
  id: string;
  imageSrc: string;
  href?: string; // optional link to sponsor site
}

const sponsorListItems: SponsorListItem[] = [
  {
    id: "sponsor-1",
    imageSrc: "/images/alu-logo.svg",
  },
  {
    id: "sponsor-2",
    imageSrc: "/images/GIZ-DTC-logo.svg",
  },
  {
    id: "sponsor-3",
    imageSrc: "/images/irembo-logo.svg",
  },
  {
    id: "sponsor-4",
    imageSrc: "/images/wolfram-logo.svg",
  },
  {
    id: "sponsor-5",
    imageSrc: "/images/CCHUB-logo.svg",
  },
  {
    id: "sponsor-6",
    imageSrc: "/images/hence-logo.svg",
  },
];

// Logo sizing adjustments based on visual balance
const getLogoSize = (id: string) => {
  switch (id) {
    case "sponsor-2": // GIZ-DTC typically smaller
      return { width: 300, height: 100 };
    case "sponsor-4": // irembo
    case "sponsor-5": // CCHUB
      return { width: 250, height: 90 };
    default:
      return { width: 180, height: 80 };
  }
};

export default function HackathonSponsors() {
  return (
    <div className="relative w-full mt-5">
      <p className="text-xs mb-2">Previous Sponsors</p>
      <div className="flex items-center gap-8 md:gap-12 overflow-x-auto no-scrollbar">
        {sponsorListItems.map((item) => {
          const { width, height } = getLogoSize(item.id);
          const logo = (
            <img
              src={item.imageSrc}
              alt={item.id}
              width={width}
              height={height}
              className="block object-contain flex-shrink-0"
              loading="lazy"
            />
          );
          return item.href ? (
            <Link
              key={item.id}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={item.id}
              className="flex-shrink-0"
            >
              {logo}
            </Link>
          ) : (
            <div key={item.id} className="flex-shrink-0">
              {logo}
            </div>
          );
        })}
      </div>
    </div>
  );
}
