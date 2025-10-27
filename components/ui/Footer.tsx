// components/ui/Footer.tsx
import React from "react"

export default function Footer() {
  return (
    <footer className="relative bg-[#0b0d10] text-[#b8bfd3] pt-16 pb-8 px-6" aria-labelledby="footer-heading">
      {/* soft ambient glow behind footer for depth */}
      <div
        aria-hidden
        className="absolute inset-x-0 -top-20 h-40 pointer-events-none"
        style={{
          background:
            "radial-gradient(40rem 20rem at 10% 10%, rgba(255,255,255,0.02), transparent 8%), radial-gradient(30rem 20rem at 90% 90%, rgba(255,255,255,0.01), transparent 12%)",
          filter: "blur(28px)",
          opacity: 0.7,
        }}
      />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-y-12 gap-x-8">
          {/* Logo + tagline */}
          <div className="flex flex-col items-start">
            <div className="flex items-center gap-3 mb-3">
              <div
                className="w-10 h-10 flex items-center justify-center rounded-md bg-white"
                aria-hidden
              >
                <span style={{ fontFamily: "Nunito, system-ui, -apple-system" }} className="text-lg font-medium text-[#111827]">
                  O
                </span>
              </div>
              <div>
                <div
                  id="footer-heading"
                  style={{ fontFamily: "Nunito, system-ui, -apple-system" }}
                  className="text-lg font-medium text-white"
                >
                  Observer
                </div>
                <div className="text-xs text-[#9aa3c6]">Guidance • Discovery • Opportunity</div>
              </div>
            </div>

            <p className="text-sm text-[#9aa3c6] max-w-[18rem]">
              Empowering students to discover passions, build skills and access global opportunities — a thoughtful learning path for every learner.
            </p>

            <div className="flex items-center gap-3 mt-5">
              <a href="#" aria-label="GitHub" className="text-[#9aa3c6] hover:text-white transition">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" aria-hidden>
                  <path d="M10 2a8 8 0 00-2.53 15.59c.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.48-2 .37-2.57-.49-2.73-.94-.09-.22-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.62-.01 1.06.57 1.21.81.7 1.18 1.81.85 2.26.65.07-.51.27-.85.49-1.04-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.58.82-2.14-.08-.2-.36-1.01.08-2.1 0 0 .67-.21 2.2.82a7.52 7.52 0 012 0c1.53-1.03 2.2-.82 2.2-.82.44 1.09.16 1.9.08 2.1.5.56.81 1.27.81 2.14 0 3.07-1.87 3.75-3.65 3.95.28.24.53.73.53 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8 8 0 0010 2z" />
                </svg>
              </a>

              <a href="#" aria-label="Twitter" className="text-[#9aa3c6] hover:text-white transition">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" aria-hidden>
                  <path d="M17.316 6.246c.007.158.007.317.007.477 0 4.855-3.701 10.453-10.453 10.453-2.083 0-4.017-.611-5.651-1.662.29.034.58.051.872.051 1.728 0 3.317-.587 4.582-1.578-1.615-.03-2.98-1.096-3.447-2.564.225.042.458.065.697.065.338 0 .669-.046.981-.13-1.689-.339-2.958-1.833-2.958-3.626v-.047c.498.277 1.066.444 1.67.463-1-.668-1.655-1.808-1.655-3.097 0-.682.184-1.322.506-1.872 1.846 2.265 4.613 3.757 7.478 3.914-.064-.273-.098-.558-.098-.852 0-2.06 1.671-3.731 3.732-3.731 1.073 0 2.043.454 2.723 1.18a7.402 7.402 0 002.362-.903 3.723 3.723 0 01-1.638 2.06 7.411 7.411 0 002.139-.585 8.166 8.166 0 01-1.862 1.932z" />
                </svg>
              </a>

              <a href="#" aria-label="LinkedIn" className="text-[#9aa3c6] hover:text-white transition">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" aria-hidden>
                  <path d="M12.004 8.477h1.896v.513c.244-.371.653-.899 1.59-.899 1.019 0 1.782.671 1.782 2.113v4.357h-2.012v-3.859c0-.914-.327-1.537-1.15-1.537-.626 0-.996.42-1.158.823-.06.147-.075.352-.075.558v4.015h-2.012s.027-6.513 0-7.191h2.012v1.568zm-7.525.042c.685 0 1.112.451 1.112 1.044 0 .583-.418 1.045-1.107 1.045h-.013c-.687 0-1.109-.462-1.109-1.045 0-.593.426-1.044 1.12-1.044zm1.011 5.312v-4.358h2.012v4.358h-2.012zm1.007-5.77a1.164 1.164 0 100-2.328 1.164 1.164 0 000 2.328z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Links column 1 */}
          <div>
            <h4 className="text-sm font-semibold text-white mb-3" style={{ fontFamily: "Nunito, system-ui" }}>
              Platform
            </h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-white transition">Explore Subjects</a></li>
              <li><a href="#" className="hover:text-white transition">Career Paths</a></li>
              <li><a href="#" className="hover:text-white transition">Find Mentors</a></li>
              <li><a href="#" className="hover:text-white transition">Resources</a></li>
            </ul>
          </div>

          {/* Links column 2 */}
          <div>
            <h4 className="text-sm font-semibold text-white mb-3" style={{ fontFamily: "Nunito, system-ui" }}>
              About
            </h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-white transition">Our Mission</a></li>
              <li><a href="#" className="hover:text-white transition">How it Works</a></li>
              <li><a href="#" className="hover:text-white transition">Contribute</a></li>
              <li><a href="#" className="hover:text-white transition">Contact</a></li>
            </ul>
          </div>

          {/* Newsletter / small CTA */}
          <div>
            <h4 className="text-sm font-semibold text-white mb-3" style={{ fontFamily: "Nunito, system-ui" }}>
              Stay in the loop
            </h4>

            <p className="text-sm text-[#9aa3c6] mb-4" style={{ fontFamily: "Nunito, system-ui" }}>
              Get occasional updates, scholarship alerts and stories — no spam.
            </p>

            <form action="#" method="POST" className="flex gap-3">
              <label htmlFor="footer-email" className="sr-only">Email</label>
              <input
                id="footer-email"
                name="email"
                type="email"
                placeholder="you@example.com"
                className="flex-1 rounded-lg px-3 py-2 bg-[#0b0d10]/40 placeholder:text-[#9aa3c6] text-white border border-[#1b1d22] focus:outline-none focus:ring-2 focus:ring-white/20"
                aria-label="Email address"
              />
              <button
                type="submit"
                className="rounded-lg px-4 py-2 bg-white text-[#0f1720] font-medium hover:shadow-md transition"
              >
                Join
              </button>
            </form>

            <div className="text-xs text-[#7f89a6] mt-4">
              By joining you agree to our <a href="#" className="underline hover:text-white">privacy policy</a>.
            </div>
          </div>
        </div>

        {/* footer bottom */}
        <div className="mt-12 border-t border-[#1b1d22] pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-sm text-[#8f97b3]">
            © {new Date().getFullYear()} Observer — Built with care for students worldwide.
          </div>

          <div className="flex items-center gap-4">
            <a href="#" className="text-sm text-[#9aa3c6] hover:text-white">Terms</a>
            <a href="#" className="text-sm text-[#9aa3c6] hover:text-white">Privacy</a>
            <a href="#" className="text-sm text-[#9aa3c6] hover:text-white">Open Source</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
