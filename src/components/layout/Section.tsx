import { cn } from "@/lib/utils";

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
  containerClassName?: string;
}

export function Section({
  children,
  className,
  containerClassName,
  ...props
}: SectionProps) {
  return (
    <section className={cn("w-full py-16 md:py-24", className)} {...props}>
      <div
        className={cn(
          "mx-auto w-full max-w-[1200px] px-6 md:px-8",
          containerClassName
        )}
      >
        {children}
      </div>
    </section>
  );
}
