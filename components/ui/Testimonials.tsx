// components/ui/Testimonials.tsx
import React from "react"

export default function Testimonials() {
  return (
    <section className="relative bg-[#1c2024] text-white py-20 overflow-hidden">
      {/* Ambient blurred shapes for subtle depth */}
      <div
        aria-hidden
        className="absolute -left-20 -top-32 w-96 h-96 rounded-full filter blur-3xl opacity-10 pointer-events-none"
        style={{ background: "radial-gradient(circle at 30% 30%, rgba(255,255,255,0.06), transparent 30%)" }}
      />
      <div
        aria-hidden
        className="absolute -right-24 -bottom-28 w-[28rem] h-[28rem] rounded-full filter blur-3xl opacity-8 pointer-events-none"
        style={{ background: "radial-gradient(circle at 70% 70%, rgba(255,255,255,0.04), transparent 30%)" }}
      />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <header className="text-center mb-10">
          <h2
            className="text-3xl md:text-4xl font-medium leading-tight"
            style={{ fontFamily: "Nunito, system-ui, -apple-system" }}
          >
            Transforming Lives
          </h2>
          <p
            className="mt-4 text-[#c7cde4] text-[1.05rem] max-w-2xl mx-auto"
            style={{ fontFamily: "Nunito, system-ui, -apple-system" }}
          >
            Real students discovering their potential and charting paths to extraordinary futures.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Testimonial 1 */}
          <article
            className="bg-[#11121a]/80 backdrop-blur-sm rounded-2xl p-6 flex flex-col min-h-[220px] transition-transform duration-300 hover:-translate-y-2"
            aria-label="Testimonial by Student, Aspiring Biotechnologist"
            style={{ fontFamily: "Nunito, system-ui" }}
          >
            <div className="flex items-start gap-4 mb-4">
              <div className="w-10 h-10 rounded-full bg-white/8 flex items-center justify-center text-sm font-semibold text-white/90">
                SB
              </div>
              <div>
                <div className="text-sm text-[#bfc7e0] italic">
                  “Observer helped me map my interests to real opportunities — I found mentorship and scholarships I never knew existed.”
                </div>
              </div>
            </div>

            <div className="mt-auto text-xs text-[#9aa3c6] font-semibold">
              Student • Aspiring Biotechnologist
            </div>
          </article>

          {/* Testimonial 2 */}
          <article
            className="bg-[#11121a]/80 backdrop-blur-sm rounded-2xl p-6 flex flex-col min-h-[220px] transition-transform duration-300 hover:-translate-y-2"
            aria-label="Testimonial by Student, Physics"
            style={{ fontFamily: "Nunito, system-ui" }}
          >
            <div className="flex items-start gap-4 mb-4">
              <div className="w-10 h-10 rounded-full bg-white/8 flex items-center justify-center text-sm font-semibold text-white/90">
                AR
              </div>
              <div>
                <div className="text-sm text-[#bfc7e0] italic">
                  “The tailored roadmap was a game-changer — step-by-step projects and mentors made my goals feel within reach.”
                </div>
              </div>
            </div>

            <div className="mt-auto text-xs text-[#9aa3c6] font-semibold">
              Student • Physics
            </div>
          </article>

          {/* Testimonial 3 */}
          <article
            className="bg-[#11121a]/80 backdrop-blur-sm rounded-2xl p-6 flex flex-col min-h-[220px] transition-transform duration-300 hover:-translate-y-2"
            aria-label="Testimonial by Future Innovator"
            style={{ fontFamily: "Nunito, system-ui" }}
          >
            <div className="flex items-start gap-4 mb-4">
              <div className="w-10 h-10 rounded-full bg-white/8 flex items-center justify-center text-sm font-semibold text-white/90">
                FM
              </div>
              <div>
                <div className="text-sm text-[#bfc7e0] italic">
                  “From hobby to scholarship — Observer’s mentorship connected me to a team that helped build my project into a portfolio piece.”
                </div>
              </div>
            </div>

            <div className="mt-auto text-xs text-[#9aa3c6] font-semibold">
              Student • Future Innovator
            </div>
          </article>
        </div>
      </div>
    </section>
  )
}
