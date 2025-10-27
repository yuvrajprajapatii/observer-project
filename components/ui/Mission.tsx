// components/ui/Mission.tsx
'use client'

import React from "react"

export default function Mission() {
  return (
    <section className="w-full bg-[#f6f7f8] py-20">
      <div className="max-w-4xl mx-auto px-6">
        <div
          className="bg-white rounded-2xl shadow-sm p-10 md:p-14 text-center"
          style={{ fontFamily: "Nunito, system-ui, -apple-system" }}
        >
          <div className="mx-auto mb-6 w-14 h-0.5 bg-gray-200 rounded-full" />
          <h2
            className="text-[1.9rem] md:text-[2.25rem] lg:text-[2.45rem] font-medium text-[#0f1720] mb-4 leading-snug"
            style={{ letterSpacing: "-0.01em" }}
          >
            Our Mission
          </h2>
          <p className="mx-auto text-[#5f6a7f] text-[1.05rem] md:text-[1.13rem] max-w-2xl font-medium leading-relaxed">
            Bridging the gap between curiosity and opportunity for students everywhere.
          </p>
        </div>
      </div>

      <style jsx>{`
        .shadow-sm {
          transform: translateY(8px);
          opacity: 0;
          animation: fadeUp 560ms cubic-bezier(0.2,0.9,0.2,1) 120ms forwards;
        }
        @keyframes fadeUp {
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }
      `}</style>
    </section>
  )
}
