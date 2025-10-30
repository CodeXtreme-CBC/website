"use client";

import React from "react";

interface ArrowButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  direction: "prev" | "next";
  className?: string;
}

export function ArrowButton({ direction, className = "", ...props }: ArrowButtonProps) {
  const isPrev = direction === "prev";
  const base =
    "hidden md:block absolute top-1/2 -translate-y-1/2 z-40 backdrop-blur bg-black/20 hover:bg-black/30 text-white rounded-full p-3 transition-colors duration-200 pointer-events-auto";
  const side = isPrev ? "left-4" : "right-4";
  return (
    <button
      type="button"
      aria-label={isPrev ? "Previous slide" : "Next slide"}
      className={`${base} ${side} ${className}`}
      {...props}
    >
      {isPrev ? (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ) : (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      )}
    </button>
  );
}

export default ArrowButton;
