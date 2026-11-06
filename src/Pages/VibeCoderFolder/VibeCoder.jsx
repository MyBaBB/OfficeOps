import React, { useState } from "react";
import meAtBeach from "../../img/Me_at_Beach_200x200.webp";
import "./VibeCoder.css";

const VibeCoder = () => {
  const [copied, setCopied] = useState(false);
  const [terminalText, setTerminalText] = useState(
    "git commit -m 'AI whipped into shape'",
  );

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const cycleTerminal = () => {
    const quotes = [
      "git commit -m 'AI whipped into shape'",
      "npm run build --lightning-fast",
      "status: veteran dev driving the machine",
      "zero bloat. pure handmade architecture.",
    ];
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    setTerminalText(randomQuote);
  };

  return (
    <div className="vibe-container relative min-h-screen overflow-hidden bg-slate-950 font-sans text-slate-100 selection:bg-cyan-500 selection:text-slate-950">
      {/* Dynamic Background FX */}
      <div className="scanline-overlay pointer-events-none absolute inset-0 z-10 opacity-30" />
      <div className="glow-orb pointer-events-none absolute -left-40 -top-40 h-96 w-96 rounded-full bg-cyan-600/20 blur-3xl" />
      <div className="glow-orb pointer-events-none absolute -right-40 top-1/2 h-96 w-96 rounded-full bg-amber-500/15 blur-3xl" />

      <main className="relative z-20 mx-auto max-w-5xl space-y-20 px-6 py-16 md:py-24">
        {/* Top Header / Profile Badge + Image */}
        <header className="grid grid-cols-1 items-center gap-10 md:grid-cols-12">
          <div className="space-y-6 text-center md:col-span-8 md:text-left">
            <div className="glow-border inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-950/40 px-3.5 py-1.5 font-mono text-xs uppercase tracking-widest text-cyan-400 backdrop-blur-md">
              <span className="h-2 w-2 animate-ping rounded-full bg-cyan-400" />
              Hybrid Webcraft • Veteran Control
            </div>

            <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight leading-tight text-white">
  Seasoned coder. <br />
  <span className="bg-gradient-to-r from-amber-400 via-cyan-300 to-violet-400 bg-clip-text text-transparent">
    AI speed, custom craft.
  </span>
</h1>

            <p className="max-w-2xl text-lg font-light leading-relaxed text-slate-300 md:text-xl">
              Anyone can prompt an LLM to spit out syntax. But it takes a
              battle-tested veteran who knows architecture, performance, and
              custom UI engineering to{" "}
              <strong className="font-semibold text-amber-300">
                command the machine
              </strong>
              . Zero spaghetti code. Zero bloat. Just elite hybrid execution.
            </p>

            {/* Action Row */}
            <div className="flex flex-wrap items-center justify-center gap-4 pt-4 md:justify-start">
              <a
                href="#contact"
                className="rounded-xl bg-gradient-to-r from-cyan-400 to-teal-300 px-8 py-3.5 font-medium text-slate-950 shadow-[0_0_25px_rgba(34,211,238,0.4)] transition-all duration-300 hover:-translate-y-0.5 hover:from-cyan-300 hover:to-teal-200 hover:shadow-[0_0_35px_rgba(34,211,238,0.6)]"
              >
                Hire the Pro
              </a>

              <button
                onClick={handleCopyLink}
                className="rounded-xl border border-slate-700 bg-slate-900/80 px-6 py-3.5 font-mono text-xs uppercase tracking-wider text-slate-300 backdrop-blur-md transition-all duration-200 hover:bg-slate-800 hover:text-white"
              >
                {copied ? "Link Copied! ✓" : "Copy Profile Link 🔗"}
              </button>
            </div>
          </div>

          {/* Profile Picture Card */}
          <div className="flex justify-center md:col-span-4">
            <div
              className="group relative cursor-pointer"
              onClick={cycleTerminal}
              title="Click to cycle status!"
            >
              <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-cyan-500 to-amber-400 opacity-75 blur-lg transition duration-500 group-hover:scale-105 group-hover:opacity-100" />
              <div className="relative flex flex-col items-center space-y-3 rounded-3xl border border-slate-700/80 bg-slate-900 p-3 shadow-2xl backdrop-blur-xl">
                <img
                  src={meAtBeach}
                  alt="Brett at the beach"
                  className="contrast-105 h-48 w-48 rounded-2xl border border-slate-800 object-cover filter"
                />
                <div className="w-full truncate rounded-xl border border-slate-800 bg-slate-950/80 px-3 py-1.5 text-center font-mono text-[11px] text-cyan-400">
                  ⚡ {terminalText}
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* Matrix Comparison Section */}
        <section className="space-y-8">
          <div className="border-l-2 border-amber-400 pl-4">
            <h2 className="text-2xl font-bold tracking-wide text-white">
              The Veteran Difference
            </h2>
            <p className="font-mono text-sm text-slate-400">
              Why raw AI prompting fails, and Hybrid Webcraft wins
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {/* Pure Vibe Card */}
            <div className="glass-card space-y-4 rounded-2xl border border-slate-800 bg-slate-900/40 p-6">
              <div className="font-mono text-xs uppercase tracking-wider text-rose-400">
                Blind Prompting
              </div>
              <h3 className="text-lg font-bold text-slate-200">
                The "Vibe Coder" Trap
              </h3>
              <p className="text-sm font-light text-slate-400">
                Relying 100% on LLMs creates hidden security flaws, recursive
                bug loops, and fragile codebases nobody can maintain.
              </p>
            </div>

            {/* Traditional Agency */}
            <div className="glass-card space-y-4 rounded-2xl border border-slate-800 bg-slate-900/40 p-6">
              <div className="font-mono text-xs uppercase tracking-wider text-amber-400">
                Legacy Agencies
              </div>
              <h3 className="text-lg font-bold text-slate-200">
                The Slow Lane
              </h3>
              <p className="text-sm font-light text-slate-400">
                Wasting weeks manually writing routine boilerplate from scratch
                while charging exorbitant billable hours for basic tasks.
              </p>
            </div>

            {/* Hybrid Webcraft (Hero Card) */}
            <div className="glass-card glow-border relative space-y-4 overflow-hidden rounded-2xl border border-cyan-500/50 bg-slate-900/90 p-6 shadow-[0_0_30px_rgba(6,182,212,0.15)]">
              <div className="absolute right-0 top-0 rounded-bl-lg bg-cyan-400 px-3 py-1 font-mono text-[10px] font-bold uppercase tracking-wider text-slate-950">
                The Master Workflow
              </div>
              <div className="font-mono text-xs uppercase tracking-wider text-cyan-400">
                Hybrid Webcraft
              </div>
              <h3 className="text-lg font-bold text-white">
                Veteran + AI Synergy
              </h3>
              <p className="text-sm font-light text-slate-200">
                Custom Vite architecture and hand-tuned CSS paired with targeted
                AI component speed. Maximum horsepower, strict human oversight.
              </p>
            </div>
          </div>
        </section>

        {/* Footer / Contact Terminal */}
        <footer
          id="contact"
          className="space-y-6 rounded-3xl border border-slate-800 bg-slate-900/60 p-8 text-center backdrop-blur-xl md:p-12"
        >
          <h2 className="text-3xl font-extrabold text-white">
            Ready to Put AI to Work the Right Way?
          </h2>
          <p className="mx-auto max-w-xl text-sm text-slate-400">
            Skip the amateur prompt headaches and the bloated agency timelines.
            Get custom web architecture built by an experienced hand.
          </p>
          <div className="pt-2">
            <a
              href="https://contact.mybabb.com"
              className="inline-block rounded-xl bg-gradient-to-r from-amber-400 to-cyan-400 px-10 py-4 font-mono text-sm font-semibold text-slate-950 shadow-[0_0_30px_rgba(251,191,36,0.3)] transition-all duration-300 hover:scale-105 hover:from-amber-300 hover:to-cyan-300"
            >
              Initiate Contact &rarr;
            </a>
          </div>
        </footer>
      </main>
    </div>
  );
};

export default VibeCoder;
