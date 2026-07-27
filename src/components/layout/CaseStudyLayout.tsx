import { ReactNode } from "react";

interface CaseStudyLayoutProps {
  children: ReactNode;
  sidebar: ReactNode;
}

export function CaseStudyLayout({ children, sidebar }: CaseStudyLayoutProps) {
  return (
    <div className="max-w-7xl mx-auto px-6 md:px-12 py-12 lg:py-24">
      <div className="flex flex-col lg:flex-row gap-12 lg:gap-24 relative">
        {/* Main Content Area */}
        <div className="w-full lg:w-[70%] order-2 lg:order-1">
          {children}
        </div>
        
        {/* Sticky Sidebar Area */}
        <div className="w-full lg:w-[30%] order-1 lg:order-2">
          <div className="sticky top-32 hidden lg:block">
            {sidebar}
          </div>
        </div>
      </div>
    </div>
  );
}
