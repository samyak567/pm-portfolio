"use client";

import { Card, CardContent } from "@/components/ui/card";
import { useState } from "react";
import { Building, ChevronDown, ChevronUp } from "lucide-react";

interface ExperienceCardProps {
  company: string;
  role: string;
  duration: string;
  metrics: string[];
  highlights: string[];
}

export function ExperienceCard({ company, role, duration, metrics, highlights }: ExperienceCardProps) {
  const [expanded, setExpanded] = useState(false);

  return (
    <Card className="bg-transparent border-border/50 hover:border-border transition-colors shadow-none mb-8 last:mb-0 group cursor-pointer overflow-hidden" onClick={() => setExpanded(!expanded)}>
      <CardContent className="p-8">
        <div className="flex flex-col md:flex-row md:items-start gap-6">
          <div className="w-16 h-16 rounded-2xl bg-surface border border-border flex items-center justify-center shrink-0 group-hover:border-primary/50 transition-colors">
            <Building className="w-8 h-8 text-secondary-foreground group-hover:text-primary transition-colors" />
          </div>
          <div className="flex-1">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
              <div>
                <h3 className="font-heading text-2xl font-bold text-foreground">{role}</h3>
                <p className="text-lg text-primary font-medium">{company}</p>
              </div>
              <span className="text-sm font-bold text-secondary-foreground uppercase tracking-widest">{duration}</span>
            </div>
            
            {/* Impact Metrics */}
            <div className="flex flex-wrap gap-2 mb-6">
              {metrics.map((metric, i) => (
                <span key={i} className="inline-flex px-3 py-1 bg-surface border border-border rounded-full text-xs font-bold uppercase tracking-widest text-foreground">
                  {metric}
                </span>
              ))}
            </div>

            <div className={`grid transition-all duration-300 ease-in-out ${expanded ? 'grid-rows-[1fr] opacity-100 mb-6' : 'grid-rows-[0fr] opacity-0'}`}>
              <div className="overflow-hidden">
                <ul className="space-y-3 pt-2">
                  {highlights.map((highlight, i) => (
                    <li key={i} className="flex gap-3 text-secondary-foreground leading-relaxed">
                      <span className="text-primary mt-1">—</span>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <button className="flex items-center gap-2 text-sm font-bold tracking-widest uppercase text-secondary-foreground hover:text-foreground transition-colors" onClick={(e) => { e.stopPropagation(); setExpanded(!expanded); }}>
              {expanded ? "Hide Details" : "View Details"}
              {expanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
            </button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
