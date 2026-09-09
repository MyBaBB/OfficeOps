import "./OpenSourcePage.css";
import CoderPricing from "../../Components/PricingFolder/CoderPricing"; 
import HackerBuddyBottom from "../../Components/HackerBuddyFolder/HackerBuddyBottom";

export default function OpenSourceCoderPage() {
  return (
    <div className="w-full bg-slate-950 text-slate-50">
      {/* HEADER */}
      <header className="sticky top-0 z-50 w-full border-b border-slate-800 bg-slate-950/90 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-5">
          <h1 className="text-xl font-semibold tracking-tight xl:text-3xl">
            OpenSourceCoder • Custom Frontend React & Automation Scripting
          </h1>
          <a
            href="#rates"
            className="rounded-full bg-indigo-500 px-4 py-2 text-xs font-semibold hover:bg-indigo-400 xl:text-base"
          >
            Negotiable Rates
          </a>
        </div>
      </header>

      {/* MAIN CONTENT */}
      <main className="mx-auto max-w-6xl space-y-20 px-4 py-12">
        {/* INTRO */}
        <section className="max-w-3xl space-y-4">
          <h2 className="text-center text-3xl font-semibold tracking-tight xl:text-4xl">
            Custom open-source coding & script automation built to spec.
          </h2>
          <p className="text-sm leading-relaxed text-slate-300 xl:text-base">
            I provide specialized, on-demand developer support with a focus on custom React components, Vite setups,
            Tailwind CSS UI design, and desktop automation scripts. Whether you need a responsive web application feature,
            automated spreadsheet workflows with PowerShell, custom keyframe animations, or OBS media recording setups,
            I deliver clean, modular code on flexible, negotiable terms tailored to your scope and budget.
          </p>
        </section>

        {/* TALENTS SECTION */}
        <section className="space-y-6 border-t border-slate-800 pt-10">
          <h3 className="text-xl font-semibold tracking-tight xl:text-2xl">
            What I Can Do For You (OpenSourceCoder Capabilities)
          </h3>
          <p className="max-w-3xl text-sm text-slate-300 xl:text-base">
            Practical, hands-on custom coding and task automation for web interfaces and desktop workflows.
            Every solution is production-ready, well-documented, and fully open-source to ensure long-term stability and full owner control.
          </p>

          <div className="grid gap-6 md:grid-cols-2">
            {/* FRONTEND & REACT TALENTS */}
            <div className="space-y-3 rounded-xl border border-slate-800 bg-slate-900/60 p-5">
              <h4 className="text-sm font-semibold text-slate-100 xl:text-lg">
                Frontend & UI Component Engineering
              </h4>
              <ul className="space-y-1 text-xs text-slate-300 xl:text-base">
                <li>• Build responsive single-page web apps with React & Vite</li>
                <li>• Style clean, modern component interfaces with Tailwind CSS</li>
                <li>• Craft custom CSS keyframe transitions & interactive UI animations</li>
                <li>• Structure multi-page routing and modular component architecture</li>
                <li>• Fix responsive layout bugs, breakpoint breakages & CSS glitches</li>
                <li>• Build custom interactive 404 pages and promotional event layouts</li>
                <li>• Optimize component rendering, asset sizes & page load performance</li>
                <li>• Implement flexible Flexbox and CSS Grid component layouts</li>
              </ul>
            </div>

            {/* AUTOMATION & SCRIPTING TALENTS */}
            <div className="space-y-3 rounded-xl border border-slate-800 bg-slate-900/60 p-5">
              <h4 className="text-sm font-semibold text-slate-100 xl:text-lg">
                Scripting, Automation & System Utilities
              </h4>
              <ul className="space-y-1 text-xs text-slate-300 xl:text-base">
                <li>• Write automated PowerShell scripts for file management & desktop tasks</li>
                <li>• Automate Excel spreadsheet formatting using COM automation objects</li>
                <li>• Unmerge cells, fix borders, auto-format currency & cleanse raw data</li>
                <li>• Configure domain rewrites, sitemap generation & .htaccess rules</li>
                <li>• Configure OBS recording settings and high-fidelity video pipelines</li>
                <li>• Build directory backup scripts and automated batch file handlers</li>
                <li>• Troubleshoot Vite config issues, build errors & local dev environments</li>
              </ul>
            </div>

            {/* INTEGRATION & OPEN SOURCE TALENTS */}
            <div className="space-y-3 rounded-xl border border-slate-800 bg-slate-900/60 p-5 text-center md:col-span-2">
              <h4 className="text-sm font-semibold text-slate-100 xl:text-lg">
                Custom Scripting, Code Refactoring & Problem Solving
              </h4>
              <ul className="space-y-1 text-xs text-slate-300 xl:text-base">
                <li>• Refactor legacy code into clean, maintainable React components</li>
                <li>• Build custom single-purpose scripts and UI elements from scratch</li>
                <li>• Integrate open-source JavaScript libraries & utility toolkits</li>
                <li>• Troubleshoot package dependency conflicts, npm errors, and build pipelines</li>
                <li>• Deliver fully documented code that you own completely with zero vendor lock-in</li>
                <li>• Offer flexible project-based or custom hourly packages tailored to your budget</li>
              </ul>
            </div>
          </div>
        </section>

        {/* FRONTEND WEB DEV SECTION */}
        <section className="space-y-6">
          <h3 className="text-xl font-semibold tracking-tight xl:text-2xl">
            Custom Frontend Engineering
          </h3>
          <p className="max-w-2xl text-sm text-slate-300 xl:text-base">
            Fast, responsive, and visually appealing web interfaces engineered with modern React and Tailwind CSS.
          </p>

          <div className="grid gap-6 md:grid-cols-2">
            {/* React & Vite */}
            <div className="rounded-xl border border-slate-800 bg-slate-900/60 p-5">
              <h4 className="text-sm font-semibold xl:text-lg">
                React & Vite Applications
              </h4>
              <ul className="mt-3 space-y-1 text-xs text-slate-300 xl:text-base">
                <li>• Modern Single Page Applications (SPAs)</li>
                <li>• Modular, reusable component architecture</li>
                <li>• State management & React Router integration</li>
                <li>• Fast Vite build setups & development servers</li>
                <li>• Scalable, clean codebases designed for growth</li>
              </ul>
            </div>

            {/* Tailwind CSS & FX */}
            <div className="rounded-xl border border-slate-800 bg-slate-900/60 p-5">
              <h4 className="text-sm font-semibold xl:text-lg">
                Tailwind CSS & Styling
              </h4>
              <ul className="mt-3 space-y-1 text-xs text-slate-300 xl:text-base">
                <li>• Mobile-first, fully responsive layouts</li>
                <li>• Custom keyframe CSS animations & transitions</li>
                <li>• Dark mode UI setups & custom color palettes</li>
                <li>• Interactive tooltips, cards & UI components</li>
                <li>• Pixel-perfect layout alignment & design translation</li>
              </ul>
            </div>

            {/* Custom UI Components */}
            <div className="rounded-xl border border-slate-800 bg-slate-900/60 p-5">
              <h4 className="text-sm font-semibold xl:text-lg">
                Custom Page Components
              </h4>
              <ul className="mt-3 space-y-1 text-xs text-slate-300 xl:text-base">
                <li>• Custom 404 showcase pages & landing views</li>
                <li>• Multi-column pricing & comparison tables</li>
                <li>• Special event pages with animated details</li>
                <li>• Reusable UI component libraries</li>
                <li>• Dynamic routing structures</li>
              </ul>
            </div>

            {/* Web Setup & Deployment */}
            <div className="rounded-xl border border-slate-800 bg-slate-900/60 p-5">
              <h4 className="text-sm font-semibold xl:text-lg">
                Domain & Server Configuration
              </h4>
              <ul className="mt-3 space-y-1 text-xs text-slate-300 xl:text-base">
                <li>• Multi-domain web deployment setups</li>
                <li>• XML sitemap generation & meta tag SEO</li>
                <li>• .htaccess URL rewrite configurations</li>
                <li>• Static asset optimization & performance prep</li>
                <li>• HTTPS and redirection setup</li>
              </ul>
            </div>
          </div>
        </section>

        <HackerBuddyBottom />

        {/* SCRIPTING & AUTOMATION SECTION */}
        <section className="space-y-6">
          <h3 className="text-xl font-semibold tracking-tight xl:text-2xl">
            Custom Scripting & Task Automation
          </h3>
          <p className="max-w-2xl text-sm text-slate-300 xl:text-base">
            PowerShell tools, Excel COM object scripts, and custom media workflows designed to save time.
          </p>

          <div className="grid gap-6 md:grid-cols-2">
            {/* PowerShell */}
            <div className="rounded-xl border border-slate-800 bg-slate-900/60 p-5">
              <h4 className="text-sm font-semibold xl:text-lg">
                PowerShell Automation
              </h4>
              <ul className="mt-3 space-y-1 text-xs text-slate-300 xl:text-base">
                <li>• Automated file & directory management</li>
                <li>• Dedicated directory cleanup & backup scripts</li>
                <li>• Scheduled desktop task automation</li>
                <li>• Bulk file renaming and conversion utilities</li>
                <li>• Custom CLI scripts for routine tasks</li>
              </ul>
            </div>

            {/* Excel COM */}
            <div className="rounded-xl border border-slate-800 bg-slate-900/60 p-5">
              <h4 className="text-sm font-semibold xl:text-lg">
                Excel COM Scripting
              </h4>
              <ul className="mt-3 space-y-1 text-xs text-slate-300 xl:text-base">
                <li>• Auto-unmerge multi-cell workbooks</li>
                <li>• Custom cell borders, styling, and color fills</li>
                <li>• Automated currency and numerical formatting</li>
                <li>• Multi-file batch spreadsheet processing</li>
                <li>• Raw data extraction into structured tables</li>
              </ul>
            </div>

            {/* OBS & Media Recording */}
            <div className="rounded-xl border border-slate-800 bg-slate-900/60 p-5">
              <h4 className="text-sm font-semibold xl:text-lg">
                OBS & Media Recording Setup
              </h4>
              <ul className="mt-3 space-y-1 text-xs text-slate-300 xl:text-base">
                <li>• OBS Studio configuration for clean video capture</li>
                <li>• High-fidelity MP4 recording optimization</li>
                <li>• Audio bitrate and multitrack output tuning</li>
                <li>• Custom stream overlays & scene management</li>
                <li>• Digital media capture pipelines</li>
              </ul>
            </div>

            {/* AI Prompts & Workflow */}
            <div className="rounded-xl border border-slate-800 bg-slate-900/60 p-5">
              <h4 className="text-sm font-semibold xl:text-lg">
                Generative AI & Utility Tools
              </h4>
              <ul className="mt-3 space-y-1 text-xs text-slate-300 xl:text-base">
                <li>• Stable Diffusion inpainting prompt tuning</li>
                <li>• Background replacement & image editing setups</li>
                <li>• Prompt engineering for custom UI assets</li>
                <li>• Rapid UI component prototyping</li>
                <li>• Utility library integration</li>
              </ul>
            </div>
          </div>
        </section>

        {/* PRICING COMPONENT */}
        <CoderPricing />
      </main>
    </div>
  );
}