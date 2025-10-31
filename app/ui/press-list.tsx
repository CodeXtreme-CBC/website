"use client";

import React from "react";
import PressCard from "@/app/ui/press-card";
import ArrowButton from "@/app/ui/arrow-button";
import { useHorizontalCarousel } from "@/app/hooks/use-horizontal-carousel";
import type { OpenGraphData } from "@/app/lib/og";

interface PressListProps {
  items: OpenGraphData[];
}

export default function PressList({ items }: PressListProps) {
  const slidesCount = items.length;
  const { containerRef, current, goToNext, goToPrevious } = useHorizontalCarousel(slidesCount);

  return (
    <div className="w-full">
      {/* Mobile: horizontal slider */}
      <div className="md:hidden relative">
        <div
          ref={containerRef}
          className="horizontal-scroll-container flex gap-10 overflow-x-auto overflow-y-hidden w-full snap-x snap-mandatory scroll-smooth no-scrollbar -webkit-overflow-scrolling-touch"
        >
          {items.map((d) => (
            <div key={d.url} className="horizontal-slide flex-shrink-0 w-full snap-start">
              <PressCard data={d} />
            </div>
          ))}
        </div>
        <ArrowButton direction="prev" onClick={goToPrevious} />
        <ArrowButton direction="next" onClick={goToNext} />
        <div className="mt-5 flex justify-center">
          <div className="backdrop-blur-sm bg-black/20 text-white rounded-full px-4 py-1 text-sm tabular-nums">
            <span aria-hidden>
              {current + 1}/{slidesCount}
            </span>
            <span className="sr-only">Slide {current + 1} of {slidesCount}</span>
          </div>
        </div>
      </div>

      {/* Desktop: grid */}
      <div
        className="hidden md:grid w-full h-full gap-6"
        style={{ gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", alignItems: "stretch" }}
      >
        {items.map((d) => (
          <PressCard key={d.url} data={d} />
        ))}
      </div>
    </div>
  );
}
