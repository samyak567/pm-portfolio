import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const NAV_LINKS = [
  { name: "About", href: "/#about" },
  { name: "Experience", href: "/#experience" },
  { name: "Projects", href: "/#projects" },
  { name: "Resume", href: "/resources/Samyak_Talesra_Resume.pdf" },
  { name: "Contact", href: "/#contact" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full bg-background/80 backdrop-blur-md border-b border-border">
      <div className="mx-auto flex h-16 max-w-[1200px] items-center justify-between px-6 md:px-8">
        <Link href="/" className="flex items-center space-x-3 group">
          <div className="w-8 h-8 rounded-lg bg-foreground text-background flex items-center justify-center font-heading font-bold text-sm tracking-wider group-hover:bg-primary transition-colors">
            ST
          </div>
          <span className="font-heading text-xl font-bold tracking-tight group-hover:text-primary transition-colors">
            Samyak Talesra
          </span>
        </Link>
        <nav className="hidden md:flex items-center gap-6">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-secondary-foreground hover:text-foreground transition-colors"
            >
              {link.name}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-4">
          <Link href="/#contact" className={cn(buttonVariants())}>Let's Talk</Link>
        </div>
      </div>
    </header>
  );
}
