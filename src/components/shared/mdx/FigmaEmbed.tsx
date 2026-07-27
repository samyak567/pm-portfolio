"use client";

import { useState, useEffect, useRef } from "react";
import { PenTool } from "lucide-react";

interface FigmaEmbedProps {
  url?: string;
  title?: string;
}

export function FigmaEmbed({ url, title = "Figma Prototype" }: FigmaEmbedProps) {
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!url) return;
    
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin: "200px" }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, [url]);

  if (!url) {
    return (
      <div className="aspect-[4/3] bg-surface/30 border border-border rounded-2xl flex flex-col items-center justify-center not-prose my-10">
        <PenTool className="w-12 h-12 text-secondary-foreground mb-4 opacity-50" />
        <p className="text-secondary-foreground font-medium mb-2">{title}</p>
        <p className="text-sm text-secondary-foreground/70">Interactive embed coming soon.</p>
      </div>
    );
  }

  // Ensure URL is encoded for the iframe
  const encodedUrl = encodeURIComponent(url);

  return (
    <div ref={containerRef} className="relative aspect-[4/3] w-full rounded-2xl overflow-hidden border border-border bg-surface shadow-sm not-prose my-10">
      {isVisible ? (
        <iframe
          src={`https://www.figma.com/embed?embed_host=share&url=${encodedUrl}`}
          allowFullScreen
          className="absolute inset-0 w-full h-full border-none"
        ></iframe>
      ) : (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-8 h-8 border-2 border-primary border-t-transparent rounded-full animate-spin"></div>
        </div>
      )}
    </div>
  );
}
