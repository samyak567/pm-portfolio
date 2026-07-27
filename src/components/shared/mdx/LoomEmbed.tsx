"use client";

import { useState, useEffect, useRef } from "react";
import { PlayCircle, Video } from "lucide-react";

interface LoomEmbedProps {
  url?: string;
}

export function LoomEmbed({ url }: LoomEmbedProps) {
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
      { rootMargin: "200px" } // Load before it comes into view
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, [url]);

  if (!url) {
    return (
      <div className="aspect-video bg-surface/30 border border-border rounded-2xl flex flex-col items-center justify-center not-prose my-10">
        <Video className="w-12 h-12 text-secondary-foreground mb-4 opacity-50" />
        <a href="#" className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-foreground text-background font-bold text-sm uppercase tracking-widest rounded-lg hover:bg-foreground/90 transition-colors">
          Watch Product Walkthrough <PlayCircle className="w-5 h-5" />
        </a>
      </div>
    );
  }

  const idMatch = url.match(/share\/([a-z0-9]+)/i);
  const videoId = idMatch ? idMatch[1] : null;

  if (!videoId) return null;

  return (
    <div ref={containerRef} className="relative aspect-video w-full rounded-2xl overflow-hidden border border-border bg-surface shadow-sm not-prose my-10">
      {isVisible ? (
        <iframe
          src={`https://www.loom.com/embed/${videoId}?hide_owner=true&hide_share=true&hide_title=true&hideEmbedTopBar=true`}
          frameBorder="0"
          allowFullScreen
          className="absolute inset-0 w-full h-full"
        ></iframe>
      ) : (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-8 h-8 border-2 border-primary border-t-transparent rounded-full animate-spin"></div>
        </div>
      )}
    </div>
  );
}
