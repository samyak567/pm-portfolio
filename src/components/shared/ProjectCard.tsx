"use client";

import { useState, useEffect } from "react";
import { X, ArrowRight, FileText, ExternalLink } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

export type ColorScheme = "blue" | "emerald" | "purple" | "amber" | "rose" | "indigo" | "teal" | "orange" | "gray";

interface ProjectCardProps {
  title: string;
  category: string;
  status: "Complete" | "In Progress";
  readingTime: string;
  tags: string[];
  description: string; // Used for the card face
  problem: string;
  solution: string;
  outcome: string;
  href: string;
  prototypeUrl?: string;
  colorScheme?: ColorScheme;
  fullWidth?: boolean;
  icon?: React.ReactNode;
}

const colorStyles: Record<ColorScheme, { border: string; iconBg: string; iconText: string; tagText: string; lightBg: string }> = {
  blue: { border: "border-blue-200", iconBg: "bg-blue-50", iconText: "text-blue-500", tagText: "text-blue-600", lightBg: "bg-blue-50/50" },
  emerald: { border: "border-emerald-200", iconBg: "bg-emerald-50", iconText: "text-emerald-500", tagText: "text-emerald-600", lightBg: "bg-emerald-50/50" },
  purple: { border: "border-purple-200", iconBg: "bg-purple-50", iconText: "text-purple-500", tagText: "text-purple-600", lightBg: "bg-purple-50/50" },
  amber: { border: "border-amber-200", iconBg: "bg-amber-50", iconText: "text-amber-500", tagText: "text-amber-600", lightBg: "bg-amber-50/50" },
  rose: { border: "border-rose-200", iconBg: "bg-rose-50", iconText: "text-rose-500", tagText: "text-rose-600", lightBg: "bg-rose-50/50" },
  indigo: { border: "border-indigo-200", iconBg: "bg-indigo-50", iconText: "text-indigo-500", tagText: "text-indigo-600", lightBg: "bg-indigo-50/50" },
  teal: { border: "border-teal-200", iconBg: "bg-teal-50", iconText: "text-teal-500", tagText: "text-teal-600", lightBg: "bg-teal-50/50" },
  orange: { border: "border-orange-200", iconBg: "bg-orange-50", iconText: "text-orange-500", tagText: "text-orange-600", lightBg: "bg-orange-50/50" },
  gray: { border: "border-gray-200", iconBg: "bg-gray-100", iconText: "text-gray-500", tagText: "text-gray-600", lightBg: "bg-gray-50/50" }
};

