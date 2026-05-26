"use client";

import { useState } from "react";

const EMAIL = "tramnguyen20803@gmail.com";

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(EMAIL);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section
      id="contact"
      className="relative bg-[#0C1220] py-24 lg:py-32 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 dark-grid opacity-60" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-teal-500/5 rounded-full blur-3xl pointer-events-none" />

      {/* Toast */}
      <div
        className={`fixed bottom-6 left-1/2 -translate-x-1/2 z-50 px-5 py-2.5 rounded-full bg-teal-500 text-white text-sm font-medium shadow-lg transition-all duration-300 ${
          copied ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2 pointer-events-none"
        }`}
      >
        ✓ Email copied to clipboard
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* ── Left ── */}
          <div>
            <p className="section-badge mb-4 reveal" style={{ color: "#5EEAD4" }}>
              06 — Contact
            </p>
            <h2
              className="text-4xl lg:text-5xl font-bold text-white leading-tight mb-6 reveal reveal-delay-1"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Let&apos;s build
              <br />
              <span className="italic text-teal-400">something great</span>
            </h2>
            <p className="text-slate-400 text-base leading-relaxed max-w-md mb-10 reveal reveal-delay-2">
              I&apos;m always open to discussing software projects, business ideas,
              or opportunities to collaborate. Feel free to reach out.
            </p>

            <div className="flex flex-wrap gap-3 reveal reveal-delay-3">
              <button
                onClick={handleCopyEmail}
                className="px-6 py-3 bg-teal-600 hover:bg-teal-500 text-white font-semibold rounded-lg transition-all duration-200 hover:-translate-y-0.5 text-sm"
              >
                {copied ? "Copied! ✓" : "Copy Email"}
              </button>
              <a
                href="/CV - NGUYEN BINH PHUONG TRAM.pdf"
                download
                className="px-6 py-3 border border-slate-600 hover:border-teal-500 text-slate-300 hover:text-white font-semibold rounded-lg transition-all duration-200 hover:-translate-y-0.5 text-sm"
              >
                Download CV ↓
              </a>
            </div>
          </div>

          {/* ── Right: Links ── */}
          <div className="space-y-4 reveal reveal-delay-2">
            {/* Email — click to copy */}
            <button
              onClick={handleCopyEmail}
              className="w-full bg-slate-800/40 border border-slate-700/50 rounded-xl p-5 flex items-center gap-4 hover:border-teal-500/40 transition-colors text-left group"
            >
              <div className="w-10 h-10 rounded-lg bg-slate-700/60 flex items-center justify-center text-teal-400 flex-shrink-0">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div className="min-w-0 flex-1">
                <p className="text-xs text-slate-500 mb-0.5" style={{ fontFamily: "var(--font-mono)" }}>
                  Email — click to copy
                </p>
                <span className="text-slate-300 group-hover:text-teal-400 transition-colors text-sm">
                  {copied ? "Copied to clipboard ✓" : EMAIL}
                </span>
              </div>
            </button>

            {/* GitHub */}
            <a
              href="https://github.com/phwtram"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full bg-slate-800/40 border border-slate-700/50 rounded-xl p-5 flex items-center gap-4 hover:border-teal-500/40 transition-colors group"
            >
              <div className="w-10 h-10 rounded-lg bg-slate-700/60 flex items-center justify-center text-teal-400 flex-shrink-0">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.44 9.8 8.2 11.38.6.11.82-.26.82-.58v-2.03c-3.34.73-4.04-1.61-4.04-1.61-.55-1.39-1.33-1.76-1.33-1.76-1.09-.74.08-.73.08-.73 1.2.09 1.84 1.24 1.84 1.24 1.07 1.83 2.8 1.3 3.49 1 .11-.78.42-1.3.76-1.6-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.13-.3-.54-1.52.12-3.17 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 3-.4c1.02.005 2.04.14 3 .4 2.28-1.55 3.29-1.23 3.29-1.23.66 1.65.25 2.87.12 3.17.77.84 1.24 1.91 1.24 3.22 0 4.61-2.81 5.63-5.48 5.92.43.37.81 1.1.81 2.22v3.29c0 .32.22.7.83.58C20.56 21.8 24 17.3 24 12c0-6.63-5.37-12-12-12z" />
                </svg>
              </div>
              <div className="min-w-0">
                <p className="text-xs text-slate-500 mb-0.5" style={{ fontFamily: "var(--font-mono)" }}>GitHub</p>
                <span className="text-slate-300 group-hover:text-teal-400 transition-colors text-sm">
                  github.com/phwtram ↗
                </span>
              </div>
            </a>

            {/* Location */}
            <div className="w-full bg-slate-800/40 border border-slate-700/50 rounded-xl p-5 flex items-center gap-4">
              <div className="w-10 h-10 rounded-lg bg-slate-700/60 flex items-center justify-center text-teal-400 flex-shrink-0">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div>
                <p className="text-xs text-slate-500 mb-0.5" style={{ fontFamily: "var(--font-mono)" }}>Location</p>
                <span className="text-slate-300 text-sm">Thu Duc District, Ho Chi Minh City</span>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-20 pt-8 border-t border-slate-800 flex flex-col md:flex-row items-center justify-between gap-4">
          <span className="text-slate-600 text-xs" style={{ fontFamily: "var(--font-mono)" }}>
            © 2025 Nguyen Binh Phuong Tram — Built with Next.js & TypeScript
          </span>
          <span className="text-slate-700 text-xs" style={{ fontFamily: "var(--font-mono)" }}>
            Ho Chi Minh City 🇻🇳
          </span>
        </div>
      </div>
    </section>
  );
}