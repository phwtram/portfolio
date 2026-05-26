"use client";

import { useState, useEffect } from "react";

const ROLES = ["Software Developer", "Frontend Developer", "QA Engineer"];

function TypingText() {
  const [text, setText] = useState("");
  const [idx, setIdx] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = ROLES[idx];
    const speed = deleting ? 35 : 75;

    const t = setTimeout(() => {
      if (!deleting) {
        if (text.length < current.length) {
          setText(current.slice(0, text.length + 1));
        } else {
          setTimeout(() => setDeleting(true), 2200);
        }
      } else {
        if (text.length > 0) {
          setText(text.slice(0, -1));
        } else {
          setDeleting(false);
          setIdx((p) => (p + 1) % ROLES.length);
        }
      }
    }, speed);

    return () => clearTimeout(t);
  }, [text, deleting, idx]);

  return (
    <span>
      {text}
      <span
        className="cursor-blink ml-0.5 inline-block w-[2px] h-5 bg-teal-400 align-middle"
        aria-hidden
      />
    </span>
  );
}

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen bg-[#0C1220] flex items-center overflow-hidden"
    >
      {/* Background grid */}
      <div className="absolute inset-0 dark-grid opacity-100" />
      {/* Radial fade */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0C1220] via-[#0C1220]/80 to-[#0D1F30]" />
      {/* Teal glow */}
      <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-teal-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 py-24 grid lg:grid-cols-2 gap-16 items-center w-full">
        {/* ── Left: Content ── */}
        <div>
          <p
            className="text-teal-400 text-xs tracking-[0.18em] uppercase mb-6 section-badge"
            style={{ animation: "fadeInUp 0.5s ease both" }}
          >
            ✦ Portfolio — Ho Chi Minh City 🇻🇳
          </p>

          <h1
            className="text-5xl lg:text-[3.6rem] xl:text-[4rem] font-bold text-white leading-[1.08] mb-5"
            style={{
              fontFamily: "var(--font-display)",
              animation: "fadeInUp 0.6s 0.08s ease both",
            }}
          >
            Nguyen Binh
            <br />
            <span className="text-teal-400 italic">Phuong Tram</span>
          </h1>

          <p
            className="text-xl text-slate-300 h-8 mb-5"
            style={{
              fontFamily: "var(--font-sans)",
              animation: "fadeInUp 0.6s 0.16s ease both",
            }}
          >
            <TypingText />
          </p>

          <p
            className="text-slate-400 text-base leading-relaxed max-w-md mb-10"
            style={{ animation: "fadeInUp 0.6s 0.24s ease both" }}
          >
            Software Engineering graduate from FPT University. I bridge
            technical execution and strategic thinking — building products that
            create real business impact in Vietnam.
          </p>

          <div
            className="flex flex-wrap gap-3 mb-10"
            style={{ animation: "fadeInUp 0.6s 0.32s ease both" }}
          >
            <a
              href="#projects"
              className="px-6 py-3 bg-teal-600 hover:bg-teal-500 text-white font-semibold rounded-lg transition-all duration-200 hover:-translate-y-0.5 text-sm"
            >
              View Projects
            </a>
            <a
              href="\CV - NGUYEN BINH PHUONG TRAM.pdf"
              download
              className="px-6 py-3 border border-slate-600 hover:border-teal-500 text-slate-300 hover:text-white font-semibold rounded-lg transition-all duration-200 hover:-translate-y-0.5 text-sm"
            >
              Download CV
            </a>
          </div>

          <div
            className="flex items-center gap-6 pt-6 border-t border-slate-700/50"
            style={{ animation: "fadeInUp 0.6s 0.4s ease both" }}
          >
            <a
              href="https://github.com/phwtram"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-500 hover:text-teal-400 transition-colors text-sm font-mono"
            >
              github/phwtram ↗
            </a>
            <a
              href="mailto:tramnguyen20803@gmail.com"
              className="text-slate-500 hover:text-teal-400 transition-colors text-sm font-mono"
            >
              Email ↗
            </a>
          </div>
        </div>

        {/* ── Right: Code Window ── */}
        <div
          className="hidden lg:block"
          style={{ animation: "fadeInUp 0.7s 0.2s ease both" }}
        >
          <div className="code-window float">
            <div className="titlebar">
              <span className="code-dot bg-[#FF5F57]" />
              <span className="code-dot bg-[#FEBC2E]" />
              <span className="code-dot bg-[#28C840]" />
              <span className="ml-4 text-slate-500 text-xs" style={{ fontFamily: "var(--font-mono)" }}>
                profile.ts
              </span>
            </div>
            <div
              className="p-6 text-sm leading-[1.9]"
              style={{ fontFamily: "var(--font-mono)" }}
            >
              <div>
                <span className="c-keyword">interface</span>{" "}
                <span className="c-var">Profile</span>{" "}
                <span className="c-bracket">{"{"}</span>
              </div>
              <div className="pl-5">
                <span className="c-var">name</span>
                <span className="text-slate-400">: </span>
                <span className="c-keyword">string</span>
                <span className="text-slate-500">;</span>
              </div>
              <div className="pl-5">
                <span className="c-var">roles</span>
                <span className="text-slate-400">: </span>
                <span className="c-keyword">string</span>
                <span className="text-slate-400">[]</span>
                <span className="text-slate-500">;</span>
              </div>
              <div className="pl-5">
                <span className="c-var">goal</span>
                <span className="text-slate-400">: </span>
                <span className="c-keyword">string</span>
                <span className="text-slate-500">;</span>
              </div>
              <div>
                <span className="c-bracket">{"}"}</span>
              </div>

              <div className="mt-3">
                <span className="c-keyword">const</span>{" "}
                <span className="c-var">tram</span>
                <span className="text-slate-400">: </span>
                <span className="c-var">Profile</span>
                <span className="text-slate-400"> = </span>
                <span className="c-bracket">{"{"}</span>
              </div>
              <div className="pl-5">
                <span className="c-var">name</span>
                <span className="text-slate-400">: </span>
                <span className="c-string">&quot;Nguyen Binh Phuong Tram&quot;</span>
                <span className="text-slate-500">,</span>
              </div>
              <div className="pl-5">
                <span className="c-var">roles</span>
                <span className="text-slate-400">: </span>
                <span className="c-bracket">[</span>
              </div>
              <div className="pl-10">
                <span className="c-string">&quot;Software Developer&quot;</span>
                <span className="text-slate-500">,</span>
              </div>
              <div className="pl-10">
                <span className="c-string">&quot;Frontend Developer&quot;</span>
                <span className="text-slate-500">,</span>
              </div>
              <div className="pl-10">
                <span className="c-string">&quot;QA Engineer&quot;</span>
                <span className="text-slate-500">,</span>
              </div>
              <div className="pl-5">
                <span className="c-bracket">]</span>
                <span className="text-slate-500">,</span>
              </div>
              <div className="pl-5">
                <span className="c-var">goal</span>
                <span className="text-slate-400">: </span>
                <span className="c-string">&quot;Keep building, keep learning&quot;</span>
                <span className="text-slate-500">,</span>
              </div>
              <div>
                <span className="c-bracket">{"}"}</span>
                <span className="text-slate-500">;</span>
              </div>

              <div className="mt-3 c-comment">
                {"// B.S. Software Engineering · FPT University"}
              </div>
              <div className="c-comment">
                {"// Currently exploring new opportunities"}
              </div>
            </div>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mt-4">
            {["Frontend Dev", "QA Engineering", "TypeScript", "React"].map((t) => (
              <span
                key={t}
                className="text-xs px-3 py-1 rounded-full bg-slate-800/60 border border-slate-700/50 text-slate-400"
                style={{ fontFamily: "var(--font-mono)" }}
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll hint */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <span className="text-slate-600 text-xs" style={{ fontFamily: "var(--font-mono)" }}>
          scroll
        </span>
        <div className="w-px h-8 bg-gradient-to-b from-teal-500/60 to-transparent" />
      </div>
    </section>
  );
}