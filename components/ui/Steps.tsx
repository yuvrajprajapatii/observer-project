// components/ui/Steps.tsx
import React from "react"

export default function Steps() {
  return (
    <section className="bg-[#f6f7f8] py-20 border-t border-[#f2f3f7] border-b">
      <div className="max-w-5xl mx-auto px-4">
        <header className="text-center mb-10">
          <h2
            className="text-2xl md:text-[2rem] font-medium text-[#0f1720] mb-2"
            style={{ fontFamily: "Nunito, system-ui, -apple-system" }}
          >
            Your Path to Success
          </h2>
          <p
            className="text-[#5f6a7f] text-[1.05rem] mb-6 font-medium max-w-2xl mx-auto"
            style={{ fontFamily: "Nunito, system-ui, -apple-system" }}
          >
            Four simple steps to unlock your potential and chart your unique journey
          </p>
        </header>

        {/* Steps area - relative wrapper so the SVG connector can be absolutely positioned */}
        <div className="relative">
          {/* Connector SVG - only visible on md+ */}
          <svg
            className="hidden md:block absolute inset-x-0 top-28 -z-10 h-48 pointer-events-none"
            viewBox="0 0 1000 200"
            preserveAspectRatio="none"
            aria-hidden
          >
            {/* Line connecting the four step nodes (approx positions at 12.5%, 37.5%, 62.5%, 87.5% of width) */}
            <path
              d="M125 100 L375 100 L625 100 L875 100"
              stroke="rgba(17,24,39,0.06)"
              strokeWidth="2"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeDasharray="1000"
              strokeDashoffset="1000"
            >
              {/* animate the draw once on load */}
              <animate
                attributeName="stroke-dashoffset"
                from="1000"
                to="0"
                dur="900ms"
                begin="0s"
                fill="freeze"
              />
            </path>

            {/* Small node circles with subtle inner ring */}
            <g opacity="0.95">
              <circle cx="125" cy="100" r="7" fill="#ffffff" stroke="rgba(17,24,39,0.12)" strokeWidth="1" />
              <circle cx="375" cy="100" r="7" fill="#ffffff" stroke="rgba(17,24,39,0.12)" strokeWidth="1" />
              <circle cx="625" cy="100" r="7" fill="#ffffff" stroke="rgba(17,24,39,0.12)" strokeWidth="1" />
              <circle cx="875" cy="100" r="7" fill="#ffffff" stroke="rgba(17,24,39,0.12)" strokeWidth="1" />
            </g>
          </svg>

          {/* Steps grid */}
          <div className="flex flex-wrap justify-center gap-8 mt-8">
            {/* Step 1 */}
            <div className="flex flex-col items-center max-w-xs w-56">
              <span
                className="w-11 h-11 mb-3 flex items-center justify-center rounded-full bg-white border border-[#e4e8eb] text-lg font-semibold text-[#0f1720] shadow-sm"
                style={{ fontFamily: "Nunito, system-ui" }}
              >
                1
              </span>
              <h4 className="font-semibold text-base mb-2 text-[#0f1720]" style={{ fontFamily: "Nunito, system-ui" }}>
                Explore Your Interests
              </h4>
              <p className="text-[#69728e] text-[0.98rem] font-medium text-center">
                Take interactive quizzes and explore 30+ subjects — from physics to music and entrepreneurship.
              </p>
            </div>

            {/* Step 2 */}
            <div className="flex flex-col items-center max-w-xs w-56">
              <span
                className="w-11 h-11 mb-3 flex items-center justify-center rounded-full bg-white border border-[#e4e8eb] text-lg font-semibold text-[#0f1720] shadow-sm"
                style={{ fontFamily: "Nunito, system-ui" }}
              >
                2
              </span>
              <h4 className="font-semibold text-base mb-2 text-[#0f1720]" style={{ fontFamily: "Nunito, system-ui" }}>
                Discover Synergies
              </h4>
              <p className="text-[#69728e] text-[0.98rem] font-medium text-center">
                Our AI identifies powerful combinations of your interests and suggests hybrid career paths.
              </p>
            </div>

            {/* Step 3 */}
            <div className="flex flex-col items-center max-w-xs w-56">
              <span
                className="w-11 h-11 mb-3 flex items-center justify-center rounded-full bg-white border border-[#e4e8eb] text-lg font-semibold text-[#0f1720] shadow-sm"
                style={{ fontFamily: "Nunito, system-ui" }}
              >
                3
              </span>
              <h4 className="font-semibold text-base mb-2 text-[#0f1720]" style={{ fontFamily: "Nunito, system-ui" }}>
                Get Your Roadmap
              </h4>
              <p className="text-[#69728e] text-[0.98rem] font-medium text-center">
                Receive a personalized year-by-year plan with resources, competitions, and mentorship.
              </p>
            </div>

            {/* Step 4 */}
            <div className="flex flex-col items-center max-w-xs w-56">
              <span
                className="w-11 h-11 mb-3 flex items-center justify-center rounded-full bg-white border border-[#e4e8eb] text-lg font-semibold text-[#0f1720] shadow-sm"
                style={{ fontFamily: "Nunito, system-ui" }}
              >
                4
              </span>
              <h4 className="font-semibold text-base mb-2 text-[#0f1720]" style={{ fontFamily: "Nunito, system-ui" }}>
                Launch Your Future
              </h4>
              <p className="text-[#69728e] text-[0.98rem] font-medium text-center">
                Access global opportunities, mentors, and real projects to bring your ideas to life.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Small global styles for responsive placement of the SVG connector */}
      <style
        dangerouslySetInnerHTML={{
          __html: `
          /* Position the connector SVG relative to content width.
             We used viewBox 0..1000 so the X positions map to percentages.
             The SVG is hidden on small screens for clarity.
          */
          @media (min-width: 768px) {
            /* Align the absolute svg to the center container width */
            .relative > svg {
              left: 50%;
              transform: translateX(-50%);
              width: 100%;
              max-width: 960px;
            }
          }
        `,
        }}
      />
    </section>
  )
}
