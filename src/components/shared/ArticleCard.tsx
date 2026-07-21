import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

interface ArticleCardProps {
  title: string;
  category: string;
  readingTime: string;
  date: string;
  href: string;
}

export function ArticleCard({ title, category, readingTime, date, href }: ArticleCardProps) {
  return (
    <Link href={href} className="group block border-b border-border/50 py-8 transition-colors hover:border-border">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="flex-1">
          <div className="flex items-center gap-4 text-xs font-bold uppercase tracking-widest text-secondary-foreground mb-3">
            <span className="text-primary">{category}</span>
            <span>•</span>
            <span>{readingTime}</span>
            <span>•</span>
            <span>{date}</span>
          </div>
          <h3 className="text-xl md:text-2xl font-heading font-bold text-foreground group-hover:text-primary transition-colors w-fit">
            <span className="bg-left-bottom bg-gradient-to-r from-primary to-primary bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out pb-1">
              {title}
            </span>
          </h3>
        </div>
        <div className="shrink-0 text-secondary-foreground group-hover:text-foreground transition-colors">
          <ArrowUpRight className="w-6 h-6 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
        </div>
      </div>
    </Link>
  );
}
