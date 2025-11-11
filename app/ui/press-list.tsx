"use client";

import React from "react";
import PressCard from "@/app/ui/press-card";
import { useHorizontalCarousel } from "@/app/hooks/use-horizontal-carousel";
import type { OpenGraphData } from "@/app/lib/og";

interface PressListProps {
  items: OpenGraphData[];
}

export default function PressList({ items }: PressListProps) {
  const slidesCount = items.length;
  const { containerRef, current, goToNext, goToPrevious } =
    useHorizontalCarousel(slidesCount);

  return (
    <div className="w-full h-full flex flex-col">
      {/* Mobile: grid with smaller cards */}
      <div
        className="md:hidden grid w-full h-full px-[5%] py-30 w-full h-full gap-6 overflow-auto no-scrollbar overscroll-auto touch-pan-y"
        style={{
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          alignItems: "start",
          gridAutoRows: "min-content",
        }}
      >
        {items.map((d) => (
          <PressCard key={d.url} data={d} />
        ))}
      </div>

      {/* Desktop: grid */}
      <div
        className="md:grid hidden w-full h-full px-[5%] pb-30 pt-35 gap-6 overflow-auto no-scrollbar overscroll-auto touch-pan-y place-content-start place-items-center"
        style={{
          gridTemplateColumns: "repeat(auto-fit, minmax(400px, 1fr))",
          gridAutoRows: "min-content",
        }}
      >
        {items.map((d) => (
          <PressCard key={d.url} data={d} />
        ))}
      </div>
    </div>
  );
}