export function ProjectCard({
  title,
  category,
  status,
  readingTime,
  tags,
  description,
  problem,
  solution,
  outcome,
  href,
  prototypeUrl,
  colorScheme = "blue",
  fullWidth = false,
  icon,
}: ProjectCardProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const styles = colorStyles[colorScheme];

  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isModalOpen]);

  return (
    <>
      {/* CARD */}
      <div 
        onClick={() => setIsModalOpen(true)}
        className={cn(
          "group flex flex-col bg-white border rounded-[32px] p-8 sm:p-10 cursor-pointer transition-all duration-300 hover:shadow-xl hover:-translate-y-1 relative",
          styles.border,
          fullWidth ? "col-span-full md:flex-row gap-12" : "col-span-1 h-full"
        )}
      >
        <div className={cn(fullWidth ? "flex-1" : "flex-1 flex flex-col")}>
          {/* Icon */}
          <div className={cn("h-12 w-12 rounded-2xl flex items-center justify-center mb-8", styles.iconBg)}>
            {icon ? (
              <div className={cn("flex items-center justify-center [&>svg]:w-6 [&>svg]:h-6", styles.iconText)}>
                {icon}
              </div>
            ) : (
              <span className={cn("font-heading font-bold text-xl", styles.iconText)}>
                {title.charAt(0)}
              </span>
            )}
          </div>
          
          {/* Content */}
          <h3 className="text-2xl sm:text-[28px] font-heading font-extrabold text-gray-900 mb-4 leading-tight tracking-tight">
            {title}
          </h3>
          <p className={cn("text-[15px] leading-relaxed text-gray-500 mb-8", fullWidth ? "max-w-none" : "max-w-3xl")}>
            {description}
          </p>

          {/* Tags */}
          <div className={cn("flex flex-wrap gap-2", prototypeUrl ? "mb-6" : "mb-12")}>
            {tags.map((tag) => (
              <span key={tag} className={cn("px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest", styles.lightBg, styles.tagText)}>
                {tag}
              </span>
            ))}
          </div>

          {/* Prototype Button */}
          {prototypeUrl && (
            <div className="mb-6">
              <a 
                href={prototypeUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className={cn(
                  "inline-flex items-center gap-2 px-4 py-2 rounded-full text-[12px] font-bold transition-colors hover:brightness-95 border",
                  styles.iconBg,
                  styles.tagText,
                  styles.border
                )}
              >
                <ExternalLink className="w-3.5 h-3.5" />
                Open Prototype
              </a>
            </div>
          )}

          {/* Footer */}
          <div className={cn("flex items-center justify-between mt-auto pt-2", fullWidth ? "w-full max-w-sm" : "")}>
            <span className={cn("text-[11px] font-extrabold uppercase tracking-widest", styles.tagText)}>
              {category}
            </span>
            <span className="flex items-center text-[12px] font-semibold text-gray-400 group-hover:text-gray-900 transition-colors">
              View Case Study <ArrowRight className="w-3.5 h-3.5 ml-1.5 transition-transform group-hover:translate-x-1" />
            </span>
          </div>
        </div>
      </div>

      {/* MODAL */}
      {isModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-8 bg-black/40 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="relative w-full max-w-5xl h-[90vh] bg-white rounded-[32px] shadow-2xl flex flex-col overflow-hidden animate-in zoom-in-95 duration-200">
            
            {/* Modal Header */}
            <div className="flex items-center justify-between p-8 sm:px-12 sm:pt-12 sm:pb-8 shrink-0">
              <div className="flex gap-3 items-center">
                <span className={cn("px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest bg-red-50 text-red-600 flex items-center gap-1.5")}>
                  <span className="w-1.5 h-1.5 rounded-full bg-red-500"></span> {status}
                </span>
              </div>
              <div className="flex items-center gap-4">
                {prototypeUrl && (
                  <a 
                    href={prototypeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-blue-50 hover:bg-blue-100 border border-blue-200 rounded-full text-sm font-semibold text-blue-700 transition-colors"
                  >
                    <ExternalLink className="w-4 h-4 text-blue-500" />
                    Open Prototype
                  </a>
                )}
                <Link 
                  href={href}
                  className="flex items-center gap-2 px-4 py-2 bg-gray-50 hover:bg-gray-100 border border-gray-200 rounded-full text-sm font-semibold text-gray-700 transition-colors"
                >
                  <FileText className="w-4 h-4 text-red-500" />
                  Detailed Report
                </Link>
                <button 
                  onClick={() => setIsModalOpen(false)}
                  className="p-2 rounded-full border border-gray-200 text-gray-400 hover:text-gray-900 hover:bg-gray-50 transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Modal Scrollable Content */}
            <div className="flex-1 overflow-y-auto p-8 sm:px-12 sm:pb-16">
              <h2 className="text-4xl sm:text-6xl font-black font-heading tracking-tight text-gray-900 mb-4">
                {title}
              </h2>
              <p className="text-lg sm:text-xl text-gray-500 leading-relaxed max-w-3xl mb-16">
                {description}
              </p>

              {/* Grid of Sections */}
              <div className="mb-8">
                <h4 className="text-[11px] font-extrabold uppercase tracking-widest text-gray-400 mb-6">Project Breakdown</h4>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className={cn("rounded-2xl border p-6 sm:p-8", styles.border, styles.lightBg)}>
                    <h5 className={cn("text-[11px] font-extrabold uppercase tracking-widest mb-3", styles.tagText)}>The Problem</h5>
                    <p className="text-gray-700 text-[15px] leading-relaxed">{problem}</p>
                  </div>
                  <div className={cn("rounded-2xl border p-6 sm:p-8", styles.border, styles.lightBg)}>
                    <h5 className={cn("text-[11px] font-extrabold uppercase tracking-widest mb-3", styles.tagText)}>The Solution</h5>
                    <p className="text-gray-700 text-[15px] leading-relaxed">{solution}</p>
                  </div>
                  <div className={cn("rounded-2xl border p-6 sm:p-8", styles.border, styles.lightBg)}>
                    <h5 className={cn("text-[11px] font-extrabold uppercase tracking-widest mb-3", styles.tagText)}>The Outcome</h5>
                    <p className="text-gray-900 font-medium text-[15px] leading-relaxed">{outcome}</p>
                  </div>
                </div>
              </div>

              {/* Full Width Insight Box (Optional, mimicking bottom of image) */}
              <div className="bg-gray-900 rounded-[24px] p-8 sm:p-10 text-white mt-12">
                <h5 className="text-[11px] font-extrabold uppercase tracking-widest text-red-400 mb-4">Strategic Insight</h5>
                <p className="text-lg leading-relaxed text-gray-200">
                  This project demonstrates a rigorous product management approach, moving from initial user discovery through to validation and high-fidelity strategy definition. Reading the detailed case study takes about <strong className="text-white">{readingTime}</strong>.
                </p>
                <div className="mt-8">
                  <Link 
                    href={href}
                    className="inline-flex items-center gap-2 px-6 py-3 bg-white text-gray-900 hover:bg-gray-100 rounded-full text-sm font-bold transition-colors"
                  >
                    Read Full Case Study <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>

            </div>
          </div>
        </div>
      )}
    </>
  );
}
