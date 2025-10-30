'use client';

import { useState, useEffect } from 'react';
import { Slide } from '@/app/lib/types';
import Link from 'next/link';
import Image from 'next/image';
import { FullNav, LeanNav } from '@/app/ui/nav';
import CTA from '@/app/ui/cta';

interface HeroSliderProps {
  slides: Slide[];
  title: string;
  tip: string;
  description?: string;
}

export default function Hero({ slides, title, tip, description}: HeroSliderProps) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  return (
    <section className="hero relative section-snap h-[100vh]">
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
      <div className="tap absolute top-0 left-0 right-0 w-[100%] px-[5%] mx-auto h-full py-15 z-10 flex flex-col justify-between items-start">
        <FullNav />
        <div className='hidden lg:block'>
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
        <div>
          {tip && <p className="text-left tip text-sm font-bold w-full uppercase mb-2">{tip}</p>}
          {title && <h1 className="text-left text-white uppercase text-4xl p-0 m-0 w-[100%]">{title}</h1>}
          {description && <div className="hidden md:block text-white font-light text-sm w-[100%] text-left pt-2 space-y-1" dangerouslySetInnerHTML={{ __html: description }} />}
          <CTA />
          <LeanNav />
        </div>
      </div>
    </section>
  );
}
