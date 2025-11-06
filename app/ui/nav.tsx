"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export function LeanNav() {
  return (
    <header>
      <nav className="hidden lg:flex flex-row justify-between items-start">
        <ul className="flex flex-row justify-start gap-5 p-0 m-0 list-none uppercase font-[400]  text-white">
          <li className="menu text-right">
            <Link href="/hackathons">Hackathons</Link>
          </li>
          <li className="menu text-right">
            <Link target="_blank" href="https://app.codextreme.io/ingenious">Ingenious</Link>
          </li>
          <li className="menu text-right">
            <Link target="_blank" href="https://trove.codextreme.io">
              Trove
            </Link>
          </li>
          <li className="menu text-right">
            <Link href="/case-studies">Case Studies</Link>
          </li>
          <li className="menu text-right">
            <Link href="/about">About</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export function FullNav() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <header className="lg:hidden flex justify-between items-center w-full">
        <div>
          <Link href="/">
            <Image
              src="/images/codextreme-logo.svg"
              width={250}
              height={60}
              alt="Peak Hill Logo"
              priority
            />
          </Link>
        </div>
        {!isMobileMenuOpen && (
          <button
            onClick={toggleMobileMenu}
            className="hover:cursor-pointer lg:hidden flex flex-col justify-between items-center w-10 h-8 focus:outline-none"
            aria-label="Toggle mobile menu"
          >
            <span
              className={`block w-10 h-0.5 bg-white transform transition-transform duration-300 ${
                isMobileMenuOpen ? "rotate-45 translate-y-2" : ""
              }`}
            ></span>
            <span
              className={`block w-10 h-0.5 bg-white transition-opacity duration-300 ${
                isMobileMenuOpen ? "opacity-0" : ""
              }`}
            ></span>
            <span
              className={`block w-10 h-0.5 bg-white transform transition-transform duration-300 ${
                isMobileMenuOpen ? "-rotate-45 -translate-y-2" : ""
              }`}
            ></span>
          </button>
        )}
      </header>

      {isMobileMenuOpen && (
        <div
          className={`fixed inset-0 z-50 lg:hidden transform transition-transform duration-300 ease-in-out ${
            isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="absolute inset-0" onClick={closeMobileMenu}></div>

          {/* Drawer */}
          <div className="absolute right-0 top-0 h-full w-65 max-w-sm backdrop-blur-lg shadow-xl">
            <div className="p-10 relative flex flex-col h-full justify-start gap-10">
              {/* Close button */}
              <button
                onClick={closeMobileMenu}
                className="absolute top-10 right-10 w-8 h-8 flex items-center justify-center"
                aria-label="Close mobile menu"
              >
                <span className="block w-6 h-0.5 bg-white transform rotate-45 absolute"></span>
                <span className="block w-6 h-0.5 bg-white transform -rotate-45 absolute"></span>
              </button>

              <nav className="mt-12">
                <ul className="space-y-6 text-sm uppercase text-white">
                  <li className="menu text-right">
                    <Link href="/hackathons" onClick={closeMobileMenu}>
                      Hackathons
                    </Link>
                  </li>
                  <li className="menu text-right">
                    <Link href="/ingenious-program" onClick={closeMobileMenu}>
                      Ingenious
                    </Link>
                  </li>
                  <li className="menu text-right">
                    <Link
                      target="_blank"
                      href="https://trove.codextreme.io"
                      onClick={closeMobileMenu}
                    >
                      Trove
                    </Link>
                  </li>
                  <li className="menu text-right">
                    <Link href="/case-studies" onClick={closeMobileMenu}>
                      Case Studies
                    </Link>
                  </li>
                  <li className="menu text-right">
                    <Link href="/about" onClick={closeMobileMenu}>
                      About
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
