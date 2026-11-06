import { useState } from "react";
import meAtBeach from "../../img/Me_at_Beach_200x200.webp";
import HackerBuddyBottom from "../../Components/HackerBuddyFolder/HackerBuddyBottom";
import "./OfficeOps.css";

export default function OfficeOpsPage() {
  const [copied, setCopied] = useState(false);
  const [terminalText, setTerminalText] = useState(
    "status: officeops pipeline active"
  );

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const cycleTerminal = () => {
    const quotes = [
      "status: officeops pipeline active",
      "M365 + Adobe CC workflows optimized",
      "excel formulas & indesign layouts locked",
      "zero bloat. production-ready docs.",
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

      {/* HEADER */}
      <header className="sticky top-0 z-50 w-full border-b border-slate-800 bg-slate-950/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-2">
            <span className="h-2.5 w-2.5 animate-ping rounded-full bg-cyan-400" />
            <span className="font-mono text-xs font-bold uppercase tracking-wider text-cyan-300">
              OfficeOps • M365 &amp; Adobe CC Support
            </span>
          </div>
          <a
            href="#rates"
            className="rounded-xl border border-cyan-500/35 bg-cyan-950/50 px-5 py-2 font-mono text-xs font-bold uppercase tracking-wider text-cyan-200 backdrop-blur-md transition-all hover:bg-cyan-900/60 hover:text-white"
          >
            Pricing
          </a>
        </div>
      </header>

      {/* MAIN CONTENT */}
      <main className="relative z-20 mx-auto max-w-6xl space-y-20 px-6 py-12 md:py-20">
        
        {/* HERO SECTION */}
        <header className="grid grid-cols-1 items-center gap-10 md:grid-cols-12">
          <div className="space-y-6 text-center md:col-span-8 md:text-left">
            <div className="glow-border inline-flex items-center gap-2 rounded-full border border-cyan-500/35 bg-cyan-950/50 px-3.5 py-1.5 font-mono text-xs font-bold uppercase tracking-widest text-cyan-300 backdrop-blur-md">
              Hybrid Webcraft • Office Execution
            </div>

            <h1 className="text-4xl font-extrabold leading-tight tracking-tight text-white sm:text-6xl">
              Seasoned coder. <br />
              <span className="bg-gradient-to-r from-amber-400 via-cyan-300 to-violet-400 bg-clip-text text-transparent">
                Professional office support when you need it.
              </span>
            </h1>

            <p className="max-w-2xl text-lg font-normal leading-relaxed text-slate-200 md:text-xl">
              On-demand office help leveraging Microsoft 365 and Adobe Creative
              Cloud. Whether you need documents cleaned up, spreadsheets fixed,
              graphics created, or presentations rebuilt, I handle the work
              quickly, accurately, and professionally — without the cost of a
              full-time hire.
            </p>

            {/* Action Row */}
            <div className="flex flex-wrap items-center justify-center gap-4 pt-4 md:justify-start">
              <a
                href="#rates"
                className="rounded-xl bg-gradient-to-r from-cyan-400 to-teal-300 px-8 py-3.5 font-semibold text-slate-950 shadow-[0_0_25px_rgba(34,211,238,0.4)] transition-all duration-300 hover:-translate-y-0.5 hover:from-cyan-300 hover:to-teal-200 hover:shadow-[0_0_35px_rgba(34,211,238,0.6)]"
              >
                Explore Services &amp; Rates
              </a>

              <button
                onClick={handleCopyLink}
                className="rounded-xl border border-slate-600 bg-slate-900/90 px-6 py-3.5 font-mono text-xs font-bold uppercase tracking-wider text-slate-200 backdrop-blur-md transition-all duration-200 hover:bg-slate-800 hover:text-white"
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
                <div className="w-full truncate rounded-xl border border-slate-700 bg-slate-950 px-3 py-1.5 text-center font-mono text-xs font-semibold text-cyan-300">
                  ⚡ {terminalText}
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* TALENTS SECTION */}
        <section className="space-y-8 border-t border-slate-800/80 pt-12">
          <div className="border-l-2 border-amber-400 pl-4">
            <h2 className="text-2xl font-bold tracking-wide text-white md:text-3xl">
              OfficeOps Capabilities
            </h2>
            <p className="font-mono text-sm font-semibold text-slate-300">
              Practical, production-ready support using Microsoft 365 and Adobe Creative Cloud
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {/* MICROSOFT 365 TALENTS */}
            <div className="glass-card space-y-4 rounded-2xl border border-slate-800 bg-slate-900/40 p-6">
              <div className="font-mono text-xs font-bold uppercase tracking-wider text-cyan-300">
                Productivity &amp; Data
              </div>
              <h3 className="text-xl font-bold text-slate-100">
                Microsoft 365 — What I Do
              </h3>
              <ul className="space-y-2 text-sm font-normal text-slate-200">
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 font-bold text-cyan-400">✓</span>
                  <span>Clean up messy Word documents and rebuild them professionally</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 font-bold text-cyan-400">✓</span>
                  <span>Fix headers, footers, spacing, margins, and TOCs</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 font-bold text-cyan-400">✓</span>
                  <span>Create branded templates for proposals, reports, and contracts</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 font-bold text-cyan-400">✓</span>
                  <span>Repair broken Excel formulas and rebuild workbook logic</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 font-bold text-cyan-400">✓</span>
                  <span>Create dashboards, trackers, and calculators</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 font-bold text-cyan-400">✓</span>
                  <span>Rebuild outdated PowerPoint decks into clean, modern slides</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 font-bold text-cyan-400">✓</span>
                  <span>Organize Outlook inboxes, folders, rules, signatures, and SharePoint/OneDrive drives</span>
                </li>
              </ul>
            </div>

            {/* ADOBE TALENTS */}
            <div className="glass-card space-y-4 rounded-2xl border border-slate-800 bg-slate-900/40 p-6">
              <div className="font-mono text-xs font-bold uppercase tracking-wider text-amber-300">
                Creative &amp; Layout
              </div>
              <h3 className="text-xl font-bold text-slate-100">
                Adobe Creative Cloud — What I Do
              </h3>
              <ul className="space-y-2 text-sm font-normal text-slate-200">
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 font-bold text-amber-400">✓</span>
                  <span>Resize, optimize, and clean up images in Photoshop</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 font-bold text-amber-400">✓</span>
                  <span>Remove backgrounds and fix lighting/color issues</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 font-bold text-amber-400">✓</span>
                  <span>Create social graphics, banners, and thumbnails</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 font-bold text-amber-400">✓</span>
                  <span>Clean up Illustrator vector files and rebuild logos</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 font-bold text-amber-400">✓</span>
                  <span>Build brochures, flyers, and one-pagers in InDesign</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 font-bold text-amber-400">✓</span>
                  <span>Prepare print-ready PDFs with bleeds, crop marks, and compression</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 font-bold text-amber-400">✓</span>
                  <span>Perform Premiere Pro video edits and add titles/captions</span>
                </li>
              </ul>
            </div>

            {/* WORKFLOW TALENTS */}
            <div className="glass-card glow-border space-y-4 rounded-2xl border border-cyan-500/40 bg-slate-900/70 p-6 md:col-span-2">
              <div className="font-mono text-xs font-bold uppercase tracking-wider text-cyan-300">
                System Integration
              </div>
              <h3 className="text-xl font-bold text-white">
                Workflow, Integration &amp; Problem Solving
              </h3>
              <div className="grid gap-4 md:grid-cols-2">
                <ul className="space-y-2 text-sm font-normal text-slate-200">
                  <li className="flex items-start gap-2">
                    <span className="mt-0.5 font-bold text-cyan-400">✓</span>
                    <span>Build smooth pipelines between Adobe CC and Microsoft 365</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-0.5 font-bold text-cyan-400">✓</span>
                    <span>Create shared asset libraries and template systems</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-0.5 font-bold text-cyan-400">✓</span>
                    <span>Standardize branding across documents, slides, and graphics</span>
                  </li>
                </ul>
                <ul className="space-y-2 text-sm font-normal text-slate-200">
                  <li className="flex items-start gap-2">
                    <span className="mt-0.5 font-bold text-cyan-400">✓</span>
                    <span>Fix corrupted files, broken documents, and sync issues</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-0.5 font-bold text-cyan-400">✓</span>
                    <span>Rebuild assets when originals are missing or unusable</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-0.5 font-bold text-cyan-400">✓</span>
                    <span>Fast, accurate turnaround with minimal instructions needed</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* MICROSOFT 365 SECTION */}
        <section className="space-y-8 border-t border-slate-800/80 pt-12">
          <div className="border-l-2 border-cyan-400 pl-4">
            <h2 className="text-2xl font-bold tracking-wide text-white md:text-3xl">
              Microsoft 365 Breakdown
            </h2>
            <p className="font-mono text-sm font-semibold text-slate-300">
              Fast, reliable help across Word, Excel, PowerPoint, Outlook, SharePoint, and OneDrive
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {/* Word */}
            <div className="glass-card space-y-3 rounded-2xl border border-slate-800 bg-slate-900/40 p-6">
              <h3 className="text-lg font-bold text-slate-100">
                Word — Documents
              </h3>
              <ul className="space-y-2 text-xs font-normal text-slate-200 md:text-sm">
                <li className="flex items-center gap-2">
                  <span className="font-bold text-cyan-400">▸</span>
                  <span>Clean up messy documents</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="font-bold text-cyan-400">▸</span>
                  <span>Create branded templates</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="font-bold text-cyan-400">▸</span>
                  <span>Fix headers, footers, spacing, TOCs</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="font-bold text-cyan-400">▸</span>
                  <span>Convert documents to clean PDF</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="font-bold text-cyan-400">▸</span>
                  <span>Build forms, contracts, reports</span>
                </li>
              </ul>
            </div>

            {/* Excel */}
            <div className="glass-card space-y-3 rounded-2xl border border-slate-800 bg-slate-900/40 p-6">
              <h3 className="text-lg font-bold text-slate-100">
                Excel — Spreadsheets
              </h3>
              <ul className="space-y-2 text-xs font-normal text-slate-200 md:text-sm">
                <li className="flex items-center gap-2">
                  <span className="font-bold text-cyan-400">▸</span>
                  <span>Fix broken formulas</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="font-bold text-cyan-400">▸</span>
                  <span>Build calculators &amp; trackers</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="font-bold text-cyan-400">▸</span>
                  <span>Create dashboards &amp; charts</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="font-bold text-cyan-400">▸</span>
                  <span>Clean up data &amp; formatting</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="font-bold text-cyan-400">▸</span>
                  <span>Organize multi-sheet workbooks</span>
                </li>
              </ul>
            </div>

            {/* PowerPoint */}
            <div className="glass-card space-y-3 rounded-2xl border border-slate-800 bg-slate-900/40 p-6">
              <h3 className="text-lg font-bold text-slate-100">
                PowerPoint — Slides
              </h3>
              <ul className="space-y-2 text-xs font-normal text-slate-200 md:text-sm">
                <li className="flex items-center gap-2">
                  <span className="font-bold text-cyan-400">▸</span>
                  <span>Rebuild outdated slide decks</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="font-bold text-cyan-400">▸</span>
                  <span>Create branded templates</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="font-bold text-cyan-400">▸</span>
                  <span>Add charts, graphics, animations</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="font-bold text-cyan-400">▸</span>
                  <span>Fix layout &amp; alignment</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="font-bold text-cyan-400">▸</span>
                  <span>Export to PDF or video</span>
                </li>
              </ul>
            </div>

            {/* Outlook / SharePoint */}
            <div className="glass-card space-y-3 rounded-2xl border border-slate-800 bg-slate-900/40 p-6">
              <h3 className="text-lg font-bold text-slate-100">
                Outlook, SharePoint &amp; OneDrive
              </h3>
              <ul className="space-y-2 text-xs font-normal text-slate-200 md:text-sm">
                <li className="flex items-center gap-2">
                  <span className="font-bold text-cyan-400">▸</span>
                  <span>Organize inboxes &amp; folders</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="font-bold text-cyan-400">▸</span>
                  <span>Set up shared drives</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="font-bold text-cyan-400">▸</span>
                  <span>Fix sync issues</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="font-bold text-cyan-400">▸</span>
                  <span>Create shared templates</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="font-bold text-cyan-400">▸</span>
                  <span>Improve team workflows</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* ADOBE SECTION */}
        <section className="space-y-8 border-t border-slate-800/80 pt-12">
          <div className="border-l-2 border-amber-400 pl-4">
            <h2 className="text-2xl font-bold tracking-wide text-white md:text-3xl">
              Adobe Creative Cloud Breakdown
            </h2>
            <p className="font-mono text-sm font-semibold text-slate-300">
              Clean, professional graphics and document support across the Creative Suite
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {/* Photoshop */}
            <div className="glass-card space-y-3 rounded-2xl border border-slate-800 bg-slate-900/40 p-6">
              <h3 className="text-lg font-bold text-slate-100">
                Photoshop — Graphics
              </h3>
              <ul className="space-y-2 text-xs font-normal text-slate-200 md:text-sm">
                <li className="flex items-center gap-2">
                  <span className="font-bold text-amber-400">▸</span>
                  <span>Resize and optimize images</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="font-bold text-amber-400">▸</span>
                  <span>Remove backgrounds</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="font-bold text-amber-400">▸</span>
                  <span>Create social graphics &amp; banners</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="font-bold text-amber-400">▸</span>
                  <span>Fix lighting &amp; color</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="font-bold text-amber-400">▸</span>
                  <span>Prep images for print/web</span>
                </li>
              </ul>
            </div>

            {/* Illustrator */}
            <div className="glass-card space-y-3 rounded-2xl border border-slate-800 bg-slate-900/40 p-6">
              <h3 className="text-lg font-bold text-slate-100">
                Illustrator — Vector
              </h3>
              <ul className="space-y-2 text-xs font-normal text-slate-200 md:text-sm">
                <li className="flex items-center gap-2">
                  <span className="font-bold text-amber-400">▸</span>
                  <span>Clean up vector files</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="font-bold text-amber-400">▸</span>
                  <span>Rebuild logos</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="font-bold text-amber-400">▸</span>
                  <span>Create icons &amp; simple graphics</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="font-bold text-amber-400">▸</span>
                  <span>Convert artwork to vector</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="font-bold text-amber-400">▸</span>
                  <span>Prep files for print</span>
                </li>
              </ul>
            </div>

            {/* InDesign */}
            <div className="glass-card space-y-3 rounded-2xl border border-slate-800 bg-slate-900/40 p-6">
              <h3 className="text-lg font-bold text-slate-100">
                InDesign — Layout
              </h3>
              <ul className="space-y-2 text-xs font-normal text-slate-200 md:text-sm">
                <li className="flex items-center gap-2">
                  <span className="font-bold text-amber-400">▸</span>
                  <span>Build brochures &amp; one-pagers</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="font-bold text-amber-400">▸</span>
                  <span>Create branded templates</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="font-bold text-amber-400">▸</span>
                  <span>Fix layout &amp; typography</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="font-bold text-amber-400">▸</span>
                  <span>Prepare print-ready PDFs</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="font-bold text-amber-400">▸</span>
                  <span>Convert Word docs to clean layouts</span>
                </li>
              </ul>
            </div>

            {/* Premiere / Acrobat */}
            <div className="glass-card space-y-3 rounded-2xl border border-slate-800 bg-slate-900/40 p-6">
              <h3 className="text-lg font-bold text-slate-100">
                Video Editing and Creation
              </h3>
              <ul className="space-y-2 text-xs font-normal text-slate-200 md:text-sm">
                <li className="flex items-center gap-2">
                  <span className="font-bold text-amber-400">▸</span>
                  <span>Advanced Video Editing</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="font-bold text-amber-400">▸</span>
                  <span>After Effects VFX</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="font-bold text-amber-400">▸</span>
                  <span>Audio Remix</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="font-bold text-amber-400">▸</span>
                  <span>Cinematic Color Grading</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="font-bold text-amber-400">▸</span>
                  <span>Compress videos for web &amp; social</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* FRIENDLY PRICING SECTION */}
        <section id="rates" className="space-y-6 border-t border-slate-800/80 pt-12 text-center">
          <a href="https://about.us.mybabb.com/pricepackages"
             className="group border-l-2 border-cyan-400 pl-4 text-left inline-block">
            <h2 className="text-2xl font-bold tracking-wide text-white md:text-3xl group-hover:text-cyan-300 transition-colors">
              General Price Guidelines
            </h2>
            <p className="font-mono text-sm font-semibold text-slate-300">
                Flexible Custom Rates for Cool Custom Things
            </p>
          </a>

          <div className="flex flex-col items-center justify-center pt-4 space-y-2">
            <a href="https://contact.mybabb.com" className="flex items-center gap-3">
              <span className="inline-block animate-[pulse_5s_ease-in-out_infinite] text-xl font-bold text-cyan-400">
                👉
              </span>
              <div className="rounded-xl border border-cyan-500/40 bg-cyan-950/60 px-6 py-3 font-mono text-sm font-bold text-cyan-200 shadow-[0_0_20px_rgba(34,211,238,0.2)] backdrop-blur-md transition-all duration-300 hover:scale-105 hover:bg-cyan-900 hover:text-white">
                💲 Friendly Price Negotiations
              </div>
              <span className="inline-block animate-[pulse_5s_ease-in-out_infinite] text-xl font-bold text-cyan-400">
                👈
              </span>
            </a>
          </div>
        </section>

        {/* HACKER BUDDY BOTTOM */}
        <HackerBuddyBottom />
      </main>
    </div>
  );
}