import React, { useState } from "react";
import meAtBeach from "../../img/Me_at_Beach_200x200.webp";
import NegotiablePricing from "../../Components/PricingFolder/Negotiable";
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
            <span className="font-mono text-xs font-semibold uppercase tracking-wider text-cyan-400">
              OfficeOps • M365 &amp; Adobe CC Support
            </span>
          </div>
          <a
            href="#rates"
            className="rounded-xl border border-cyan-500/30 bg-cyan-950/40 px-5 py-2 font-mono text-xs font-semibold uppercase tracking-wider text-cyan-300 backdrop-blur-md transition-all hover:bg-cyan-900/50 hover:text-white"
          >
            Hourly Rates
          </a>
        </div>
      </header>

      {/* MAIN CONTENT */}
      <main className="relative z-20 mx-auto max-w-6xl space-y-20 px-6 py-12 md:py-20">
        
        {/* HERO SECTION */}
        <header className="grid grid-cols-1 items-center gap-10 md:grid-cols-12">
          <div className="space-y-6 text-center md:col-span-8 md:text-left">
            <div className="glow-border inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-950/40 px-3.5 py-1.5 font-mono text-xs uppercase tracking-widest text-cyan-400 backdrop-blur-md">
              Hybrid Webcraft • Office Execution
            </div>

            <h1 className="text-4xl font-extrabold tracking-tight leading-tight text-white sm:text-6xl">
              Seasoned coder. <br />
              <span className="bg-gradient-to-r from-amber-400 via-cyan-300 to-violet-400 bg-clip-text text-transparent">
                Professional office support when you need it.
              </span>
            </h1>

            <p className="max-w-2xl text-lg font-light leading-relaxed text-slate-300 md:text-xl">
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
                className="rounded-xl bg-gradient-to-r from-cyan-400 to-teal-300 px-8 py-3.5 font-medium text-slate-950 shadow-[0_0_25px_rgba(34,211,238,0.4)] transition-all duration-300 hover:-translate-y-0.5 hover:from-cyan-300 hover:to-teal-200 hover:shadow-[0_0_35px_rgba(34,211,238,0.6)]"
              >
                Explore Services &amp; Rates
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

        {/* TALENTS SECTION */}
        <section className="space-y-8 border-t border-slate-800/80 pt-12">
          <div className="border-l-2 border-amber-400 pl-4">
            <h2 className="text-2xl font-bold tracking-wide text-white md:text-3xl">
              OfficeOps Capabilities
            </h2>
            <p className="font-mono text-sm text-slate-400">
              Practical, production-ready support using Microsoft 365 and Adobe Creative Cloud
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {/* MICROSOFT 365 TALENTS */}
            <div className="glass-card space-y-4 rounded-2xl border border-slate-800 bg-slate-900/40 p-6">
              <div className="font-mono text-xs uppercase tracking-wider text-cyan-400">
                Productivity &amp; Data
              </div>
              <h3 className="text-xl font-bold text-slate-100">
                Microsoft 365 — What I Do
              </h3>
              <ul className="space-y-2 text-sm font-light text-slate-300">
                <li className="flex items-start gap-2">
                  <span className="text-cyan-400 mt-0.5">✓</span>
                  <span>Clean up messy Word documents and rebuild them professionally</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-cyan-400 mt-0.5">✓</span>
                  <span>Fix headers, footers, spacing, margins, and TOCs</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-cyan-400 mt-0.5">✓</span>
                  <span>Create branded templates for proposals, reports, and contracts</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-cyan-400 mt-0.5">✓</span>
                  <span>Repair broken Excel formulas and rebuild workbook logic</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-cyan-400 mt-0.5">✓</span>
                  <span>Create dashboards, trackers, and calculators</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-cyan-400 mt-0.5">✓</span>
                  <span>Rebuild outdated PowerPoint decks into clean, modern slides</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-cyan-400 mt-0.5">✓</span>
                  <span>Organize Outlook inboxes, folders, rules, signatures, and SharePoint/OneDrive drives</span>
                </li>
              </ul>
            </div>

            {/* ADOBE TALENTS */}
            <div className="glass-card space-y-4 rounded-2xl border border-slate-800 bg-slate-900/40 p-6">
              <div className="font-mono text-xs uppercase tracking-wider text-amber-400">
                Creative &amp; Layout
              </div>
              <h3 className="text-xl font-bold text-slate-100">
                Adobe Creative Cloud — What I Do
              </h3>
              <ul className="space-y-2 text-sm font-light text-slate-300">
                <li className="flex items-start gap-2">
                  <span className="text-amber-400 mt-0.5">✓</span>
                  <span>Resize, optimize, and clean up images in Photoshop</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-amber-400 mt-0.5">✓</span>
                  <span>Remove backgrounds and fix lighting/color issues</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-amber-400 mt-0.5">✓</span>
                  <span>Create social graphics, banners, and thumbnails</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-amber-400 mt-0.5">✓</span>
                  <span>Clean up Illustrator vector files and rebuild logos</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-amber-400 mt-0.5">✓</span>
                  <span>Build brochures, flyers, and one-pagers in InDesign</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-amber-400 mt-0.5">✓</span>
                  <span>Prepare print-ready PDFs with bleeds, crop marks, and compression</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-amber-400 mt-0.5">✓</span>
                  <span>Perform Premiere Pro video edits and add titles/captions</span>
                </li>
              </ul>
            </div>

            {/* WORKFLOW TALENTS */}
            <div className="glass-card glow-border space-y-4 rounded-2xl border border-cyan-500/40 bg-slate-900/70 p-6 md:col-span-2">
              <div className="font-mono text-xs uppercase tracking-wider text-cyan-400">
                System Integration
              </div>
              <h3 className="text-xl font-bold text-white">
                Workflow, Integration &amp; Problem Solving
              </h3>
              <div className="grid gap-4 md:grid-cols-2">
                <ul className="space-y-2 text-sm font-light text-slate-300">
                  <li className="flex items-start gap-2">
                    <span className="text-cyan-400 mt-0.5">✓</span>
                    <span>Build smooth pipelines between Adobe CC and Microsoft 365</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-cyan-400 mt-0.5">✓</span>
                    <span>Create shared asset libraries and template systems</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-cyan-400 mt-0.5">✓</span>
                    <span>Standardize branding across documents, slides, and graphics</span>
                  </li>
                </ul>
                <ul className="space-y-2 text-sm font-light text-slate-300">
                  <li className="flex items-start gap-2">
                    <span className="text-cyan-400 mt-0.5">✓</span>
                    <span>Fix corrupted files, broken documents, and sync issues</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-cyan-400 mt-0.5">✓</span>
                    <span>Rebuild assets when originals are missing or unusable</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-cyan-400 mt-0.5">✓</span>
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
            <p className="font-mono text-sm text-slate-400">
              Fast, reliable help across Word, Excel, PowerPoint, Outlook, SharePoint, and OneDrive
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {/* Word */}
            <div className="glass-card space-y-3 rounded-2xl border border-slate-800 bg-slate-900/40 p-6">
              <h3 className="text-lg font-bold text-slate-100">
                Word — Documents
              </h3>
              <ul className="space-y-1.5 text-xs font-light text-slate-300 md:text-sm">
                <li>• Clean up messy documents</li>
                <li>• Create branded templates</li>
                <li>• Fix headers, footers, spacing, TOCs</li>
                <li>• Convert documents to clean PDF</li>
                <li>• Build forms, contracts, reports</li>
              </ul>
            </div>

            {/* Excel */}
            <div className="glass-card space-y-3 rounded-2xl border border-slate-800 bg-slate-900/40 p-6">
              <h3 className="text-lg font-bold text-slate-100">
                Excel — Spreadsheets
              </h3>
              <ul className="space-y-1.5 text-xs font-light text-slate-300 md:text-sm">
                <li>• Fix broken formulas</li>
                <li>• Build calculators &amp; trackers</li>
                <li>• Create dashboards &amp; charts</li>
                <li>• Clean up data &amp; formatting</li>
                <li>• Organize multi-sheet workbooks</li>
              </ul>
            </div>

            {/* PowerPoint */}
            <div className="glass-card space-y-3 rounded-2xl border border-slate-800 bg-slate-900/40 p-6">
              <h3 className="text-lg font-bold text-slate-100">
                PowerPoint — Slides
              </h3>
              <ul className="space-y-1.5 text-xs font-light text-slate-300 md:text-sm">
                <li>• Rebuild outdated slide decks</li>
                <li>• Create branded templates</li>
                <li>• Add charts, graphics, animations</li>
                <li>• Fix layout &amp; alignment</li>
                <li>• Export to PDF or video</li>
              </ul>
            </div>

            {/* Outlook / SharePoint */}
            <div className="glass-card space-y-3 rounded-2xl border border-slate-800 bg-slate-900/40 p-6">
              <h3 className="text-lg font-bold text-slate-100">
                Outlook, SharePoint &amp; OneDrive
              </h3>
              <ul className="space-y-1.5 text-xs font-light text-slate-300 md:text-sm">
                <li>• Organize inboxes &amp; folders</li>
                <li>• Set up shared drives</li>
                <li>• Fix sync issues</li>
                <li>• Create shared templates</li>
                <li>• Improve team workflows</li>
              </ul>
            </div>
          </div>
        </section>

        <HackerBuddyBottom />

        {/* ADOBE SECTION */}
        <section className="space-y-8 border-t border-slate-800/80 pt-12">
          <div className="border-l-2 border-amber-400 pl-4">
            <h2 className="text-2xl font-bold tracking-wide text-white md:text-3xl">
              Adobe Creative Cloud Breakdown
            </h2>
            <p className="font-mono text-sm text-slate-400">
              Clean, professional graphics and document support across the Creative Suite
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {/* Photoshop */}
            <div className="glass-card space-y-3 rounded-2xl border border-slate-800 bg-slate-900/40 p-6">
              <h3 className="text-lg font-bold text-slate-100">
                Photoshop — Graphics
              </h3>
              <ul className="space-y-1.5 text-xs font-light text-slate-300 md:text-sm">
                <li>• Resize and optimize images</li>
                <li>• Remove backgrounds</li>
                <li>• Create social graphics &amp; banners</li>
                <li>• Fix lighting &amp; color</li>
                <li>• Prep images for print/web</li>
              </ul>
            </div>

            {/* Illustrator */}
            <div className="glass-card space-y-3 rounded-2xl border border-slate-800 bg-slate-900/40 p-6">
              <h3 className="text-lg font-bold text-slate-100">
                Illustrator — Vector
              </h3>
              <ul className="space-y-1.5 text-xs font-light text-slate-300 md:text-sm">
                <li>• Clean up vector files</li>
                <li>• Rebuild logos</li>
                <li>• Create icons &amp; simple graphics</li>
                <li>• Convert artwork to vector</li>
                <li>• Prep files for print</li>
              </ul>
            </div>

            {/* InDesign */}
            <div className="glass-card space-y-3 rounded-2xl border border-slate-800 bg-slate-900/40 p-6">
              <h3 className="text-lg font-bold text-slate-100">
                InDesign — Layout
              </h3>
              <ul className="space-y-1.5 text-xs font-light text-slate-300 md:text-sm">
                <li>• Build brochures &amp; one-pagers</li>
                <li>• Create branded templates</li>
                <li>• Fix layout &amp; typography</li>
                <li>• Prepare print-ready PDFs</li>
                <li>• Convert Word docs to clean layouts</li>
              </ul>
            </div>

            {/* Premiere / Acrobat */}
            <div className="glass-card space-y-3 rounded-2xl border border-slate-800 bg-slate-900/40 p-6">
              <h3 className="text-lg font-bold text-slate-100">
                Video Editing and Creation
              </h3>
              <ul className="space-y-1.5 text-xs font-light text-slate-300 md:text-sm">
                <li>• Advanced Video Editing</li>
                <li>• After Effects VFX</li>
                <li>• Audio Remix</li>
                <li>• Cinematic Color Grading</li>
                <li>• Compress videos for web &amp; social</li>
              </ul>
            </div>
          </div>
        </section>

        {/* PRICING SECTION */}
        <section id="rates" className="space-y-8 border-t border-slate-800/80 pt-12">
          <NegotiablePricing />
        </section>
      </main>
    </div>
  );
}