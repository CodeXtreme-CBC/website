"use client";

import { useEffect, useRef, useState } from "react";

export interface CarouselApi {
  containerRef: React.RefObject<HTMLDivElement | null>;
  current: number;
  setCurrent: React.Dispatch<React.SetStateAction<number>>;
  goToNext: () => void;
  goToPrevious: () => void;
}

/**
 * Reusable horizontal carousel logic using a snapping scroll container.
 * - Controls programmatic scroll with a gate to avoid feedback loops.
 * - Syncs current index when user scrolls/dragging.
 */
export function useHorizontalCarousel(slidesCount: number): CarouselApi {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [current, setCurrent] = useState(0);
  const isProgrammatic = useRef(false);

  const goToPrevious = () => {
    setCurrent((prev) => (prev > 0 ? prev - 1 : slidesCount - 1));
  };

  const goToNext = () => {
    setCurrent((prev) => (prev < slidesCount - 1 ? prev + 1 : 0));
  };

  // Drive scroll when current changes
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    isProgrammatic.current = true;

    const left = current * container.clientWidth;
    container.scrollTo({ left, behavior: "smooth" });

    const timer = window.setTimeout(() => {
      isProgrammatic.current = false;
    }, 500);

    return () => {
      window.clearTimeout(timer);
    };
  }, [current]);

  // Update current based on scroll position
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let rafId: number | null = null;

    const onScroll = () => {
      if (rafId !== null) return;
      rafId = requestAnimationFrame(() => {
        rafId = null;
        if (isProgrammatic.current) return;

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

  return { containerRef, current, setCurrent, goToNext, goToPrevious };
}
