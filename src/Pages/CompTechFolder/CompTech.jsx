import React, { useState } from "react";
import meAtBeach from "../../img/Me_at_Beach_200x200.webp";
import HackerBuddyBottom from "../../Components/HackerBuddyFolder/HackerBuddyBottom";
import "./CompTech.css";

function ComputerTechPage() {
  const [copied, setCopied] = useState(false);
  const [terminalText, setTerminalText] = useState(
    "status: bench diagnostic online"
  );

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const cycleTerminal = () => {
    const quotes = [
      "status: bench diagnostic online",
      "SSD clone complete • 10x speed boost",
      "malware purged • OS optimized",
      "mesh Wi-Fi coverage: 100%",
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
              Certified Computer Technician
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
              On-Site & Bench Repair Support
            </div>

            <h1 className="text-4xl font-extrabold tracking-tight leading-tight text-white sm:text-6xl">
              Certified Tech. <br />
              <span className="bg-gradient-to-r from-amber-400 via-cyan-300 to-violet-400 bg-clip-text text-transparent">
                Zero headache PC repair.
              </span>
            </h1>

            <p className="max-w-2xl text-lg font-light leading-relaxed text-slate-300 md:text-xl">
              Professional computer support for homes and small businesses.
              Whether you need a new PC set up, a slow computer fixed, parts
              replaced, Windows repaired, or your network running right — I handle
              everything quickly, accurately, and professionally.
            </p>

            {/* Action Row */}
            <div className="flex flex-wrap items-center justify-center gap-4 pt-4 md:justify-start">
              <a
                href="https://contact.mybabb.com/computer_tech"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-xl bg-gradient-to-r from-cyan-400 to-teal-300 px-8 py-3.5 font-medium text-slate-950 shadow-[0_0_25px_rgba(34,211,238,0.4)] transition-all duration-300 hover:-translate-y-0.5 hover:from-cyan-300 hover:to-teal-200 hover:shadow-[0_0_35px_rgba(34,211,238,0.6)]"
              >
                Start My Tech Support
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

        {/* CAPABILITIES SECTION */}
        <section className="space-y-8 border-t border-slate-800/80 pt-12">
          <div className="border-l-2 border-amber-400 pl-4">
            <h2 className="text-2xl font-bold tracking-wide text-white md:text-3xl">
              Technician Capabilities
            </h2>
            <p className="font-mono text-sm text-slate-400">
              Hands-on, reliable support to keep your systems running at peak performance
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {/* PC & WINDOWS SUPPORT */}
            <div className="glass-card space-y-4 rounded-2xl border border-slate-800 bg-slate-900/40 p-6">
              <div className="font-mono text-xs uppercase tracking-wider text-cyan-400">
                System Diagnostics & OS
              </div>
              <h3 className="text-xl font-bold text-slate-100">
                Windows & Computer Support
              </h3>
              <ul className="space-y-2 text-sm font-light text-slate-300">
                <li className="flex items-center gap-2"><span className="text-cyan-400">✓</span> New computer setup & configuration</li>
                <li className="flex items-center gap-2"><span className="text-cyan-400">✓</span> Windows 10/11 installation & repair</li>
                <li className="flex items-center gap-2"><span className="text-cyan-400">✓</span> Slow computer & startup optimization</li>
                <li className="flex items-center gap-2"><span className="text-cyan-400">✓</span> Virus, malware & pop-up removal</li>
                <li className="flex items-center gap-2"><span className="text-cyan-400">✓</span> Account passwords, user profiles & cleanup</li>
                <li className="flex items-center gap-2"><span className="text-cyan-400">✓</span> Automated backup setup & cloud storage</li>
              </ul>
            </div>

            {/* HARDWARE SUPPORT */}
            <div className="glass-card space-y-4 rounded-2xl border border-slate-800 bg-slate-900/40 p-6">
              <div className="font-mono text-xs uppercase tracking-wider text-amber-400">
                Bench & Hardware Upgrades
              </div>
              <h3 className="text-xl font-bold text-slate-100">
                Hardware & Parts Replacement
              </h3>
              <ul className="space-y-2 text-sm font-light text-slate-300">
                <li className="flex items-center gap-2"><span className="text-amber-400">✓</span> High-speed SSD & hard drive upgrades</li>
                <li className="flex items-center gap-2"><span className="text-amber-400">✓</span> RAM capacity expansion</li>
                <li className="flex items-center gap-2"><span className="text-amber-400">✓</span> Power supply (PSU) replacement</li>
                <li className="flex items-center gap-2"><span className="text-amber-400">✓</span> Thermal cleaning & cooling fan service</li>
                <li className="flex items-center gap-2"><span className="text-amber-400">✓</span> Laptop battery & charging port fix</li>
                <li className="flex items-center gap-2"><span className="text-amber-400">✓</span> Seamless data transfer between PCs</li>
              </ul>
            </div>

            {/* NETWORKING */}
            <div className="glass-card glow-border space-y-4 rounded-2xl border border-cyan-500/40 bg-slate-900/70 p-6 md:col-span-2">
              <div className="font-mono text-xs uppercase tracking-wider text-cyan-400">
                Infrastructure & Connectivity
              </div>
              <h3 className="text-xl font-bold text-white">
                Networking, Wi-Fi & Smart Devices
              </h3>
              <div className="grid gap-4 md:grid-cols-2">
                <ul className="space-y-2 text-sm font-light text-slate-300">
                  <li className="flex items-center gap-2"><span className="text-cyan-400">✓</span> Wi-Fi coverage troubleshooting & speed tuning</li>
                  <li className="flex items-center gap-2"><span className="text-cyan-400">✓</span> Router & modem configuration</li>
                  <li className="flex items-center gap-2"><span className="text-cyan-400">✓</span> Whole-home Mesh Wi-Fi installation</li>
                </ul>
                <ul className="space-y-2 text-sm font-light text-slate-300">
                  <li className="flex items-center gap-2"><span className="text-cyan-400">✓</span> Wireless network printer configuration</li>
                  <li className="flex items-center gap-2"><span className="text-cyan-400">✓</span> Smart TV, camera & IoT integration</li>
                  <li className="flex items-center gap-2"><span className="text-cyan-400">✓</span> Home & office cable cleanup & routing</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        

        {/* HOURLY RATES */}
        <section id="rates" className="space-y-8 border-t border-slate-800/80 pt-12">
          <div className="text-center space-y-3">
            <h2 className="text-3xl font-extrabold tracking-tight text-white md:text-4xl">
              Transparent Hourly Pricing
            </h2>
            <p className="mx-auto max-w-xl text-sm font-mono text-slate-400">
              Clear rates with zero hidden fees. No long-term contracts required.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {/* Standard Computer Support */}
            <div className="glass-card space-y-4 rounded-2xl border border-slate-800 bg-slate-900/50 p-6 text-center">
              <div className="font-mono text-xs uppercase tracking-wider text-cyan-400">
                Software & OS
              </div>
              <h3 className="text-lg font-bold text-slate-100">
                Standard Support
              </h3>
              <div className="space-y-1">
                <p className="text-xs text-slate-400 line-through">$55.00/hr</p>
                <p className="text-3xl font-extrabold text-cyan-300">$46.25<span className="text-xs text-slate-400">/hr</span></p>
                <span className="inline-block rounded-full bg-cyan-950/80 px-2.5 py-0.5 text-[10px] font-mono font-semibold text-cyan-400 border border-cyan-500/30">
                  15% SPECIAL DISCOUNT
                </span>
              </div>
              <p className="text-xs text-slate-400">
                Windows troubleshooting, virus cleanup, optimization & software setups
              </p>
            </div>

            {/* Hardware & Upgrades */}
            <div className="glass-card glow-border relative space-y-4 rounded-2xl border border-cyan-500/50 bg-slate-900/90 p-6 text-center shadow-[0_0_30px_rgba(6,182,212,0.15)]">
              <div className="font-mono text-xs uppercase tracking-wider text-amber-400">
                Bench Repair
              </div>
              <h3 className="text-lg font-bold text-white">
                Hardware & Upgrades
              </h3>
              <div className="space-y-1">
                <p className="text-xs text-slate-400 line-through">$55.00/hr</p>
                <p className="text-3xl font-extrabold text-amber-300">$46.25<span className="text-xs text-slate-400">/hr</span></p>
                <span className="inline-block rounded-full bg-amber-950/80 px-2.5 py-0.5 text-[10px] font-mono font-semibold text-amber-400 border border-amber-500/30">
                  15% SPECIAL DISCOUNT
                </span>
              </div>
              <p className="text-xs text-slate-300">
                SSD, RAM, PSU, fan cleaning, battery replacement & physical diagnostics
              </p>
            </div>

            {/* On-site */}
            <div className="glass-card space-y-4 rounded-2xl border border-slate-800 bg-slate-900/50 p-6 text-center">
              <div className="font-mono text-xs uppercase tracking-wider text-violet-400">
                In-Person
              </div>
              <h3 className="text-lg font-bold text-slate-100">
                On-Site Technician
              </h3>
              <div className="space-y-1">
                <p className="text-xs text-slate-400 line-through">$55.00/hr</p>
                <p className="text-3xl font-extrabold text-violet-300">$46.75<span className="text-xs text-slate-400">/hr</span></p>
                <span className="inline-block rounded-full bg-violet-950/80 px-2.5 py-0.5 text-[10px] font-mono font-semibold text-violet-400 border border-violet-500/30">
                  SPECIAL OFFER
                </span>
              </div>
              <p className="text-xs text-slate-400">
                Home or office visits, full network setup, printer & device troubleshooting
              </p>
            </div>
          </div>
        </section>

        {/* Footer / Contact Terminal */}
        <footer className="space-y-6 rounded-3xl border border-slate-800 bg-slate-900/60 p-8 text-center backdrop-blur-xl md:p-12">
          <h2 className="text-3xl font-extrabold text-white">
            Need Fast, Reliable PC Tech Support?
          </h2>
          <p className="mx-auto max-w-xl text-sm text-slate-400">
            Get direct help from a certified technician who gets your hardware and software running like new.
          </p>
          <div className="pt-2">
            <a
              href="https://contact.mybabb.com/computer_tech"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block rounded-xl bg-gradient-to-r from-cyan-400 to-amber-400 px-10 py-4 font-mono text-sm font-semibold text-slate-950 shadow-[0_0_30px_rgba(34,211,238,0.3)] transition-all duration-300 hover:scale-105 hover:from-cyan-300 hover:to-amber-300"
            >
              Start My Computer Upgrade &rarr;
            </a>
          </div>
        </footer>
            <HackerBuddyBottom />
      </main>
    </div>
  );
}

export default ComputerTechPage;