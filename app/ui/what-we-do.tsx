"use client";

import React, { useEffect, useRef } from "react";

export default function WhatWeDo() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const pointerOverRef = useRef(false);

  useEffect(() => {
    const section = sectionRef.current;
    const container = containerRef.current;
    if (!section || !container) return;

    // helper
    const atEdges = () => {
      const maxScroll = container.scrollWidth - container.clientWidth;
      return {
        atStart: container.scrollLeft <= 0,
        atEnd: container.scrollLeft >= maxScroll - 1,
        maxScroll,
      };
    };

    // Wheel handler attached on the section in capture so it runs BEFORE outer scroll
    const onWheel = (e: WheelEvent) => {
      // only run when pointer is over the section
      if (!pointerOverRef.current) return;

      // prefer vertical wheel only
      if (Math.abs(e.deltaY) < Math.abs(e.deltaX)) return;

      const { atStart, atEnd } = atEdges();

      // allow normal vertical scrolling when trying to leave the horizontal area
      if ((atStart && e.deltaY < 0) || (atEnd && e.deltaY > 0)) {
        // let the outer container scroll
        return;
      }

      // otherwise, consume the event and translate to horizontal scroll
      e.preventDefault();
      e.stopPropagation();

      // adjust sensitivity if you want
      const SCROLL_FACTOR = 1;
      container.scrollBy({ left: e.deltaY * SCROLL_FACTOR, behavior: "smooth" });
    };

    // touch handling for mobile (vertical touch -> horizontal)
    let startY = 0;
    const onTouchStart = (e: TouchEvent) => {
      if (e.touches.length !== 1) return;
      startY = e.touches[0].clientY;
    };
    const onTouchMove = (e: TouchEvent) => {
      if (e.touches.length !== 1) return;
      const curY = e.touches[0].clientY;
      const deltaY = startY - curY;

      // if trying to scroll vertically primarily
      if (Math.abs(deltaY) < 5) return;
      const { atStart, atEnd } = atEdges();

      if ((atStart && deltaY < 0) || (atEnd && deltaY > 0)) {
        // allow native page scroll
        return;
      }

      e.preventDefault();
      e.stopPropagation();
      container.scrollBy({ left: deltaY, behavior: "auto" });
      startY = curY; // continuous movement
    };

    // pointerenter / leave to know when we should intercept
    const onPointerEnter = () => (pointerOverRef.current = true);
    const onPointerLeave = () => (pointerOverRef.current = false);

    // IMPORTANT: add wheel listener in capture and with passive:false
    section.addEventListener("wheel", onWheel, { capture: true, passive: false });
    section.addEventListener("touchstart", onTouchStart, { passive: true });
    section.addEventListener("touchmove", onTouchMove, { passive: false });
    section.addEventListener("pointerenter", onPointerEnter);
    section.addEventListener("pointerleave", onPointerLeave);

    return () => {
      section.removeEventListener("wheel", onWheel, { capture: true } as any);
      section.removeEventListener("touchstart", onTouchStart as any);
      section.removeEventListener("touchmove", onTouchMove as any);
      section.removeEventListener("pointerenter", onPointerEnter);
      section.removeEventListener("pointerleave", onPointerLeave);
    };
  }, []);

  return (
    <section ref={sectionRef} className="section-snap h-screen relative">
      <div
        ref={containerRef}
        className="horizontal-scroll-container flex overflow-x-auto overflow-y-hidden h-full w-full snap-x snap-mandatory scroll-smooth no-scrollbar -webkit-overflow-scrolling-touch"
      >
        <div className="horizontal-slide flex-shrink-0 w-full h-full flex items-center justify-center snap-start bg-gradient-to-br from-blue-900 to-purple-900 text-white">
          <div className="max-w-4xl px-6 text-center">
            <h2 className="text-4xl md:text-6xl font-bold mb-4">Our Story</h2>
            <p className="text-lg md:text-xl leading-relaxed">We discover and nurture early tech talent...</p>
          </div>
        </div>

        <div className="horizontal-slide flex-shrink-0 w-full h-full flex items-center justify-center snap-start bg-gradient-to-br from-indigo-900 to-violet-800 text-white">
          <div className="max-w-4xl px-6 text-center">
            <h2 className="text-4xl md:text-6xl font-bold mb-4">Our Mission</h2>
            <p className="text-lg md:text-xl leading-relaxed">We help founders build and ship real products...</p>
          </div>
        </div>

        <div className="horizontal-slide flex-shrink-0 w-full h-full flex items-center justify-center snap-start bg-gradient-to-br from-teal-800 to-blue-700 text-white">
          <div className="max-w-4xl px-6 text-center">
            <h2 className="text-4xl md:text-6xl font-bold mb-4">Our Values</h2>
            <p className="text-lg md:text-xl leading-relaxed">Integrity, craftsmanship, and community impact...</p>
          </div>
        </div>

        <div className="horizontal-slide flex-shrink-0 w-full h-full flex items-center justify-center snap-start bg-gradient-to-br from-green-800 to-cyan-700 text-white">
          <div className="max-w-4xl px-6 text-center">
            <h2 className="text-4xl md:text-6xl font-bold mb-4">Our Impact</h2>
            <p className="text-lg md:text-xl leading-relaxed">Projects delivered, developers trained, communities supported...</p>
          </div>
        </div>
      </div>
      <div className="absolute top-0 left-0 right-0 bottom-0">
        <h1>What We Do</h1>
      </div>
    </section>
  );
}
