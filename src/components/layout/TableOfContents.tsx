"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import Link from "next/link";

interface TocItem {
  id: string;
  title: string;
}

interface TableOfContentsProps {
  items: TocItem[];
}

export function TableOfContents({ items }: TableOfContentsProps) {
  const [activeId, setActiveId] = useState<string>("");
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Scrollspy
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: "-20% 0% -35% 0%" }
    );

    items.forEach((item) => {
      const element = document.getElementById(item.id);
      if (element) {
        observer.observe(element);
      }
    });

    // Reading progress
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPosition = window.scrollY;
      const calculatedProgress = (scrollPosition / totalHeight) * 100;
      setProgress(Math.min(100, Math.max(0, calculatedProgress)));
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", handleScroll);
    };
  }, [items]);

  return (
    <nav className="flex flex-col gap-2 relative">
      <div className="flex items-center justify-between mb-4 pl-4">
        <h4 className="text-[13px] font-bold uppercase tracking-widest text-slate-500">Table of Contents</h4>
        <span className="text-[13px] font-medium text-slate-400">{Math.round(progress)}%</span>
      </div>
      
      {/* Progress bar background */}
      <div className="absolute left-0 top-[34px] bottom-0 w-px bg-slate-200">
        {/* Progress bar active */}
        <div 
          className="absolute top-0 left-0 w-px bg-slate-900 transition-all duration-100 ease-out"
          style={{ height: `${progress}%` }}
        />
      </div>

      <div className="flex flex-col pl-4">
        {items.map((item) => (
          <Link
            key={item.id}
            href={`#${item.id}`}
            className={cn(
              "py-2.5 text-[15px] font-medium transition-all duration-300 relative leading-snug",
              activeId === item.id 
                ? "text-slate-900 font-semibold" 
                : "text-slate-500 hover:text-slate-900"
            )}
            onClick={(e) => {
              e.preventDefault();
              const element = document.getElementById(item.id);
              if (element) {
                const y = element.getBoundingClientRect().top + window.scrollY - 100;
                window.scrollTo({ top: y, behavior: 'smooth' });
              }
            }}
          >
            {activeId === item.id && (
              <span className="absolute -left-[18px] top-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-slate-900" />
            )}
            {item.title}
          </Link>
        ))}
      </div>
    </nav>
  );
}
