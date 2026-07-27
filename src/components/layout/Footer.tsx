import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-border bg-background py-12">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex flex-col items-center md:items-start gap-2">
            <span className="font-heading font-bold text-foreground">Samyak Talesra</span>
            <span className="text-sm text-secondary-foreground">Designed & Built by Samyak Talesra</span>
          </div>
          <div className="flex items-center flex-wrap justify-center md:justify-end gap-2 md:gap-4 text-xs font-bold text-secondary-foreground uppercase tracking-widest">
            <span>Built with</span>
            <span className="text-foreground">Next.js</span>
            <span>•</span>
            <span className="text-foreground">TypeScript</span>
            <span>•</span>
            <span className="text-foreground">Tailwind CSS</span>
            <span>•</span>
            <span className="text-foreground">GitHub Pages</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
