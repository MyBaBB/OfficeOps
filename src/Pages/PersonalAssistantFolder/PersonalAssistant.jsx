import React, { useState } from "react";
import NegotiablePricing from "../../Components/PricingFolder/Negotiable";
import MeBeach from "../../img/Me_at_Beach_200x200.webp";

export default function PersonalAssistantPage() {
  const [copied, setCopied] = useState(false);
  const [terminalText, setTerminalText] = useState(
    "status: operations & executive support active"
  );

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const cycleTerminal = () => {
    const quotes = [
      "status: operations & executive support active",
      "bookkeeping, CRM, & tech ops locked",
      "Adobe CC + PowerShell workflows humming",
      "zero bloat. elite hybrid execution.",
    ];
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    setTerminalText(randomQuote);
  };

  return (
    <div className="vibe-container relative min-h-screen overflow-hidden bg-slate-950 font-sans text-slate-50 selection:bg-cyan-500 selection:text-slate-950">
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
              Personal Assistant • Operations &amp; Sales Support
            </span>
          </div>

          <a
            href="https://contact.mybabb.com"
            className="rounded-xl border border-cyan-500/30 bg-cyan-950/40 px-5 py-2 font-mono text-xs font-semibold uppercase tracking-wider text-cyan-300 backdrop-blur-md transition-all hover:bg-cyan-900/50 hover:text-white"
          >
            Contact Brett
          </a>
        </div>
      </header>

      <main className="relative z-20 mx-auto max-w-6xl space-y-20 px-6 py-12 md:py-20">
        
        {/* HERO SECTION */}
        <section className="mx-auto max-w-4xl space-y-6 text-center">
          <div className="glow-border inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-950/40 px-3.5 py-1.5 font-mono text-xs uppercase tracking-widest text-cyan-400 backdrop-blur-md">
            Hybrid Webcraft • Executive &amp; Technical Backing
          </div>

          <h1 className="text-4xl font-extrabold tracking-tight leading-tight text-white sm:text-6xl">
            Seasoned coder. <br />
            <span className="bg-gradient-to-r from-amber-400 via-cyan-300 to-violet-400 bg-clip-text text-transparent">
              Your Personal Assistant For Business, Sales &amp; Technology.
            </span>
          </h1>

          <p className="mx-auto max-w-2xl text-lg font-light leading-relaxed text-slate-300 md:text-xl">
            Need somebody who can handle office work, customer follow-up, sales
            support, computers, websites, organization, marketing, and video
            creation? Think of me as an extra team member who can jump in
            wherever help is needed.
          </p>
        </section>

        {/* MEET BRETT SECTION */}
        <section className="space-y-8 border-t border-slate-800/80 pt-12">
          <div className="flex flex-col items-center gap-8 md:flex-row md:items-start lg:gap-12">
            
            {/* Profile Image & Terminal Card Column */}
            <div className="mx-auto flex-shrink-0 md:mx-0">
              <div
                className="group relative cursor-pointer"
                onClick={cycleTerminal}
                title="Click to cycle status!"
              >
                <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-cyan-500 to-amber-400 opacity-75 blur-lg transition duration-500 group-hover:scale-105 group-hover:opacity-100" />
                <div className="relative flex flex-col items-center space-y-3 rounded-3xl border border-slate-700/80 bg-slate-900 p-3 shadow-2xl backdrop-blur-xl">
                  <img
                    src={MeBeach}
                    alt="Brett at The Beach"
                    className="h-48 w-48 rounded-2xl border border-slate-800 object-cover filter contrast-105 sm:h-[230px] sm:w-[230px]"
                  />
                  <div className="w-full truncate rounded-xl border border-slate-800 bg-slate-950/80 px-3 py-1.5 text-center font-mono text-[11px] text-cyan-400">
                    ⚡ {terminalText}
                  </div>
                </div>
              </div>
            </div>

            {/* Content Column */}
            <div className="flex-1 space-y-4 text-center md:text-left">
              <div>
                <span className="rounded-full border border-cyan-800/50 bg-cyan-950/60 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-cyan-400 font-mono">
                  Operations &amp; Administrative Support
                </span>
                <h3 className="mt-2 text-2xl font-bold tracking-tight text-white sm:text-3xl">
                  Meet Brett
                </h3>
              </div>

              <p className="text-sm leading-relaxed text-slate-300 sm:text-base font-light">
                I help businesses stay organized, productive, and profitable.
                Whether you need dependable clerical support, customer
                follow-up, tech assistance, website management, or day-to-day
                operations flow, I am ready to step in and add value immediately.
              </p>

              {/* Quick Skill Badges / Highlights Grid */}
              <div className="grid grid-cols-2 gap-2 pb-1 pt-2 sm:grid-cols-3">
               
              
                <div className="rounded-lg border border-slate-800 bg-slate-900/80 px-3 py-2 text-center text-xs font-medium text-slate-200">
                  💻 Web &amp; Tech Ops
                </div>
                 <div className="rounded-lg border border-slate-800 bg-slate-900/80 px-3 py-2 text-center text-xs font-medium text-slate-200">
                  📊 Bookkeeping &amp; 10-Key
                </div>
                <div className="rounded-lg border border-slate-800 bg-slate-900/80 px-3 py-2 text-center text-xs font-medium text-slate-200">
                  🎨 Adobe &amp; Media
                </div>
                <div className="rounded-lg border border-slate-800 bg-slate-900/80 px-3 py-2 text-center text-xs font-medium text-slate-200">
                  📞 Client Support
                </div>
                  <div className="rounded-lg border border-slate-800 bg-slate-900/80 px-3 py-2 text-center text-xs font-medium text-slate-200">
                  🗂️ Records Management
                </div>
                <div className="rounded-lg border border-slate-800 bg-slate-900/80 px-3 py-2 text-center text-xs font-medium text-slate-200">
                  ⚡ High Accountability
                </div>
              </div>

              <p className="text-sm leading-relaxed text-slate-300 sm:text-base font-light">
                With a strong background handling bookkeeping, precision 10-key
                entry, and high-accountability office work from my time as a
                casino clerk—combined with modern tech, programming, and digital
                media skills—I bridge the gap between traditional administrative
                rigor and modern digital efficiency.
              </p>
            </div>
          </div>
        </section>

        {/* SERVICES SECTION */}
        <section className="space-y-8 border-t border-slate-800/80 pt-12">
          <div className="border-l-2 border-cyan-400 pl-4">
            <h3 className="text-2xl font-bold tracking-wide text-white md:text-3xl">
              Core Services &amp; Capabilities
            </h3>
            <p className="font-mono text-sm text-slate-400">
              Comprehensive administrative, sales, technology, and marketing execution
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <div className="glass-card space-y-3 rounded-2xl border border-slate-800 bg-slate-900/40 p-6">
              <h4 className="text-lg font-bold text-cyan-400">
                Office &amp; Clerical Support
              </h4>
              <ul className="space-y-1.5 text-xs font-light text-slate-300 md:text-sm">
                <li>• Data Entry</li>
                <li>• Digital File Organization</li>
                <li>• Bookkeeping Assistance</li>
                <li>• Spreadsheet Updates</li>
                <li>• Document Management</li>
                <li>• Inventory Tracking</li>
                <li>• Customer Records</li>
                <li>• Administrative Support</li>
              </ul>
            </div>

            <div className="glass-card space-y-3 rounded-2xl border border-slate-800 bg-slate-900/40 p-6">
              <h4 className="text-lg font-bold text-amber-400">
                Sales &amp; Customer Support
              </h4>
              <ul className="space-y-1.5 text-xs font-light text-slate-300 md:text-sm">
                <li>• Customer Follow-Up</li>
                <li>• Lead Tracking</li>
                <li>• Appointment Scheduling</li>
                <li>• CRM Updates</li>
                <li>• Customer Communication</li>
                <li>• Sales Assistance</li>
                <li>• Marketing Support</li>
                <li>• Business Development</li>
              </ul>
            </div>

            <div className="glass-card space-y-3 rounded-2xl border border-slate-800 bg-slate-900/40 p-6">
              <h4 className="text-lg font-bold text-violet-400">
                Computer &amp; Technology
              </h4>
              <ul className="space-y-1.5 text-xs font-light text-slate-300 md:text-sm">
                <li>• Microsoft 365 Assistance</li>
                <li>• PowerShell Automation</li>
                <li>• Computer Troubleshooting</li>
                <li>• Windows Support</li>
                <li>• Software Installation</li>
                <li>• Technical Support</li>
                <li>• Workflow Improvements</li>
                <li>• System Organization</li>
              </ul>
            </div>

            <div className="glass-card space-y-3 rounded-2xl border border-slate-800 bg-slate-900/40 p-6">
              <h4 className="text-lg font-bold text-emerald-400">
                Websites &amp; Marketing
              </h4>
              <ul className="space-y-1.5 text-xs font-light text-slate-300 md:text-sm">
                <li>• Website Hosting</li>
                <li>• WordPress Websites</li>
                <li>• Landing Pages</li>
                <li>• Website Maintenance</li>
                <li>• SEO Improvements</li>
                <li>• Social Media Content</li>
                <li>• Advertising Campaigns</li>
                <li>• Online Promotions</li>
              </ul>
            </div>
          </div>
        </section>

        {/* VIDEO CREATION & ADVERTISING */}
        <section className="space-y-6 border-t border-slate-800/80 pt-12">
          <div className="border-l-2 border-amber-400 pl-4">
            <h3 className="text-2xl font-bold tracking-wide text-white md:text-3xl">
              Video Creation &amp; Advertising
            </h3>
            <p className="font-mono text-sm text-slate-400">
              Professional video editing and promotional content production
            </p>
          </div>

          <div className="glass-card space-y-4 rounded-2xl border border-slate-800 bg-slate-900/40 p-6">
            <p className="text-sm font-light text-slate-300 md:text-base">
              Professional video editing and promotional content creation to
              help businesses showcase products, services, and inventory.
            </p>

            <div className="grid grid-cols-2 gap-2 sm:grid-cols-4 pt-2">
              <div className="rounded-lg border border-slate-800/80 bg-slate-950/60 px-3 py-2 text-xs font-mono text-cyan-300 text-center">YouTube Videos</div>
              <div className="rounded-lg border border-slate-800/80 bg-slate-950/60 px-3 py-2 text-xs font-mono text-cyan-300 text-center">Vehicle Walkarounds</div>
              <div className="rounded-lg border border-slate-800/80 bg-slate-950/60 px-3 py-2 text-xs font-mono text-cyan-300 text-center">Social Media Clips</div>
              <div className="rounded-lg border border-slate-800/80 bg-slate-950/60 px-3 py-2 text-xs font-mono text-cyan-300 text-center">Commercial Editing</div>
              <div className="rounded-lg border border-slate-800/80 bg-slate-950/60 px-3 py-2 text-xs font-mono text-cyan-300 text-center">Motion Graphics</div>
              <div className="rounded-lg border border-slate-800/80 bg-slate-950/60 px-3 py-2 text-xs font-mono text-cyan-300 text-center">Adobe Premiere Pro</div>
              <div className="rounded-lg border border-slate-800/80 bg-slate-950/60 px-3 py-2 text-xs font-mono text-cyan-300 text-center">After Effects VFX</div>
              <div className="rounded-lg border border-slate-800/80 bg-slate-950/60 px-3 py-2 text-xs font-mono text-cyan-300 text-center">Web &amp; Mobile Export</div>
            </div>
          </div>
        </section>

        {/* WHY BUSINESSES WORK WITH ME */}
        <section className="space-y-8 border-t border-slate-800/80 pt-12">
          <div className="border-l-2 border-cyan-400 pl-4">
            <h3 className="text-2xl font-bold tracking-wide text-white md:text-3xl">
              Why Businesses Work With Me
            </h3>
            <p className="font-mono text-sm text-slate-400">
              The rare combination of traditional clerical rigor and modern digital mastery
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            <div className="glass-card rounded-2xl border border-slate-800 bg-slate-900/40 p-6 text-center space-y-2">
              <h4 className="font-bold text-slate-100">Management Experience</h4>
              <p className="text-xs font-light text-slate-300">
                Bookkeeping support, 10-key entry, records management.
              </p>
            </div>

            <div className="glass-card rounded-2xl border border-slate-800 bg-slate-900/40 p-6 text-center space-y-2">
              <h4 className="font-bold text-slate-100">Adobe Certified</h4>
              <p className="text-xs font-light text-slate-300">
                Graphics, marketing materials, and video production.
              </p>
            </div>

            <div className="glass-card rounded-2xl border border-slate-800 bg-slate-900/40 p-6 text-center space-y-2">
              <h4 className="font-bold text-slate-100">Web Developer</h4>
              <p className="text-xs font-light text-slate-300">
                Websites, hosting, automation, and online marketing.
              </p>
            </div>

            <div className="glass-card rounded-2xl border border-slate-800 bg-slate-900/40 p-6 text-center space-y-2">
              <h4 className="font-bold text-slate-100">Sales Focused</h4>
              <p className="text-xs font-light text-slate-300">
                Customer follow-up, lead engagement, and promotion.
              </p>
            </div>

            <div className="glass-card rounded-2xl border border-slate-800 bg-slate-900/40 p-6 text-center space-y-2">
              <h4 className="font-bold text-slate-100">Technology Support</h4>
              <p className="text-xs font-light text-slate-300">
                Computers, Microsoft 365, and PowerShell support.
              </p>
            </div>

            <div className="glass-card rounded-2xl border border-slate-800 bg-slate-900/40 p-6 text-center space-y-2">
              <h4 className="font-bold text-slate-100">Flexible &amp; Reliable</h4>
              <p className="text-xs font-light text-slate-300">
                Comfortable wearing multiple hats and learning new systems.
              </p>
            </div>
          </div>
        </section>

        {/* CTA FOOTER */}
        <section
          id="contact"
          className="rounded-3xl border border-cyan-500/30 bg-slate-900/60 p-8 text-center backdrop-blur-xl md:p-12 space-y-6"
        >
          <h3 className="text-3xl font-extrabold text-white xl:text-5xl">
            Need An Extra Set Of Hands?
          </h3>

          <p className="mx-auto max-w-3xl text-sm font-light text-slate-300 md:text-base">
            Office work. Sales support. Customer follow-up. Technology help.
            Websites. Marketing. Video creation. One reliable person who can
            help keep your business moving forward.
          </p>

          <div className="pt-2">
            <a
              href="https://contact.mybabb.com"
              className="inline-block rounded-xl bg-gradient-to-r from-cyan-400 to-amber-400 px-10 py-4 font-mono text-sm font-semibold text-slate-950 shadow-[0_0_30px_rgba(34,211,238,0.3)] transition-all duration-300 hover:scale-105 hover:from-cyan-300 hover:to-amber-300"
            >
              Contact Brett &rarr;
            </a>
          </div>
        </section>

        {/* PRICING */}
        <section className="space-y-8 border-t border-slate-800/80 pt-12">
          <NegotiablePricing />
        </section>

      </main>
    </div>
  );
}