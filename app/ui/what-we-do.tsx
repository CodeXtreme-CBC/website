"use client";

import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";

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
        <div className="horizontal-slide flex-shrink-0 w-full h-full flex flex-col items-center justify-center snap-start bg-gradient-to-br from-blue-900 to-purple-900 text-white px-[5%]">
          <div className="max-w-4xl text-center">
            <h2 className="text-4xl md:text-6xl font-bold mb-4">
              Africa's Premier Student Hackathon
            </h2>
            <div className="grid md:grid-cols-2 grid-cols-1 gap-4 text-left my-10">
              <p className="col-span-2 text-sm leading-relaxed border border-white/30 p-4 rounded-lg backdrop-blur-sm bg-white/5">
                Flagship yearly in-person student hackathon in Africa. Bringing
                together the brightest minds for a 4-day of learning, building
                and sharing their passion for technology.
              </p>
              <p className="text-sm leading-relaxed border border-white/30 p-4 rounded-lg backdrop-blur-sm bg-white/10">
                We are building a platform and movement based on collaboration,
                innovation and learn-by-doing.
              </p>
              <p className="text-sm leading-relaxed border border-white/30 p-4 rounded-lg backdrop-blur-sm bg-white/5">
                A place where fresh talent can learn and grow and where early
                founders can prototype and test.
              </p>
            </div>
          </div>
          <div className="flex gap-5">
            <Link
              href="https://codextreme.io/hackathon"
              className="inline-block bg-white text-blue-900 font-bold py-3 px-8 rounded-lg hover:bg-gray-100 transition-colors duration-300"
            >
              Learn More
            </Link>
            <Link
              href="mailto:partnerships@codextreme.io"
              target="_blank"
              className="inline-block bg-white text-blue-900 font-bold py-3 px-8 rounded-lg hover:bg-gray-100 transition-colors duration-300"
            >
              Partner
            </Link>
          </div>
        </div>

        <div className="horizontal-slide flex-shrink-0 w-full h-full flex flex-col items-center justify-center snap-start bg-gradient-to-br from-indigo-900 to-violet-800 text-white px-[5%]">
          <div className="max-w-4xl text-center">
            <h2 className="text-4xl md:text-6xl font-bold mb-4">
              CodeXtreme Ingenious
            </h2>
            <div className="grid md:grid-cols-2 grid-cols-1 gap-4 text-left my-10">
              <p className="col-span-2 text-sm leading-relaxed border border-white/30 p-4 rounded-lg backdrop-blur-sm bg-white/10">
                9-month intensive technical program focused on three core
                pillars: Build, Test and Deploy.
              </p>
              <p className="text-sm leading-relaxed border border-white/30 p-4 rounded-lg backdrop-blur-sm bg-white/10">
                Top 10 teams from our flagship hackathon get to join the program
                where they focus on building their team, product and
                go-to-market strategy with mentorship from industry experts.
              </p>
              <p className="text-sm leading-relaxed border border-white/30 p-4 rounded-lg backdrop-blur-sm bg-white/5">
                At the end of the program, teams get to demo their products to a
                panel of investors and industry leaders for a chance to win
                funding and other amazing prizes.
              </p>
              <p className="col-span-2 text-sm leading-relaxed border border-white/30 p-4 rounded-lg backdrop-blur-sm bg-white/5">
                The Tradeshow intends spotlight teams and publicly launch these
                products to the world.
              </p>
            </div>
          </div>
          <div className="flex gap-5">
            <Link
              href="https://codextreme.io/ingenious-program"
              className="inline-block bg-white text-blue-900 font-bold py-3 px-8 rounded-lg hover:bg-gray-100 transition-colors duration-300"
            >
              Learn More
            </Link>
            <Link
              href="mailto:partnerships@codextreme.io"
              target="_blank"
              className="inline-block bg-white text-blue-900 font-bold py-3 px-8 rounded-lg hover:bg-gray-100 transition-colors duration-300"
            >
              Partner
            </Link>
          </div>
        </div>

        <div className="horizontal-slide flex-shrink-0 w-full h-full flex flex-col items-center justify-center snap-start bg-gradient-to-br from-teal-800 to-blue-700 text-white px-[5%]">
          <div className="max-w-4xl text-center">
            <h2 className="text-4xl md:text-6xl font-bold mb-4">
              Power of Code
            </h2>
            <div className="grid md:grid-cols-2 grid-cols-1 gap-4 text-left my-10">
              <p className="col-span-2 text-sm leading-relaxed border border-white/30 p-4 rounded-lg backdrop-blur-sm bg-white/10">
                Our team sources high-value, high-impact case studies, builds
                solutions in-house and deploys them to the world.
              </p>
              <p className="text-sm leading-relaxed border border-white/30 p-4 rounded-lg backdrop-blur-sm bg-white/10">
                We empower talent to build real products and solutions that
                shape people, communities and organizations through technology.
              </p>
              <p className="text-sm leading-relaxed border border-white/30 p-4 rounded-lg backdrop-blur-sm bg-white/5">
                We work with partners to identify and deliver on their technical
                needs directly with solutions or via access to our superior
                talent trove.
              </p>
            </div>
          </div>
          <div className="flex gap-5">
            <Link
              href="https://codextreme.io/case-studies"
              className="inline-block bg-white text-blue-900 font-bold py-3 px-8 rounded-lg hover:bg-gray-100 transition-colors duration-300"
            >
              Case Studies
            </Link>
            <Link
              href="mailto:team@codextreme.io"
              target="_blank"
              className="inline-block bg-white text-blue-900 font-bold py-3 px-8 rounded-lg hover:bg-gray-100 transition-colors duration-300"
            >
              Join Our Team
            </Link>
          </div>
        </div>

        <div className="horizontal-slide flex-shrink-0 w-full h-full flex flex-col items-center justify-center snap-start bg-gradient-to-br from-green-800 to-cyan-700 text-white px-[5%]">
          <div className="max-w-4xl text-center">
            <h2 className="text-4xl md:text-6xl font-bold mb-4">Trove</h2>
            <div className="grid md:grid-cols-2 grid-cols-1 gap-4 text-left my-10">
              <p className="col-span-2 text-sm leading-relaxed border border-white/30 p-4 rounded-lg backdrop-blur-sm bg-white/10">
                Discover and hire the best talent in tech using pragmatic
                assessment metrics.
              </p>
              <p className="text-sm leading-relaxed border border-white/30 p-4 rounded-lg backdrop-blur-sm bg-white/10">
                As a talent, leverage our 1-month quaterly individual technical
                challenges to practically showcase your skills to potential
                employers, learn and stand a chance to win amazing prizes.
              </p>
              <p className="text-sm leading-relaxed border border-white/30 p-4 rounded-lg backdrop-blur-sm bg-white/5">
                As an investor, get access to our pool of high-quality early
                tech talent and high-performing founders building real products
                with clear successful metrics.
              </p>
            </div>
          </div>
          <div className="flex gap-5">
            <Link
              href="https://trove.codextreme.io/"
              target="_blank"
              className="inline-block bg-white text-blue-900 font-bold py-3 px-8 rounded-lg hover:bg-gray-100 transition-colors duration-300"
            >
              Sign Up Now
            </Link>
          </div>
        </div>
      </div>

      {/* Overlay with hint */}
      <div className="absolute inset-0 pointer-events-none flex flex-col justify-between py-15 px-[5%] z-20">
        <h1>What We Do</h1>
        <div className="flex justify-center gap-2">
          <div className="bg-black/40 text-white rounded-full px-4 py-2 flex items-center gap-3 pointer-events-auto">
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
          <div className="bg-black/40 text-white rounded-full px-4 py-2 text-sm tabular-nums">
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
