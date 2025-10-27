// components/ui/Features.tsx
import React from "react"

export default function Features() {
  const cardBase =
    "relative bg-white rounded-2xl border border-gray-100 px-7 py-9 flex flex-col items-center text-center transition-transform duration-300 ease-out hover:-translate-y-2 hover:shadow-lg"

  return (
    <section className="bg-[#f6f7f8] py-20">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-8 text-center">
          <h2
            className="text-2xl md:text-3xl font-medium text-[#0f1720]"
            style={{ fontFamily: "Nunito, system-ui, -apple-system" }}
          >
            What We Do
          </h2>
          <p
            className="mt-3 max-w-2xl mx-auto text-gray-600"
            style={{ fontFamily: "Nunito, system-ui, -apple-system" }}
          >
            We combine personalized guidance, global exposure and community-driven learning to help students reach their full potential.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1 */}
          <article
            className={cardBase}
            style={{ fontFamily: "Nunito, system-ui, -apple-system" }}
            aria-labelledby="feat-empower"
          >
            {/* subtle corner accent */}
            <div className="absolute -top-3 -left-3 w-10 h-10 rounded-md bg-gradient-to-br from-gray-50 to-transparent opacity-60 pointer-events-none" />

            {/* icon */}
            <div
              className="w-14 h-14 flex items-center justify-center rounded-full mb-4"
              style={{
                background:
                  "linear-gradient(180deg, rgba(17,24,39,0.03), rgba(17,24,39,0.01))",
                boxShadow: "inset 0 1px 0 rgba(255,255,255,0.6)"
              }}
              aria-hidden
            >
              <svg className="w-6 h-6 text-[#111827]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 20v-6m0 0l4-4m-4 4l-4-4" />
              </svg>
            </div>

            <h3 id="feat-empower" className="text-lg font-semibold text-[#111827] mb-2">
              Empower Every Student
            </h3>

            <p className="text-gray-600 text-sm leading-relaxed">
              Access to thoughtful guidance and international opportunities so learners from all backgrounds can thrive.
            </p>

            {/* decorative faint separator */}
            <div className="mt-6 w-14 h-[1px] bg-gray-100 rounded-full" />
          </article>

          {/* Card 2 */}
          <article
            className={cardBase}
            style={{ fontFamily: "Nunito, system-ui, -apple-system" }}
            aria-labelledby="feat-global"
          >
            <div className="absolute -top-3 -right-3 w-10 h-10 rounded-md bg-gradient-to-br from-gray-50 to-transparent opacity-60 pointer-events-none" />

            <div
              className="w-14 h-14 flex items-center justify-center rounded-full mb-4"
              style={{
                background:
                  "linear-gradient(180deg, rgba(17,24,39,0.03), rgba(17,24,39,0.01))",
                boxShadow: "inset 0 1px 0 rgba(255,255,255,0.6)"
              }}
              aria-hidden
            >
              <svg className="w-6 h-6 text-[#111827]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
                <circle cx="12" cy="12" r="9" stroke="currentColor" />
                <path d="M2 12h20M12 2v20" stroke="currentColor" strokeLinecap="round" />
              </svg>
            </div>

            <h3 id="feat-global" className="text-lg font-semibold text-[#111827] mb-2">
              Global Exposure
            </h3>

            <p className="text-gray-600 text-sm leading-relaxed">
              Connect with mentors, competitions and scholarships worldwide — bringing opportunity closer to students everywhere.
            </p>

            <div className="mt-6 w-14 h-[1px] bg-gray-100 rounded-full" />
          </article>

          {/* Card 3 */}
          <article
            className={cardBase}
            style={{ fontFamily: "Nunito, system-ui, -apple-system" }}
            aria-labelledby="feat-community"
          >
            <div className="absolute -bottom-3 -left-3 w-10 h-10 rounded-md bg-gradient-to-br from-gray-50 to-transparent opacity-60 pointer-events-none" />

            <div
              className="w-14 h-14 flex items-center justify-center rounded-full mb-4"
              style={{
                background:
                  "linear-gradient(180deg, rgba(17,24,39,0.03), rgba(17,24,39,0.01))",
                boxShadow: "inset 0 1px 0 rgba(255,255,255,0.6)"
              }}
              aria-hidden
            >
              <svg className="w-6 h-6 text-[#111827]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <rect width="16" height="12" x="4" y="6" rx="2" stroke="currentColor" />
                <path d="M8 10h8" stroke="currentColor" strokeLinecap="round" />
              </svg>
            </div>

            <h3 id="feat-community" className="text-lg font-semibold text-[#111827] mb-2">
              Community Driven
            </h3>

            <p className="text-gray-600 text-sm leading-relaxed">
              Built together with educators and learners to ensure cultural relevance, trust, and quality at scale.
            </p>

            <div className="mt-6 w-14 h-[1px] bg-gray-100 rounded-full" />
          </article>
        </div>
      </div>
    </section>
  )
}
