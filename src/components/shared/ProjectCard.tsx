import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Clock } from "lucide-react";
import Link from "next/link";

interface ProjectCardProps {
  title: string;
  category: string;
  status: "Complete" | "In Progress";
  readingTime: string;
  tags: string[];
  problem: string;
  solution: string;
  outcome: string;
  href: string;
}

export function ProjectCard({
  title,
  category,
  status,
  readingTime,
  tags,
  problem,
  solution,
  outcome,
  href,
}: ProjectCardProps) {
  return (
    <Card className="group flex flex-col h-full overflow-hidden border-border/50 bg-transparent transition-all duration-300 hover:border-border hover:-translate-y-1 shadow-none">
      <div className="aspect-[16/9] w-full bg-surface/50 flex flex-col items-center justify-center border-b border-border/50 overflow-hidden relative">
        <div className="absolute inset-0 opacity-10 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
        <div className="h-16 w-16 rounded-full bg-border/50 flex items-center justify-center group-hover:scale-110 group-hover:bg-primary/10 transition-all duration-500">
           <span className="font-heading font-bold text-muted-foreground/50 text-xl group-hover:text-primary/70 transition-colors">{title.charAt(0)}</span>
        </div>
        <div className="absolute top-4 left-4 flex gap-2">
          <span className="px-2 py-1 bg-background/80 backdrop-blur-sm border border-border rounded text-xs font-bold uppercase tracking-widest text-foreground">
            {category}
          </span>
          <span className="px-2 py-1 bg-background/80 backdrop-blur-sm border border-border rounded flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-foreground">
            {status === "Complete" ? "🟢" : "🟡"} {status}
          </span>
        </div>
      </div>
      
      <CardContent className="p-8 flex flex-col flex-1">
        <h3 className="text-2xl font-heading font-bold mb-6">{title}</h3>
        
        <div className="flex flex-wrap gap-2 mb-6">
          {tags.map((tag) => (
            <span key={tag} className="text-xs font-bold uppercase tracking-widest text-secondary-foreground bg-surface px-2 py-1 rounded">
              {tag}
            </span>
          ))}
        </div>

        <div className="space-y-4 mb-8 flex-1">
          <div>
            <p className="text-xs font-bold text-secondary-foreground mb-1 uppercase tracking-widest">Problem</p>
            <p className="text-sm text-foreground leading-relaxed">{problem}</p>
          </div>
          <div>
            <p className="text-xs font-bold text-secondary-foreground mb-1 uppercase tracking-widest">Solution</p>
            <p className="text-sm text-foreground leading-relaxed">{solution}</p>
          </div>
          <div>
            <p className="text-xs font-bold text-secondary-foreground mb-1 uppercase tracking-widest">Outcome</p>
            <p className="text-sm text-foreground leading-relaxed font-medium">{outcome}</p>
          </div>
        </div>
        
        <div className="flex items-center justify-between pt-6 border-t border-border/50">
          <Link href={href} className="inline-flex items-center text-sm font-bold uppercase tracking-widest text-primary group-hover:text-foreground transition-colors">
            View Case Study
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
          <div className="flex items-center gap-1.5 text-xs font-medium text-secondary-foreground">
            <Clock className="w-3.5 h-3.5" />
            {readingTime}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
