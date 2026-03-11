import "./CompTech.css";

import HackerBuddyBottom from "../../Components/HackerBuddyFolder/HackerBuddyBottom";

 function ComputerTechPage() {
  return (
    <div className="w-full bg-slate-950 text-slate-50">
      {/* HEADER */}
      <header className="sticky top-0 z-50 w-full border-b border-slate-800 bg-slate-950/90 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-5">
          <h1 className="text-xl font-semibold tracking-tight xl:text-3xl">
            Certified Computer Technician • PC Setup, Repair & On‑Site Support
          </h1>
          <a
            href="#rates"
            className="rounded-full bg-indigo-500 px-4 py-2 text-xs font-semibold hover:bg-indigo-400 xl:text-base"
          >
            Hourly Rates
          </a>
        </div>
      </header>

      {/* MAIN CONTENT */}
      <main className="mx-auto max-w-6xl space-y-20 px-4 pt-12 pb-4">
        {/* INTRO */}
        <section className="max-w-3xl space-y-4">
          <h2 className="text-center text-3xl font-semibold tracking-tight xl:text-4xl">
            Professional computer help when you need it.
          </h2>
          <p className="text-sm leading-relaxed text-slate-100 xl:text-base">
            I provide on‑demand computer support for homes and small businesses.
            Whether you need a new PC set up, a slow computer fixed, parts
            replaced, Windows repaired, or your Wi‑Fi and printers working
            properly, I handle everything quickly, accurately, and
            professionally — without the cost of a full‑time technician.
          </p>
        </section>

        {/* CAPABILITIES SECTION */}
        <section className="space-y-6 border-t border-slate-800 pt-10">
          <h3 className="text-xl font-semibold tracking-tight xl:text-2xl">
            What I Can Do For You (Computer Technician Capabilities)
          </h3>
          <p className="max-w-3xl text-sm text-slate-100 xl:text-base">
            These are the real, practical services I provide as a Certified
            Computer Technician. Everything below is hands‑on, reliable support
            that keeps your computers, devices, and networks running smoothly.
          </p>

          <div className="grid gap-6 md:grid-cols-2">
            {/* PC & WINDOWS SUPPORT */}
            <div className="space-y-3 rounded-xl border border-slate-800 bg-slate-900/60 p-5">
              <h4 className="text-sm font-semibold  xl:text-lg">
                Windows & Computer Support — What I Do
              </h4>
              <ul className="space-y-1 text-xs text-slate-100 xl:text-base">
                <li>• New computer setup & configuration</li>
                <li>• Windows 10/11 installation & repair</li>
                <li>• Fix slow computers & startup issues</li>
                <li>• Virus, malware & pop‑up removal</li>
                <li>• User accounts, passwords & settings</li>
                <li>• File organization & cleanup</li>
                <li>• Backup setup & cloud storage</li>
                <li>• Email setup (Outlook, Gmail, etc.)</li>
                <li>• Software installation & updates</li>
              </ul>
            </div>

            {/* HARDWARE SUPPORT */}
            <div className="space-y-3 rounded-xl border border-slate-800 bg-slate-900/60 p-5">
              <h4 className="text-sm font-semibold  xl:text-lg">
                Hardware & Parts Replacement — What I Do
              </h4>
              <ul className="space-y-1 text-xs text-slate-100 xl:text-base">
                <li>• SSD & hard drive replacement</li>
                <li>• RAM upgrades</li>
                <li>• Power supply replacement</li>
                <li>• Fan cleaning & replacement</li>
                <li>• Laptop battery replacement</li>
                <li>• Basic diagnostics & troubleshooting</li>
                <li>• PC cleanup & optimization</li>
                <li>• Data transfer between computers</li>
                <li>• New device setup (printers, scanners, etc.)</li>
              </ul>
            </div>

            {/* NETWORKING */}
            <div className="space-y-3 rounded-xl border border-slate-800 bg-slate-900/60 p-5 text-center md:col-span-2">
              <h4 className="text-sm font-semibold  xl:text-lg">
                Networking, Wi‑Fi & Device Setup
              </h4>
              <ul className="space-y-1 text-xs text-slate-100 xl:text-base">
                <li>• Wi‑Fi troubleshooting & optimization</li>
                <li>• Router setup & configuration</li>
                <li>• Mesh Wi‑Fi installation</li>
                <li>• Network printer setup</li>
                <li>• Smart device setup (TVs, cameras, etc.)</li>
                <li>• Home & small‑office network cleanup</li>
                <li>• Improve slow or unstable connections</li>
              </ul>
            </div>
          </div>
        </section>

        {/* WINDOWS SUPPORT SECTION */}
        <section className="space-y-6">
          <h3 className="text-xl font-semibold tracking-tight xl:text-2xl">
            Windows & Computer Support
          </h3>
          <p className="max-w-2xl text-sm text-slate-100 xl:text-base">
            Fast, reliable help for Windows 10/11, PC performance, software
            issues, and general troubleshooting.
          </p>

          <div className="grid gap-6 md:grid-cols-2">
            {/* Windows */}
            <div className="rounded-xl border border-slate-800 bg-slate-900/60 p-5">
              <h4 className="text-sm font-semibold xl:text-lg">
                Windows — System Support
              </h4>
              <ul className="mt-3 space-y-1 text-xs text-slate-100 xl:text-base">
                <li>• Fix slow computers</li>
                <li>• Windows reinstall/reset</li>
                <li>• Remove viruses & malware</li>
                <li>• Fix startup & login issues</li>
                <li>• Optimize performance</li>
              </ul>
            </div>

            {/* Hardware */}
            <div className="rounded-xl border border-slate-800 bg-slate-900/60 p-5">
              <h4 className="text-sm font-semibold xl:text-lg">
                Hardware — Upgrades & Repair
              </h4>
              <ul className="mt-3 space-y-1 text-xs text-slate-100 xl:text-base">
                <li>• SSD upgrades</li>
                <li>• RAM upgrades</li>
                <li>• Power supply replacement</li>
                <li>• Fan cleaning & replacement</li>
                <li>• Basic diagnostics</li>
              </ul>
            </div>

            {/* Networking */}
            <div className="rounded-xl border border-slate-800 bg-slate-900/60 p-5">
              <h4 className="text-sm font-semibold xl:text-lg">
                Networking — Wi‑Fi & Devices
              </h4>
              <ul className="mt-3 space-y-1 text-xs text-slate-100 xl:text-base">
                <li>• Wi‑Fi troubleshooting</li>
                <li>• Router setup</li>
                <li>• Mesh Wi‑Fi installation</li>
                <li>• Network printer setup</li>
                <li>• Improve slow connections</li>
              </ul>
            </div>

            {/* Printers & Devices */}
            <div className="rounded-xl border border-slate-800 bg-slate-900/60 p-5">
              <h4 className="text-sm font-semibold xl:text-lg">
                Printers & Devices
              </h4>
              <ul className="mt-3 space-y-1 text-xs text-slate-300 xl:text-base">
                <li>• Printer setup & troubleshooting</li>
                <li>• Scanner setup</li>
                <li>• Email & cloud printing</li>
                <li>• Smart device setup</li>
                <li>• Driver installation</li>
              </ul>
            </div>
          </div>
        </section>

        <HackerBuddyBottom />

        {/* HOURLY RATES */}
        <section
          id="rates"
          className="space-y-8 border-t border-slate-800 "
        >
          <h3 className="text-2xl font-semibold tracking-tight xl:text-3xl">
            Hourly Pricing
          </h3>
          <p className="max-w-2xl text-center text-sm text-slate-200 xl:text-xl">
            Simple, transparent hourly rates. No contracts. No minimums.
          </p>

          <div className="grid gap-6 md:grid-cols-3">
            {/* Standard Computer Support */}
            <div className="rounded-2xl border border-indigo-500 bg-slate-900/70 p-6">
              <h4 className="text-sm font-semibold xl:text-xl ">
                Standard Computer Support
              </h4>
              <p className="text-xl text-green-300 ">
                $45
                <span className="text-red-400">
                  &nbsp;-15%
                  <span className="text-[aliceblue] font-semibold text-base">
                    &nbsp;Winter Special
                  </span>
                </span>
              </p>
              <p className="mt-3 text-3xl font-semibold text-green-300">
                $38.25/hr
              </p>

              <p className="mt-2 text-xs text-slate-400 xl:text-base">
                Windows, troubleshooting, optimization, software issues
              </p>
            </div>

            {/* Hardware & Upgrades */}
            <div className="rounded-2xl border border-indigo-500 bg-slate-900/70 p-6 shadow-[0_0_0_1px_rgba(129,140,248,0.4)]">
              <h4 className="text-sm font-semibold xl:text-xl">
                Hardware & Parts Replacement
              </h4>

              <p className="text-xl text-green-300 ">
                $45
                <span className="text-red-400">
                  &nbsp;-15%
                  <span className="text-[aliceblue] font-semibold text-base">
                    &nbsp;Winter Special
                  </span>
                </span>
              </p>
              <p className="mt-3 text-3xl font-semibold text-green-300">
                $38.25/hr
              </p>

              <p className="mt-2 text-xs text-slate-400 xl:text-base">
                SSD, RAM, PSU, fans, batteries, diagnostics
              </p>
            </div>

            {/* On-site */}
            <div className="rounded-2xl border border-indigo-500 bg-slate-900/70 p-6 shadow-[0_0_0_1px_rgba(129,140,248,0.4)]">
              <h4 className="text-sm font-semibold xl:text-xl">
                On‑Site Technician
              </h4>

              <p className="text-xl text-green-300 ">
                $55
                <span className="text-red-400">&nbsp;-15% special offer</span>
              </p>
              <p className="mt-3 text-3xl font-semibold text-green-300">
                $46.75/hr
              </p>

              <p className="mt-2 text-xs text-slate-400 xl:text-base">
                Home or office visits, setup, troubleshooting, installation
              </p>
            </div>
          </div>

        
        </section>
        </main >
        <div className="pb-4 relative flex justify-end pr-14">
          <a
            href="https://contact.mybabb.com/computer_tech"
            target="_blank"
            rel="noopener noreferrer"
            className="">
            <button className=" rounded-lg bg-blue-600 px-8 py-4 text-white shadow-lg
                    shadow-blue-900/40 transition hover:bg-blue-700 hover:shadow-blue-800/50
                     border border-blue-400/20">
              Start My Computer Upgrade
            </button>
          </a>
          </div>
      
      
    </div>
  );
}
export default ComputerTechPage; 