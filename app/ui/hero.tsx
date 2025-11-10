'use client';

import { useState, useEffect } from 'react';
import { Slide } from '@/app/lib/types';
import Link from 'next/link';
import Image from 'next/image';
import { FullNav, LeanNav } from '@/app/ui/nav';
import CTA from '@/app/ui/cta';
import HackathonSponsors from '@/app/ui/hackathon-sponsors';

interface HeroProps {
  slides: Slide[];
  title?: string;
  tip?: string;
  description?: string;
  showSponsors?: boolean; // when true, render HackathonSponsors inside overlay
}

export default function Hero({ slides, title, tip, description, showSponsors }: HeroProps) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, slides.length]);

  return (
    <section className="hero relative section-snap h-[100dvh]">
      <div className='hero-container'>
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`slide ${index === currentSlide ? 'active' : ''}`}
          >
            {slide.mediaType === 'video' && slide.videoSrc ? (
              <video
                className="slide-video"
                autoPlay
                muted
                loop
                playsInline
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  zIndex: 1
                }}
              >
                <source src={slide.videoSrc} type="video/mp4" />
                {slide.imageSrc && (
                  <div
                    style={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      width: '100%',
                      height: '100%',
                      backgroundImage: `url(${slide.imageSrc})`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center'
                    }}
                  />
                )}
              </video>
            ) : (
              <div
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%',
                  backgroundImage: `url(${slide.imageSrc || slide.videoSrc})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  zIndex: 1
                }}
              />
            )}
          </div>
        ))}
      </div>
      
      {/* Content overlay - outside of slides loop so it persists */}
      <div className="tap absolute top-0 left-0 right-0 w-[100%] px-[5%] mx-auto h-full pb-5 pt-10 md:py-15 z-10 flex flex-col justify-between items-start">
        <FullNav />
        <div className='hidden lg:block'>
          <Link href="/">
            <Image 
              src="/images/codextreme-logo.svg"
              width={300}
              height={80} 
              alt="CodeXtreme Logo" 
              priority
            />
          </Link>
        </div>
        <div className=''>
          {(() => {
            // Prefer per-slide content if present; fall back to static props
            const active = slides[currentSlide];
            const effTip = active?.tip ?? tip;
            const effTitle = active?.title ?? title;
            const effDesc = active?.description ?? description;
            const effActions = active?.actions;

            return (
              <>
                {effTip && (
                  <p className="text-left tip text-sm font-bold w-full uppercase mb-2">{effTip}</p>
                )}
                {effTitle && (
                  <h1 className="text-left text-white uppercase text-2xl md:text-4xl p-0 m-0 w-[100%]">
                    {effTitle}
                  </h1>
                )}
                {effDesc && (
                  <p
                    className="hidden md:block text-white font-light text-sm w-[100%] text-left pt-2 space-y-1"
                    dangerouslySetInnerHTML={{ __html: effDesc }}
                  />
                )}
                {/* Per-slide CTAs if provided; else default CTA component below */}
                {Array.isArray(effActions) && effActions.length > 0 ? (
                  <div className="flex flex-col md:flex-row gap-3 md:gap-5 text-sm mt-5 mb-5 md:mb-10 text-white">
                    {effActions.map((a) => (
                      <div key={`${currentSlide}-${a.label}`}>
                        <Link href={a.href} target={a.external ? "_blank" : undefined}>
                          <p className="tracking-normal inline-block bg-white/10 backdrop-blur-lg font-bold py-4 px-4 md:px-8 hover:scale-105 transition-transform duration-300 text-center w-full md:min-w-fit">
                            {a.label}
                          </p>
                        </Link>
                      </div>
                    ))}
                  </div>
                ) : null}
              </>
            );
          })()}
          {/* Show default CTA only when slide doesn't override actions */}
          {!(slides[currentSlide]?.actions && slides[currentSlide]!.actions!.length > 0) && <CTA />}
          {showSponsors && <HackathonSponsors />}
          <LeanNav />
        </div>
      </div>
    </section>
  );
}
