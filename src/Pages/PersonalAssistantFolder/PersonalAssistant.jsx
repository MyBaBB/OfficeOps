import { useState } from "react";
import MeBeach from "../../img/Me_at_Beach_200x200.webp";
import NegotiablePricing from "../../Components/PricingFolder/Negotiable";
import HackerBuddyBottom from "../../Components/HackerBuddyFolder/HackerBuddyBottom";
import "./PersonalAssistant.css";

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
              Personal Assistant • Operations &amp; Sales Support
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
              Hybrid Webcraft • Executive &amp; Technical Backing
            </div>

            <h1 className="text-4xl font-extrabold leading-tight tracking-tight text-white sm:text-6xl">
              Seasoned coder. <br />
              <span className="bg-gradient-to-r from-amber-400 via-cyan-300 to-violet-400 bg-clip-text text-transparent">
                Your Personal Assistant For Business, Sales &amp; Technology.
              </span>
            </h1>

            <p className="max-w-2xl text-lg font-normal leading-relaxed text-slate-200 md:text-xl">
              Need somebody who can handle office work, customer follow-up, sales
              support, computers, websites, organization, marketing, and video
              creation? Think of me as an extra team member who can jump in
              wherever help is needed.
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
                  src={MeBeach}
                  alt="Brett at the beach"
                  className="h-48 w-48 rounded-2xl border border-slate-800 object-cover filter contrast-105 sm:h-[230px] sm:w-[230px]"
                />
                <div className="w-full truncate rounded-xl border border-slate-700 bg-slate-950 px-3 py-1.5 text-center font-mono text-xs font-semibold text-cyan-300">
                  ⚡ {terminalText}
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* MEET BRETT / QUALIFICATIONS SECTION */}
        <section className="space-y-8 border-t border-slate-800/80 pt-12">
          <div className="border-l-2 border-amber-400 pl-4">
            <h2 className="text-2xl font-bold tracking-wide text-white md:text-3xl">
              Meet Brett
            </h2>
            <p className="font-mono text-sm font-semibold text-slate-300">
              Operations &amp; Administrative Support
            </p>
          </div>

          <div className="space-y-6 text-slate-200 font-normal leading-relaxed">
            <p>
              I help businesses stay organized, productive, and profitable.
              Whether you need dependable clerical support, customer
              follow-up, tech assistance, website management, or day-to-day
              operations flow, I am ready to step in and add value immediately.
            </p>

            {/* Quick Skill Badges Grid */}
            <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 md:grid-cols-6 pt-2">
              <div className="rounded-lg border border-slate-700 bg-slate-900 px-3 py-2 text-center text-xs font-semibold text-slate-100">
                💻 Web &amp; Tech Ops
              </div>
              <div className="rounded-lg border border-slate-700 bg-slate-900 px-3 py-2 text-center text-xs font-semibold text-slate-100">
                📊 Bookkeeping &amp; 10-Key
              </div>
              <div className="rounded-lg border border-slate-700 bg-slate-900 px-3 py-2 text-center text-xs font-semibold text-slate-100">
                🎨 Adobe &amp; Media
              </div>
              <div className="rounded-lg border border-slate-700 bg-slate-900 px-3 py-2 text-center text-xs font-semibold text-slate-100">
                📞 Client Support
              </div>
              <div className="rounded-lg border border-slate-700 bg-slate-900 px-3 py-2 text-center text-xs font-semibold text-slate-100">
                🗂️ Records Management
              </div>
              <div className="rounded-lg border border-slate-700 bg-slate-900 px-3 py-2 text-center text-xs font-semibold text-slate-100">
                ⚡ High Accountability
              </div>
            </div>

            <p>
              With a strong background handling bookkeeping, precision 10-key
              entry, and high-accountability office work from my time as a
              casino clerk—combined with modern tech, programming, and digital
              media skills—I bridge the gap between traditional administrative
              rigor and modern digital efficiency.
            </p>
          </div>
        </section>

        {/* CORE SERVICES SECTION */}
        <section className="space-y-8 border-t border-slate-800/80 pt-12">
          <div className="border-l-2 border-cyan-400 pl-4">
            <h2 className="text-2xl font-bold tracking-wide text-white md:text-3xl">
              Core Services &amp; Capabilities
            </h2>
            <p className="font-mono text-sm font-semibold text-slate-300">
              Comprehensive administrative, sales, technology, and marketing execution
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {/* Office & Clerical Support */}
            <div className="glass-card space-y-3 rounded-2xl border border-slate-800 bg-slate-900/40 p-6">
              <h3 className="text-lg font-bold text-cyan-300">
                Office &amp; Clerical Support
              </h3>
              <ul className="space-y-2 text-xs font-normal text-slate-200 md:text-sm">
                <li className="flex items-center gap-2"><span className="text-cyan-400 font-bold">▸</span><span>Data Entry</span></li>
                <li className="flex items-center gap-2"><span className="text-cyan-400 font-bold">▸</span><span>Digital File Organization</span></li>
                <li className="flex items-center gap-2"><span className="text-cyan-400 font-bold">▸</span><span>Bookkeeping Assistance</span></li>
                <li className="flex items-center gap-2"><span className="text-cyan-400 font-bold">▸</span><span>Spreadsheet Updates</span></li>
                <li className="flex items-center gap-2"><span className="text-cyan-400 font-bold">▸</span><span>Document Management</span></li>
                <li className="flex items-center gap-2"><span className="text-cyan-400 font-bold">▸</span><span>Inventory Tracking</span></li>
                <li className="flex items-center gap-2"><span className="text-cyan-400 font-bold">▸</span><span>Customer Records</span></li>
                <li className="flex items-center gap-2"><span className="text-cyan-400 font-bold">▸</span><span>Administrative Support</span></li>
              </ul>
            </div>

            {/* Sales & Customer Support */}
            <div className="glass-card space-y-3 rounded-2xl border border-slate-800 bg-slate-900/40 p-6">
              <h3 className="text-lg font-bold text-amber-300">
                Sales &amp; Customer Support
              </h3>
              <ul className="space-y-2 text-xs font-normal text-slate-200 md:text-sm">
                <li className="flex items-center gap-2"><span className="text-amber-400 font-bold">▸</span><span>Customer Follow-Up</span></li>
                <li className="flex items-center gap-2"><span className="text-amber-400 font-bold">▸</span><span>Lead Tracking</span></li>
                <li className="flex items-center gap-2"><span className="text-amber-400 font-bold">▸</span><span>Appointment Scheduling</span></li>
                <li className="flex items-center gap-2"><span className="text-amber-400 font-bold">▸</span><span>CRM Updates</span></li>
                <li className="flex items-center gap-2"><span className="text-amber-400 font-bold">▸</span><span>Customer Communication</span></li>
                <li className="flex items-center gap-2"><span className="text-amber-400 font-bold">▸</span><span>Sales Assistance</span></li>
                <li className="flex items-center gap-2"><span className="text-amber-400 font-bold">▸</span><span>Marketing Support</span></li>
                <li className="flex items-center gap-2"><span className="text-amber-400 font-bold">▸</span><span>Business Development</span></li>
              </ul>
            </div>

            {/* Computer & Technology */}
            <div className="glass-card space-y-3 rounded-2xl border border-slate-800 bg-slate-900/40 p-6">
              <h3 className="text-lg font-bold text-violet-300">
                Computer &amp; Technology
              </h3>
              <ul className="space-y-2 text-xs font-normal text-slate-200 md:text-sm">
                <li className="flex items-center gap-2"><span className="text-violet-400 font-bold">▸</span><span>Microsoft 365 Assistance</span></li>
                <li className="flex items-center gap-2"><span className="text-violet-400 font-bold">▸</span><span>PowerShell Automation</span></li>
                <li className="flex items-center gap-2"><span className="text-violet-400 font-bold">▸</span><span>Computer Troubleshooting</span></li>
                <li className="flex items-center gap-2"><span className="text-violet-400 font-bold">▸</span><span>Windows Support</span></li>
                <li className="flex items-center gap-2"><span className="text-violet-400 font-bold">▸</span><span>Software Installation</span></li>
                <li className="flex items-center gap-2"><span className="text-violet-400 font-bold">▸</span><span>Technical Support</span></li>
                <li className="flex items-center gap-2"><span className="text-violet-400 font-bold">▸</span><span>Workflow Improvements</span></li>
                <li className="flex items-center gap-2"><span className="text-violet-400 font-bold">▸</span><span>System Organization</span></li>
              </ul>
            </div>

            {/* Websites & Marketing */}
            <div className="glass-card space-y-3 rounded-2xl border border-slate-800 bg-slate-900/40 p-6">
              <h3 className="text-lg font-bold text-emerald-300">
                Websites &amp; Marketing
              </h3>
              <ul className="space-y-2 text-xs font-normal text-slate-200 md:text-sm">
                <li className="flex items-center gap-2"><span className="text-emerald-400 font-bold">▸</span><span>Website Hosting</span></li>
                <li className="flex items-center gap-2"><span className="text-emerald-400 font-bold">▸</span><span>WordPress Websites</span></li>
                <li className="flex items-center gap-2"><span className="text-emerald-400 font-bold">▸</span><span>Landing Pages</span></li>
                <li className="flex items-center gap-2"><span className="text-emerald-400 font-bold">▸</span><span>Website Maintenance</span></li>
                <li className="flex items-center gap-2"><span className="text-emerald-400 font-bold">▸</span><span>SEO Improvements</span></li>
                <li className="flex items-center gap-2"><span className="text-emerald-400 font-bold">▸</span><span>Social Media Content</span></li>
                <li className="flex items-center gap-2"><span className="text-emerald-400 font-bold">▸</span><span>Advertising Campaigns</span></li>
                <li className="flex items-center gap-2"><span className="text-emerald-400 font-bold">▸</span><span>Online Promotions</span></li>
              </ul>
            </div>
          </div>
        </section>

        {/* MICROSOFT OFFICE & DATA BREAKDOWN */}
        <section className="space-y-6 border-t border-slate-800/80 pt-12">
          <div className="border-l-2 border-cyan-400 pl-4">
            <h2 className="text-2xl font-bold tracking-wide text-white md:text-3xl">
              Microsoft 365 — Word, Excel &amp; Data
            </h2>
            <p className="font-mono text-sm font-semibold text-slate-300">
              Professional document styling, spreadsheet auditing, formulas, and reporting
            </p>
          </div>

          <div className="glass-card space-y-4 rounded-2xl border border-slate-800 bg-slate-900/40 p-6">
            <p className="text-sm font-normal text-slate-200 md:text-base">
              Precise document formatting and advanced workbook structuring to keep your office workflows clean and error-free.
            </p>

            <div className="grid grid-cols-2 gap-2 sm:grid-cols-4 pt-2">
              <div className="rounded-lg border border-slate-700 bg-slate-900 px-3 py-2 text-xs font-mono font-semibold text-cyan-200 text-center">Excel Spreadsheets</div>
              <div className="rounded-lg border border-slate-700 bg-slate-900 px-3 py-2 text-xs font-mono font-semibold text-cyan-200 text-center">Word Documents</div>
              <div className="rounded-lg border border-slate-700 bg-slate-900 px-3 py-2 text-xs font-mono font-semibold text-cyan-200 text-center">Formula Repair &amp; Logic</div>
              <div className="rounded-lg border border-slate-700 bg-slate-900 px-3 py-2 text-xs font-mono font-semibold text-cyan-200 text-center">Branded Templates</div>
              <div className="rounded-lg border border-slate-700 bg-slate-900 px-3 py-2 text-xs font-mono font-semibold text-cyan-200 text-center">Dashboards &amp; Trackers</div>
              <div className="rounded-lg border border-slate-700 bg-slate-900 px-3 py-2 text-xs font-mono font-semibold text-cyan-200 text-center">Headers &amp; Formatting</div>
              <div className="rounded-lg border border-slate-700 bg-slate-900 px-3 py-2 text-xs font-mono font-semibold text-cyan-200 text-center">PowerPoint Decks</div>
              <div className="rounded-lg border border-slate-700 bg-slate-900 px-3 py-2 text-xs font-mono font-semibold text-cyan-200 text-center">SharePoint / OneDrive</div>
            </div>
          </div>
        </section>

        {/* VIDEO CREATION & ADVERTISING */}
        <section className="space-y-6 border-t border-slate-800/80 pt-12">
          <div className="border-l-2 border-amber-400 pl-4">
            <h2 className="text-2xl font-bold tracking-wide text-white md:text-3xl">
              Video Creation &amp; Advertising
            </h2>
            <p className="font-mono text-sm font-semibold text-slate-300">
              Professional video editing and promotional content production
            </p>
          </div>

          <div className="glass-card space-y-4 rounded-2xl border border-slate-800 bg-slate-900/40 p-6">
            <p className="text-sm font-normal text-slate-200 md:text-base">
              Professional video editing and promotional content creation to
              help businesses showcase products, services, and inventory.
            </p>

            <div className="grid grid-cols-2 gap-2 sm:grid-cols-4 pt-2">
              <div className="rounded-lg border border-slate-700 bg-slate-900 px-3 py-2 text-xs font-mono font-semibold text-amber-200 text-center">YouTube Videos</div>
              <div className="rounded-lg border border-slate-700 bg-slate-900 px-3 py-2 text-xs font-mono font-semibold text-amber-200 text-center">Animations</div>
              <div className="rounded-lg border border-slate-700 bg-slate-900 px-3 py-2 text-xs font-mono font-semibold text-amber-200 text-center">Social Media Clips</div>
              <div className="rounded-lg border border-slate-700 bg-slate-900 px-3 py-2 text-xs font-mono font-semibold text-amber-200 text-center">Commercial Editing</div>
              <div className="rounded-lg border border-slate-700 bg-slate-900 px-3 py-2 text-xs font-mono font-semibold text-amber-200 text-center">Motion Graphics</div>
              <div className="rounded-lg border border-slate-700 bg-slate-900 px-3 py-2 text-xs font-mono font-semibold text-amber-200 text-center">Adobe Premiere Pro</div>
              <div className="rounded-lg border border-slate-700 bg-slate-900 px-3 py-2 text-xs font-mono font-semibold text-amber-200 text-center">After Effects VFX</div>
              <div className="rounded-lg border border-slate-700 bg-slate-900 px-3 py-2 text-xs font-mono font-semibold text-amber-200 text-center">Web &amp; Mobile Export</div>
            </div>
          </div>
        </section>

        {/* WHY BUSINESSES WORK WITH ME */}
        <section className="space-y-8 border-t border-slate-800/80 pt-12">
          <div className="border-l-2 border-cyan-400 pl-4">
            <h2 className="text-2xl font-bold tracking-wide text-white md:text-3xl">
              Why Businesses Work With Me
            </h2>
            <p className="font-mono text-sm font-semibold text-slate-300">
              The rare combination of traditional clerical rigor and modern digital mastery
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            <div className="glass-card rounded-2xl border border-slate-800 bg-slate-900/40 p-6 text-center space-y-2">
              <h3 className="font-bold text-slate-100">Management Experience</h3>
              <p className="text-xs font-normal text-slate-200">
                Bookkeeping support, 10-key entry, records management.
              </p>
            </div>

            <div className="glass-card rounded-2xl border border-slate-800 bg-slate-900/40 p-6 text-center space-y-2">
              <h3 className="font-bold text-slate-100">Adobe Certified</h3>
              <p className="text-xs font-normal text-slate-200">
                Graphics, marketing materials, and video production.
              </p>
            </div>

            <div className="glass-card rounded-2xl border border-slate-800 bg-slate-900/40 p-6 text-center space-y-2">
              <h3 className="font-bold text-slate-100">Web Developer</h3>
              <p className="text-xs font-normal text-slate-200">
                Websites, hosting, automation, and online marketing.
              </p>
            </div>

            <div className="glass-card rounded-2xl border border-slate-800 bg-slate-900/40 p-6 text-center space-y-2">
              <h3 className="font-bold text-slate-100">Sales Focused</h3>
              <p className="text-xs font-normal text-slate-200">
                Customer follow-up, lead engagement, and promotion.
              </p>
            </div>

            <div className="glass-card rounded-2xl border border-slate-800 bg-slate-900/40 p-6 text-center space-y-2">
              <h3 className="font-bold text-slate-100">Technology Support</h3>
              <p className="text-xs font-normal text-slate-200">
                Computers, Microsoft 365, and PowerShell support.
              </p>
            </div>

            <div className="glass-card rounded-2xl border border-slate-800 bg-slate-900/40 p-6 text-center space-y-2">
              <h3 className="font-bold text-slate-100">Flexible &amp; Reliable</h3>
              <p className="text-xs font-normal text-slate-200">
                Comfortable wearing multiple hats and learning new systems.
              </p>
            </div>
          </div>
        </section>

        {/* FRIENDLY PRICING SECTION */}
        <section id="rates" className="space-y-6 border-t border-slate-800/80 pt-12 text-center">
          <a href="https://about.us.mybabb.com/pricepackages"
             className="border-l-2 border-cyan-400 pl-4 text-left inline-block group">
            <h2 className="text-2xl font-bold tracking-wide text-white md:text-3xl group-hover:text-cyan-300 transition-colors">
              General Price Guidelines
            </h2>
            <p className="font-mono text-sm font-semibold text-slate-300">
               Flexible Custom Rates for Cool Custom Things
            </p>
          </a>

          <div className="flex flex-col items-center justify-center pt-4 space-y-2">
            <a href="https://contact.mybabb.com" className="flex items-center gap-3">
              <span className="text-cyan-400 text-xl font-bold inline-block animate-[pulse_5s_ease-in-out_infinite]">
                👉
              </span>
              <div className="rounded-xl border border-cyan-500/40 bg-cyan-950/60 px-6 py-3 font-mono text-sm font-bold text-cyan-200 backdrop-blur-md shadow-[0_0_20px_rgba(34,211,238,0.2)] transition-all duration-300 hover:bg-cyan-900 hover:text-white hover:scale-105">
                💲 Friendly Price Negotiations
              </div>
              <span className="text-cyan-400 text-xl font-bold inline-block animate-[pulse_5s_ease-in-out_infinite]">
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