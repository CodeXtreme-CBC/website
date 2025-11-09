import React from "react";
import Link from "next/link";
import type { OpenGraphData } from "@/app/lib/og";

interface PressCardProps {
  data: OpenGraphData;
}

export default function PressCard({ data }: PressCardProps) {
  const url = new URL(data.url);
  const hostname = url.hostname.replace(/^www\./, "");

  return (
    <article className="relative w-full h-full overflow-hidden border border-black/10 bg-white/10 backdrop-blur-lg">
      {data.image && (
        <div className="aspect-[16/9] w-full overflow-hidden bg-gray-100">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={data.image} alt={data.title || hostname} className="h-full w-full object-cover" />
        </div>
      )}
      <div className="p-6 md:p-8">
        <div className="mb-3 flex items-center gap-3 text-sm text-gray-600">
          {data.favicon && (
            // eslint-disable-next-line @next/next/no-img-element
            <img src={data.favicon} alt="" className="h-4 w-4" />
          )}
          <span className="uppercase tracking-wide">{hostname}</span>
        </div>
        <h3 className="text-lg md:text-xl font-bold mb-2 text-black">
          {data.title ?? url.pathname}
        </h3>
        <div className="mt-6">
          <Link
            href={data.url}
            target="_blank"
            className="inline-block text-sm md:text-base border bg-black/40 backdrop-blur-md text-white px-6 py-2 md:py-3 font-semibold hover:scale-105 transition-transform"
          >
            Read Article
          </Link>
        </div>
      </div>
    </article>
  );
}
