import React, { useState } from "react";
import meAtBeach from "../../img/Me_at_Beach_200x200.webp";
import Restore1 from "../../img/Restore1-600x400.webp";
import Restore2 from "../../img/Restore2-600x400.webp";
import Restore3 from "../../img/Restore3-600x400.webp";
import Restore4 from "../../img/Restore4-600x400.webp";
import Restore5 from "../../img/Restore5-600x400.webp";
import Restor1un from "../../img/Restore1-un-600x400.webp";
import Restor2un from "../../img/Restore2-un-600x400.webp";
import Restor3un from "../../img/Restore3-un-600x400.webp";
import Restor4un from "../../img/Restore4-un-600x400.webp";
import Restor5un from "../../img/Restore5-un-600x400.webp";

import HackerBuddyBottom from "../../Components/HackerBuddyFolder/HackerBuddyBottom";

// Placeholder before/after images
const before1 = Restor1un;
const after1 = Restore1;

const before2 = Restor2un;
const after2 = Restore2;

const before3 = Restor3un;
const after3 = Restore3;

const before4 = Restor4un;
const after4 = Restore4;

const before5 = Restor5un;
const after5 = Restore5;

export default function ImageOps() {
  const [copied, setCopied] = useState(false);
  const [terminalText, setTerminalText] = useState(
    "status: image restoration pipeline online"
  );

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const cycleTerminal = () => {
    const quotes = [
      "status: image restoration pipeline online",
      "Adobe CC + AI workflow: active",
      "scratch removal & color grading: pristine",
      "print-ready resolution: locked",
    ];
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    setTerminalText(randomQuote);
  };

  return (
    <div className="vibe-container relative min-h-screen overflow-hidden bg-slate-950 font-sans text-slate-200 selection:bg-cyan-500 selection:text-slate-950">
      {/* Dynamic Background FX */}
      <div className="scanline-overlay pointer-events-none absolute inset-0 z-10 opacity-30" />
      <div className="glow-orb pointer-events-none absolute -left-40 -top-40 h-96 w-96 rounded-full bg-cyan-600/20 blur-3xl" />
      <div className="glow-orb pointer-events-none absolute -right-40 top-1/2 h-96 w-96 rounded-full bg-amber-500/15 blur-3xl" />

      <main className="relative z-20 mx-auto max-w-6xl space-y-20 px-6 py-16 md:py-24">
        
        {/* HERO SECTION */}
        <header className="grid grid-cols-1 items-center gap-10 md:grid-cols-12">
          <div className="space-y-6 text-center md:col-span-8 md:text-left">
            <div className="glow-border inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-950/40 px-3.5 py-1.5 font-mono text-xs uppercase tracking-widest text-cyan-400 backdrop-blur-md">
              <span className="h-2 w-2 animate-ping rounded-full bg-cyan-400" />
              Hybrid Webcraft • Professional Restoration &amp; Editing
            </div>

            <h1 className="text-4xl font-extrabold tracking-tight leading-tight text-white sm:text-6xl">
              Seasoned coder. <br />
              <span className="bg-gradient-to-r from-amber-400 via-cyan-300 to-violet-400 bg-clip-text text-transparent">
                Image Restoration &amp; Editing — Done Right.
              </span>
            </h1>

            <p className="max-w-2xl text-lg font-light leading-relaxed text-slate-300 md:text-xl">
              Professional image repair, color correction, object removal, and
              creative alterations — powered by Adobe CC, veteran AI toolsets,
              and meticulous manual craftsmanship.
            </p>

            {/* Action Row */}
            <div className="flex flex-wrap items-center justify-center gap-4 pt-4 md:justify-start">
              <a
                href="#gallery"
                className="rounded-xl bg-gradient-to-r from-cyan-400 to-teal-300 px-8 py-3.5 font-medium text-slate-950 shadow-[0_0_25px_rgba(34,211,238,0.4)] transition-all duration-300 hover:-translate-y-0.5 hover:from-cyan-300 hover:to-teal-200 hover:shadow-[0_0_35px_rgba(34,211,238,0.6)]"
              >
                View Transformations
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
                  className="h-48 w-48 rounded-2xl border border-slate-800 object-cover filter contrast-105"
                />
                <div className="w-full truncate rounded-xl border border-slate-800 bg-slate-950/80 px-3 py-1.5 text-center font-mono text-[11px] text-cyan-400">
                  ⚡ {terminalText}
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* EXPERIENCE */}
        <section className="space-y-6 rounded-3xl border border-slate-800 bg-slate-900/50 p-8 backdrop-blur-md">
          <div className="text-center space-y-2">
            <h2 className="text-3xl font-bold text-white">
              Bring Your Photos Back to Life
            </h2>
            <p className="font-mono text-xs text-amber-400 uppercase tracking-widest">
              Adobe Master Suite &amp; Professional Workflows
            </p>
          </div>
          <p className="mx-auto max-w-4xl text-center leading-relaxed text-slate-300 font-light">
            Whether it&apos;s restoring old family photos, repairing physical damage,
            enhancing clarity, or creating artistic edits — I use Adobe
            Photoshop, Adobe Illustrator, and professional enhancement tools
            tailored to deliver clean, modern, high‑credibility results with
            properly sized and formatted files.
          </p>
          <div className="pt-2 flex justify-center">
            <HackerBuddyBottom />
          </div>
        </section>

        {/* BEFORE / AFTER GALLERY */}
        <section id="gallery" className="space-y-8">
          <div className="border-l-2 border-cyan-400 pl-4">
            <h2 className="text-3xl font-bold tracking-wide text-white">
              Before &amp; After: Real Image Transformations
            </h2>
            <p className="font-mono text-sm text-slate-400">
              From faded prints and physical damage to low‑quality scans and creative touch-ups.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
            {[
              { before: before1, after: after1 },
              { before: before2, after: after2 },
              { before: before3, after: after3 },
              { before: before4, after: after4 },
              { before: before5, after: after5 },
            ].map((pair, i) => (
              <div key={i} className="glass-card relative space-y-3 rounded-2xl border border-slate-800 bg-slate-900/40 p-4">
                <div className="absolute left-6 top-7 z-10 rounded-md border border-black/40 bg-rose-950/90 px-2 py-0.5 text-xs font-mono text-rose-200">
                  Before
                </div>
                <img
                  src={pair.before}
                  alt={`Before restoration ${i + 1}`}
                  className="h-40 w-full rounded-lg object-cover shadow-lg shadow-black/40"
                />

                <div className="absolute bottom-6 right-6 z-10 rounded-md border border-green-900/50 bg-emerald-950/90 px-2 py-0.5 text-xs font-mono text-emerald-300">
                  After
                </div>
                <img
                  src={pair.after}
                  alt={`After restoration ${i + 1}`}
                  className="h-40 w-full rounded-lg object-cover shadow-lg shadow-black/40"
                />
              </div>
            ))}
          </div>
        </section>

        {/* SERVICES */}
        <section className="space-y-8 border-t border-slate-800/80 pt-12">
          <div className="border-l-2 border-amber-400 pl-4">
            <h2 className="text-3xl font-bold tracking-wide text-white">
              Restoration &amp; Editing Capabilities
            </h2>
            <p className="font-mono text-sm text-slate-400">
              Specialized digital repair and enhancement solutions
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <div className="glass-card space-y-3 rounded-2xl border border-slate-800 bg-slate-900/50 p-6">
              <h3 className="text-xl font-bold text-cyan-400">
                Restoration
              </h3>
              <ul className="space-y-2 text-sm font-light text-slate-300">
                <li className="flex items-center gap-2"><span className="text-cyan-400">✓</span> Scratch &amp; physical damage repair</li>
                <li className="flex items-center gap-2"><span className="text-cyan-400">✓</span> Faded color restoration</li>
                <li className="flex items-center gap-2"><span className="text-cyan-400">✓</span> Grain &amp; noise reduction</li>
                <li className="flex items-center gap-2"><span className="text-cyan-400">✓</span> High-fidelity detail enhancement</li>
              </ul>
            </div>

            <div className="glass-card space-y-3 rounded-2xl border border-slate-800 bg-slate-900/50 p-6">
              <h3 className="text-xl font-bold text-amber-400">
                Editing &amp; Cleanup
              </h3>
              <ul className="space-y-2 text-sm font-light text-slate-300">
                <li className="flex items-center gap-2"><span className="text-amber-400">✓</span> Unwanted object removal</li>
                <li className="flex items-center gap-2"><span className="text-amber-400">✓</span> Background cleanup &amp; replacement</li>
                <li className="flex items-center gap-2"><span className="text-amber-400">✓</span> Professional lighting &amp; color correction</li>
                <li className="flex items-center gap-2"><span className="text-amber-400">✓</span> Natural portrait retouching</li>
              </ul>
            </div>

            <div className="glass-card space-y-3 rounded-2xl border border-slate-800 bg-slate-900/50 p-6">
              <h3 className="text-xl font-bold text-violet-400">
                Creative Alterations
              </h3>
              <ul className="space-y-2 text-sm font-light text-slate-300">
                <li className="flex items-center gap-2"><span className="text-violet-400">✓</span> Custom artistic edits</li>
                <li className="flex items-center gap-2"><span className="text-violet-400">✓</span> Cinematic color grading</li>
                <li className="flex items-center gap-2"><span className="text-violet-400">✓</span> Stylized visual effects</li>
                <li className="flex items-center gap-2"><span className="text-violet-400">✓</span> Seamless image composites</li>
              </ul>
            </div>

            <div className="glass-card space-y-3 rounded-2xl border border-slate-800 bg-slate-900/50 p-6">
              <h3 className="text-xl font-bold text-emerald-400">
                Full Project Support
              </h3>
              <ul className="space-y-2 text-sm font-light text-slate-300">
                <li className="flex items-center gap-2"><span className="text-emerald-400">✓</span> Efficient batch editing</li>
                <li className="flex items-center gap-2"><span className="text-emerald-400">✓</span> Family photo album restoration</li>
                <li className="flex items-center gap-2"><span className="text-emerald-400">✓</span> Print‑ready resolution formatting</li>
                <li className="flex items-center gap-2"><span className="text-emerald-400">✓</span> Custom workflow requests</li>
              </ul>
            </div>
          </div>
        </section>

        {/* CTA FOOTER */}
        <section className="rounded-3xl border border-cyan-500/30 bg-slate-900/60 p-8 backdrop-blur-xl md:p-12">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div className="space-y-3">
              <h3 className="text-2xl font-extrabold text-white">
                Ready to restore or enhance your images?
              </h3>
              <p className="text-slate-300 font-light">
                Send me your files and I’ll give you an estimated turnaround time before I start.
              </p>
            </div>

            <div>
              <a
                href="https://contact.mybabb.com/image_restore"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block"
              >
                <button className="rounded-xl bg-gradient-to-r from-cyan-400 to-amber-400 px-8 py-4 font-mono text-sm font-semibold text-slate-950 shadow-[0_0_30px_rgba(34,211,238,0.3)] transition-all duration-300 hover:scale-105 hover:from-cyan-300 hover:to-amber-300">
                  Start My Image Upgrade &rarr;
                </button>
              </a>
            </div>
          </div>
        </section>

      </main>
    </div>
  );
}