"use client"

import { BrochureContent } from "@/components/brochure-content"
import { ArrowLeft, Download } from "lucide-react"
import { useRouter } from "next/navigation"

export default function BrochurePage() {
  const router = useRouter()

  const handlePrint = () => {
    window.print()
  }

  const handleBack = () => {
    router.back()
  }

  return (
    <div className="min-h-screen bg-black text-white print:bg-white print:text-black">
      {/* Navigation bar - hidden when printing */}
      <div className="print:hidden bg-black border-b border-gray-800 p-4 sticky top-0 z-10">
        <div className="max-w-4xl mx-auto flex justify-between items-center">
          <button
            onClick={handleBack}
            className="flex items-center gap-2 text-gray-400 hover:text-electric-blue transition-colors font-mono"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>./back</span>
          </button>

          <h1 className="text-2xl font-black text-white">
            BROCHURE<span className="text-electric-blue">.</span>
          </h1>

          <button
            onClick={handlePrint}
            className="flex items-center gap-2 bg-electric-blue hover:bg-electric-blue/80 text-black px-4 py-2 transition-colors font-mono font-bold"
          >
            <Download className="w-5 h-5" />
            <span>IMPRIMER_PDF</span>
          </button>
        </div>
      </div>

      {/* Brochure content */}
      <div className="max-w-4xl mx-auto">
        <BrochureContent forPDF={false} />
      </div>
    </div>
  )
}
