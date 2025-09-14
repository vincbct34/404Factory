"use client";

import { BrochureContent } from "@/components/brochure-content";
import { ArrowLeft, Download } from "lucide-react";
import { useRouter } from "next/navigation";

export default function BrochurePage() {
  const router = useRouter();

  const handlePrint = () => {
    window.print();
  };

  const handleBack = () => {
    router.back();
  };

  return (
    <div className="min-h-screen bg-black text-white print:bg-white print:text-black">
      {/* Navigation bar - hidden when printing */}
      <div className="print:hidden bg-black border-b border-gray-800 p-3 sm:p-4 sticky top-0 z-10">
        <div className="max-w-4xl mx-auto flex justify-between items-center">
          <button
            onClick={handleBack}
            className="flex items-center gap-1 sm:gap-2 text-gray-400 hover:text-electric-blue transition-colors font-mono text-sm sm:text-base"
          >
            <ArrowLeft className="w-4 h-4 sm:w-5 sm:h-5" />
            <span className="hidden xs:inline">./back</span>
            <span className="xs:hidden">./back</span>
          </button>

          <h1 className="text-lg sm:text-2xl font-black text-white">
            BROCHURE<span className="text-electric-blue">.</span>
          </h1>

          <button
            onClick={handlePrint}
            className="flex items-center gap-1 sm:gap-2 bg-electric-blue hover:bg-electric-blue/80 text-black px-2 sm:px-4 py-1 sm:py-2 transition-colors font-mono font-bold text-xs sm:text-sm"
          >
            <Download className="w-4 h-4 sm:w-5 sm:h-5" />
            <span className="hidden sm:inline">IMPRIMER_PDF</span>
            <span className="sm:hidden">PDF</span>
          </button>
        </div>
      </div>

      {/* Brochure content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <BrochureContent forPDF={false} />
      </div>
    </div>
  );
}
