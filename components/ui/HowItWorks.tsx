// components/ui/HowItWorks.tsx
import React from 'react'

export function HowItWorks(): JSX.Element {
  return (
    <section className="bg-[#f6f7f8] py-20">
      <div className="max-w-6xl mx-auto px-6">
        <header className="text-center mb-12">
          <h2
            className="text-3xl md:text-4xl font-medium text-[#0f1720] leading-tight"
            style={{ fontFamily: 'Nunito, system-ui, -apple-system' }}
          >
            How We Help You Succeed
          </h2>

          <p
            className="mt-4 text-gray-600 text-base md:text-lg max-w-2xl mx-auto"
            style={{ fontFamily: 'Nunito, system-ui, -apple-system' }}
          >
            A thoughtful, guided path — combining diagnostics, tailored learning plans, global opportunities, and mentor support.
          </p>
        </header>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Card A */}
          <article
            className="relative bg-white rounded-2xl border border-gray-100 p-6 md:p-8 transition-transform duration-300 hover:-translate-y-2 hover:shadow-lg"
            aria-labelledby="how-1"
            style={{ fontFamily: 'Nunito, system-ui, -apple-system' }}
          >
            <div className="flex items-center gap-4 mb-4">
              <div
                className="w-11 h-11 flex items-center justify-center rounded-lg"
                style={{
                  background: 'linear-gradient(180deg, rgba(17,24,39,0.03), rgba(17,24,39,0.01))',
                }}
                aria-hidden={true}
              >
                <svg
                  className="w-5 h-5 text-[#111827]"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.4"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M10 3h4v4h-4zM4 21h16v-2H4zM7 7h10v10H7z" />
                </svg>
              </div>

              <h3 id="how-1" className="text-base font-semibold text-[#0f1720]">
                Interest Discovery
              </h3>
            </div>

            <p className="text-gray-600 text-sm leading-relaxed">
              Interactive diagnostics and guided exercises that reveal strengths, preferences and high-impact interests.
            </p>
          </article>

          {/* Card B */}
          <article
            className="relative bg-white rounded-2xl border border-gray-100 p-6 md:p-8 transition-transform duration-300 hover:-translate-y-2 hover:shadow-lg"
            aria-labelledby="how-2"
            style={{ fontFamily: 'Nunito, system-ui, -apple-system' }}
          >
            <div className="flex items-center gap-4 mb-4">
              <div
                className="w-11 h-11 flex items-center justify-center rounded-lg"
                style={{
                  background: 'linear-gradient(180deg, rgba(17,24,39,0.03), rgba(17,24,39,0.01))',
                }}
                aria-hidden={true}
              >
                <svg
                  className="w-5 h-5 text-[#111827]"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.4"
                >
                  <circle cx="12" cy="12" r="9" />
                  <path d="M2 12h20" strokeLinecap="round" />
                </svg>
              </div>

              <h3 id="how-2" className="text-base font-semibold text-[#0f1720]">
                Subject Synergy Mapping
              </h3>
            </div>

            <p className="text-gray-600 text-sm leading-relaxed">
              AI blends interests into meaningful pathways — connecting subjects and skills that create new career possibilities.
            </p>
          </article>

          {/* Card C */}
          <article
            className="relative bg-white rounded-2xl border border-gray-100 p-6 md:p-8 transition-transform duration-300 hover:-translate-y-2 hover:shadow-lg"
            aria-labelledby="how-3"
            style={{ fontFamily: 'Nunito, system-ui, -apple-system' }}
          >
            <div className="flex items-center gap-4 mb-4">
              <div
                className="w-11 h-11 flex items-center justify-center rounded-lg"
                style={{
                  background: 'linear-gradient(180deg, rgba(17,24,39,0.03), rgba(17,24,39,0.01))',
                }}
                aria-hidden={true}
              >
                <svg
                  className="w-5 h-5 text-[#111827]"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.4"
                >
                  <rect x="4" y="5" width="16" height="14" rx="2" />
                </svg>
              </div>

              <h3 id="how-3" className="text-base font-semibold text-[#0f1720]">
                Personalized Roadmaps
              </h3>
            </div>

            <p className="text-gray-600 text-sm leading-relaxed">
              Step-by-step roadmaps including projects, mentors and milestones tailored to each learner’s timeline.
            </p>
          </article>

          {/* Card D */}
          <article
            className="relative bg-white rounded-2xl border border-gray-100 p-6 md:p-8 transition-transform duration-300 hover:-translate-y-2 hover:shadow-lg"
            aria-labelledby="how-4"
            style={{ fontFamily: 'Nunito, system-ui, -apple-system' }}
          >
            <div className="flex items-center gap-4 mb-4">
              <div
                className="w-11 h-11 flex items-center justify-center rounded-lg"
                style={{
                  background: 'linear-gradient(180deg, rgba(17,24,39,0.03), rgba(17,24,39,0.01))',
                }}
                aria-hidden={true}
              >
                <svg
                  className="w-5 h-5 text-[#111827]"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.4"
                >
                  <path d="M12 2v20" strokeLinecap="round" />
                </svg>
              </div>

              <h3 id="how-4" className="text-base font-semibold text-[#0f1720]">
                Curated Resources
              </h3>
            </div>

            <p className="text-gray-600 text-sm leading-relaxed">
              A vetted library of resources (courses, papers, projects) filtered for learning style and milestones.
            </p>
          </article>

          {/* Card E */}
          <article
            className="relative bg-white rounded-2xl border border-gray-100 p-6 md:p-8 transition-transform duration-300 hover:-translate-y-2 hover:shadow-lg"
            aria-labelledby="how-5"
            style={{ fontFamily: 'Nunito, system-ui, -apple-system' }}
          >
            <div className="flex items-center gap-4 mb-4">
              <div
                className="w-11 h-11 flex items-center justify-center rounded-lg"
                style={{
                  background: 'linear-gradient(180deg, rgba(17,24,39,0.03), rgba(17,24,39,0.01))',
                }}
                aria-hidden={true}
              >
                <svg
                  className="w-5 h-5 text-[#111827]"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.4"
                >
                  <path d="M8 16l4-8 4 8" strokeLinecap="round" />
                </svg>
              </div>

              <h3 id="how-5" className="text-base font-semibold text-[#0f1720]">
                Global Mentorship
              </h3>
            </div>

            <p className="text-gray-600 text-sm leading-relaxed">
              Direct mentorship and feedback from global experts to accelerate skill development and opportunity access.
            </p>
          </article>

          {/* Card F */}
          <article
            className="relative bg-white rounded-2xl border border-gray-100 p-6 md:p-8 transition-transform duration-300 hover:-translate-y-2 hover:shadow-lg"
            aria-labelledby="how-6"
            style={{ fontFamily: 'Nunito, system-ui, -apple-system' }}
          >
            <div className="flex items-center gap-4 mb-4">
              <div
                className="w-11 h-11 flex items-center justify-center rounded-lg"
                style={{
                  background: 'linear-gradient(180deg, rgba(17,24,39,0.03), rgba(17,24,39,0.01))',
                }}
                aria-hidden={true}
              >
                <svg
                  className="w-5 h-5 text-[#111827]"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.4"
                >
                  <rect x="3" y="3" width="18" height="18" rx="2" />
                </svg>
              </div>

              <h3 id="how-6" className="text-base font-semibold text-[#0f1720]">
                Balanced Perspectives
              </h3>
            </div>

            <p className="text-gray-600 text-sm leading-relaxed">
              Structured guidance to weigh pros and cons across paths so learners make confident, informed choices.
            </p>
          </article>
        </div>
      </div>
    </section>
  )
}
