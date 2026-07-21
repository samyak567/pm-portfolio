"use client";

import { useState } from "react";
import { Maximize2, X } from "lucide-react";

interface ZoomableImageProps {
  src: string;
  alt: string;
  title?: string;
  caption?: string;
}

export function ZoomableImage({ src, alt, title, caption }: ZoomableImageProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="my-12 not-prose w-full">
      <figure className="relative group cursor-zoom-in flex flex-col" onClick={() => setIsOpen(true)}>
        <div className="rounded-xl overflow-hidden border border-slate-200 bg-slate-50">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={src} alt={alt} className="w-full h-auto object-cover group-hover:opacity-95 transition-opacity duration-300" loading="lazy" />
        </div>
        <div className="absolute top-4 right-4 bg-white/90 backdrop-blur border border-slate-200 p-2.5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-sm">
          <Maximize2 className="w-4 h-4 text-slate-900" />
        </div>
        {(title || caption) && (
          <figcaption className="mt-5 flex flex-col items-center text-center px-4">
            {title && <span className="text-[15px] font-semibold text-slate-900 mb-1.5">{title}</span>}
            {caption && <span className="text-[15px] text-slate-500 leading-[1.6] max-w-[65ch]">{caption}</span>}
          </figcaption>
        )}
      </figure>

      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-white/98 backdrop-blur-md p-4 md:p-12 cursor-zoom-out" onClick={() => setIsOpen(false)}>
          <button className="absolute top-6 right-6 p-3 bg-slate-100 border border-slate-200 rounded-full hover:bg-slate-200 transition-colors shadow-sm" onClick={(e) => { e.stopPropagation(); setIsOpen(false); }}>
            <X className="w-5 h-5 text-slate-900" />
          </button>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={src} alt={alt} className="max-w-full max-h-full object-contain rounded-lg shadow-2xl" />
        </div>
      )}
    </div>
  );
}
