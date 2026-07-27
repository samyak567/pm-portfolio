import { Download, FileText, Image as ImageIcon, File, Presentation, Database } from "lucide-react";

interface ResourceCardProps {
  title: string;
  description: string;
  type: "PDF" | "Image" | "Presentation" | "Link" | "Data";
  size?: string;
  href: string;
}

export function ResourceCard({ title, description, type, size, href }: ResourceCardProps) {
  const Icon = type === "PDF" ? FileText : type === "Image" ? ImageIcon : type === "Presentation" ? Presentation : type === "Data" ? Database : File;

  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className="group flex flex-col justify-between p-6 bg-white border border-gray-200 rounded-2xl hover:border-gray-300 hover:shadow-md transition-all duration-300 not-prose h-full">
      <div>
        <div className="flex items-center justify-between mb-5">
          <div className="w-10 h-10 rounded-lg bg-gray-50 border border-gray-100 flex items-center justify-center group-hover:bg-gray-100 transition-colors">
            <Icon className="w-5 h-5 text-gray-500 group-hover:text-gray-900 transition-colors" />
          </div>
          <div className="flex items-center gap-2 text-[12px] font-bold uppercase tracking-widest text-gray-400">
            <span>{type}</span>
            {size && (
              <>
                <span>•</span>
                <span>{size}</span>
              </>
            )}
          </div>
        </div>
        <h3 className="font-heading text-[18px] font-semibold text-gray-900 mb-2 leading-snug">{title}</h3>
        <p className="text-[15px] text-gray-500 leading-[1.6] line-clamp-2">{description}</p>
      </div>
      <div className="mt-6 flex items-center text-[13px] font-bold uppercase tracking-widest text-gray-900">
        Download <Download className="ml-2 w-4 h-4 transition-transform group-hover:translate-y-1" />
      </div>
    </a>
  );
}
