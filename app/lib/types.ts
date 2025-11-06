export interface SlideAction {
  label: string;
  href: string;
  external?: boolean;
}

export interface Slide {
  id: string;
  imageSrc?: string;
  videoSrc?: string;
  mediaType?: 'image' | 'video';
  // Optional per-slide content. If provided, the Hero can render these
  // instead of the static title/tip/description props.
  title?: string;
  tip?: string;
  description?: string; // can be plain text or HTML; Hero treats it like the prop
  actions?: SlideAction[]; // optional per-slide CTAs
}

export interface ParagraphSpec {
  text: string;
  spanFull?: boolean; // md:col-span-2
  bgStrength?: 5 | 10; // maps to bg-white/5 or bg-white/10
  hiddenOnSmall?: boolean; // hidden on small, shown on md
}

export interface ActionSpec {
  label: string;
  href: string;
  external?: boolean;
  className?: string; // allow px differences etc.
}

export interface WhatWeDoSlideSpec {
  id: string;
  title: string;
  gradientClass: string; // e.g. "bg-gradient-to-br from-blue-900 to-purple-900"
  paragraphs: ParagraphSpec[];
  actions: ActionSpec[];
}