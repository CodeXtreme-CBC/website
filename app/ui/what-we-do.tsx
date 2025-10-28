"use client";

import React, { useEffect, useRef, useState } from "react";

export default function WhatWeDo() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [current, setCurrent] = useState(0);

  const slidesCount = 4;

  // Scroll to active slide when current changes
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    const slideWidth = container.clientWidth;
    container.scrollTo({ left: current * slideWidth, behavior: "smooth" });
  }, [current]);

  // Update current slide based on manual scroll (so dots follow drag/scroll)
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let rafId: number | null = null;

    const onScroll = () => {
      if (rafId !== null) return; // already scheduled
      rafId = requestAnimationFrame(() => {
        rafId = null;
        const slideWidth = container.clientWidth || 1;
        const idx = Math.round(container.scrollLeft / slideWidth);
        setCurrent((c) => (c !== idx ? idx : c));
      });
    };

    container.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      container.removeEventListener("scroll", onScroll);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, []);

  const goPrev = () => setCurrent((c) => (c - 1 + slidesCount) % slidesCount);
  const goNext = () => setCurrent((c) => (c + 1) % slidesCount);

  // smoother programmatic scroll helper used by arrow buttons
  const scrollToIndex = (index: number) => {
    const container = containerRef.current;
    if (!container) return;
    const slideWidth = container.clientWidth || 1;
    const clamped = Math.max(0, Math.min(slidesCount - 1, index));
    container.scrollTo({ left: clamped * slideWidth, behavior: "smooth" });
    // pessimistically update state so dots and subsequent clicks align
    setCurrent(clamped);
  };

  // no arrow helpers: rely on native scroll only

  return (
    <section className="section-snap h-screen relative">
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

      {/* Overlay with hint */}
      <div className="absoluteS inset-0 pointer-events-none flex items-end justify-center pb-12 z-20 gap-2">
        <div className="bg-black/40 text-white rounded-full px-4 py-2 flex items-center gap-3 pointer-events-auto">
          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8 5L15 12L8 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <span className="text-sm uppercase tracking-wider">Slide for more</span>
        </div>
        <div className="bg-black/40 text-white rounded-full px-4 py-2 text-sm tabular-nums">
          <span aria-hidden>{current + 1}/{slidesCount}</span>
          <span className="sr-only">Slide {current + 1} of {slidesCount}</span>
        </div>
      </div>

      {/* counter displayed next to the hint; dots removed */}
    </section>
  );
}
