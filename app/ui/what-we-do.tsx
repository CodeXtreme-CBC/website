"use client";

import React from "react";
import Link from "next/link";
import ArrowButton from "@/app/ui/arrow-button";
import { useHorizontalCarousel } from "@/app/hooks/use-horizontal-carousel";
import { whatWeDoSlides } from "@/app/lib/what-we-do";

export default function WhatWeDo() {
  const slidesCount = whatWeDoSlides.length;
  const { containerRef, current, setCurrent, goToNext, goToPrevious } =
    useHorizontalCarousel(slidesCount);

  return (
    <section className="section-snap h-screen relative">
      <div
        ref={containerRef}
        className="horizontal-scroll-container flex overflow-x-auto overflow-y-hidden h-full w-full snap-x snap-mandatory scroll-smooth no-scrollbar -webkit-overflow-scrolling-touch"
      >
        {whatWeDoSlides.map((slide, idx) => (
          <div
            key={slide.id}
            className={`horizontal-slide flex-shrink-0 w-full h-full flex flex-col items-center justify-center snap-start ${slide.gradientClass} text-white px-[5%]`}
          >
            <div className="max-w-4xl text-center">
              <h2 className="text-2xl md:text-6xl font-bold mb-4">{slide.title}</h2>
              <div className="grid md:grid-cols-2 grid-cols-1 gap-4 text-left my-10">
                {slide.paragraphs.map((p, i) => (
                  <p
                    key={`${slide.id}-p-${i}`}
                    className={`text-sm leading-relaxed border border-white/30 p-4 backdrop-blur-sm ${
                      p.bgStrength === 10 ? "bg-white/10" : "bg-white/5"
                    } ${p.spanFull ? "md:col-span-2" : ""} ${p.hiddenOnSmall ? "hidden md:block" : ""}`}
                  >
                    {p.text}
                  </p>
                ))}
              </div>
            </div>
            <div className="flex gap-5">
              {slide.actions.map((action) => (
                <Link
                  key={`${slide.id}-${action.label}`}
                  href={action.href}
                  target={action.external ? "_blank" : undefined}
                  className={`inline-block backdrop-blur bg-black/20 font-bold py-3 hover:scale-105 transition-colors duration-300 ${
                    action.className ?? "px-8"
                  }`}
                >
                  {action.label}
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>

      <ArrowButton direction="prev" onClick={goToPrevious} />
      <ArrowButton direction="next" onClick={goToNext} />

      <div className="absolute inset-0 pointer-events-none flex flex-col justify-between py-15 px-[5%] z-20">
        <h1>What We Do</h1>
        <div className="flex justify-center gap-2">
          <div className="backdrop-blur bg-black/20 text-white rounded-full px-4 py-2 flex items-center gap-3 pointer-events-auto">
            <svg
              className="w-4 h-4"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8 5L15 12L8 19"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span className="text-sm uppercase tracking-wider">
              Slide for more
            </span>
          </div>
          <div className="backdrop-blur bg-black/20 text-white rounded-full px-4 py-2 text-sm tabular-nums">
            <span aria-hidden>
              {current + 1}/{slidesCount}
            </span>
            <span className="sr-only">
              Slide {current + 1} of {slidesCount}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
