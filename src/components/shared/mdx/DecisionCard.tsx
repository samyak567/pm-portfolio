import { ReactNode } from "react";
import { CheckCircle2, AlertTriangle, ArrowRight, Lightbulb } from "lucide-react";

interface DecisionCardProps {
  decision: string;
  reason: ReactNode;
  tradeoff: ReactNode;
  outcome: ReactNode;
}

export function DecisionCard({ decision, reason, tradeoff, outcome }: DecisionCardProps) {
  return (
    <div className="bg-white border border-gray-200 rounded-2xl overflow-hidden my-10 not-prose shadow-sm">
      <div className="bg-gray-50/50 border-b border-gray-200 p-6 flex items-start gap-4">
        <Lightbulb className="w-5 h-5 text-gray-900 shrink-0 mt-0.5" />
        <div>
          <h4 className="text-[13px] font-bold uppercase tracking-widest text-gray-500 mb-1.5">Key Decision</h4>
          <p className="text-[20px] font-heading font-semibold text-gray-900 leading-snug">{decision}</p>
        </div>
      </div>
      <div className="p-6 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <div className="flex items-center gap-2 mb-3">
            <CheckCircle2 className="w-4 h-4 text-gray-400" />
            <h5 className="text-[13px] font-bold uppercase tracking-widest text-gray-500">Reason</h5>
          </div>
          <div className="text-[15px] text-gray-700 leading-[1.7]">{reason}</div>
        </div>
        <div>
          <div className="flex items-center gap-2 mb-3">
            <AlertTriangle className="w-4 h-4 text-gray-400" />
            <h5 className="text-[13px] font-bold uppercase tracking-widest text-gray-500">Trade-off</h5>
          </div>
          <div className="text-[15px] text-gray-700 leading-[1.7]">{tradeoff}</div>
        </div>
        <div>
          <div className="flex items-center gap-2 mb-3">
            <ArrowRight className="w-4 h-4 text-gray-900" />
            <h5 className="text-[13px] font-bold uppercase tracking-widest text-gray-900">Expected Outcome</h5>
          </div>
          <div className="text-[15px] text-gray-900 leading-[1.7] font-medium">{outcome}</div>
        </div>
      </div>
    </div>
  );
}
