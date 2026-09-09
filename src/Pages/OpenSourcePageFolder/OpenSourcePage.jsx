import "./OpenSourcePage.css";
import NegotiablePricing from "../../Components/PricingFolder/Negotiable"; 
import HackerBuddyBottom from "../../Components/HackerBuddyFolder/HackerBuddyBottom";

export default function OpenSourceCoderPage() {
  return (
    <div className="w-full bg-slate-950 text-slate-50">
      {/* HEADER */}
      <header className="sticky top-0 z-50 w-full border-b border-slate-800 bg-slate-950/90 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-5">
          <h1 className="text-xl font-semibold tracking-tight xl:text-3xl">
            OpenSourceCoder • Frontend React + Scripting & Automation Support
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
            Custom open-source code & web development when you need it.
          </h2>
          <p className="text-sm leading-relaxed text-slate-300 xl:text-base">
            I provide on-demand developer support specializing in React, Vite,
            Tailwind CSS, and custom automation scripts. Whether you need a slick web
            interface, automated spreadsheet workflows with PowerShell, custom keyframe 
            animations, or streaming setup fixes, I deliver clean, open-source 
            solutions on negotiable terms tailored to your project budget.
          </p>
        </section>

        {/* TALENTS SECTION */}
        <section className="space-y-6 border-t border-slate-800 pt-10">
          <h3 className="text-xl font-semibold tracking-tight xl:text-2xl">
            What I Can Do For You (OpenSourceCoder Capabilities)
          </h3>
          <p className="max-w-3xl text-sm text-slate-300 xl:text-base">
            These are practical, real-world development and automation skills I bring 
            to your web apps, scripts, and software tools. Everything below is 
            hands-on, production-ready code designed to keep your site fast, your 
            workflows automated, and your digital infrastructure reliable.
          </p>

          <div className="grid gap-6 md:grid-cols-2">
            {/* FRONTEND & REACT TALENTS */}
            <div className="space-y-3 rounded-xl border border-slate-800 bg-slate-900/60 p-5">
              <h4 className="text-sm font-semibold text-slate-100 xl:text-lg">
                Modern Frontend Development — What I Do
              </h4>
              <ul className="space-y-1 text-xs text-slate-300 xl:text-base">
                <li>• Build responsive single-page web apps with React & Vite</li>
                <li>• Style clean, modern component interfaces with Tailwind CSS</li>
                <li>• Craft custom CSS keyframe transitions and UI animations</li>
                <li>• Set up clean multi-page routing and component architecture</li>
                <li>• Fix layout bugs, media query breakages, and UI glitches</li>
                <li>• Optimize web app assets, images, and performance</li>
                <li>• Build interactive custom error (404) and special event pages</li>
                <li>• Implement responsive CSS grid and flexbox layouts</li>
              </ul>
            </div>

            {/* AUTOMATION & SCRIPTING TALENTS */}
            <div className="space-y-3 rounded-xl border border-slate-800 bg-slate-900/60 p-5">
              <h4 className="text-sm font-semibold text-slate-100 xl:text-lg">
                Scripting, Automation & Systems — What I Do
              </h4>
              <ul className="space-y-1 text-xs text-slate-300 xl:text-base">
                <li>• Write automated PowerShell scripts for bulk data handling</li>
                <li>• Automate Excel sheet formatting using Excel COM objects</li>
                <li>• Unmerge cells, fix borders, and auto-format currency data</li>
                <li>• Configure web domain rewrites, sitemaps, and .htaccess rules</li>
                <li>• Configure OBS streaming settings and high-fidelity video recording</li>
                <li>• Debug script execution issues and build directory backup flows</li>
                <li>• Optimize local dev server pipelines and deployment builds</li>
              </ul>
            </div>

            {/* INTEGRATION & OPEN SOURCE TALENTS */}
            <div className="space-y-3 rounded-xl border border-slate-800 bg-slate-900/60 p-5 text-center md:col-span-2">
              <h4 className="text-sm font-semibold text-slate-100 xl:text-lg">
                Integration, Open Source & Problem Solving
              </h4>
              <ul className="space-y-1 text-xs text-slate-300 xl:text-base">
                <li>• Refactor legacy code into modular, maintainable React components</li>
                <li>• Integrate open-source libraries and lightweight utility tools</li>
                <li>• Build custom web tools and UI components from scratch</li>
                <li>• Troubleshoot build system errors, Vite config issues, and npm dependencies</li>
                <li>• Provide clear, documented code that you fully own with zero vendor lock-in</li>
                <li>• Offer fast, flexible turnaround with negotiable rates for every project size</li>
              </ul>
            </div>
          </div>
        </section>

        {/* FRONTEND WEB DEV SECTION */}
        <section className="space-y-6">
          <h3 className="text-xl font-semibold tracking-tight xl:text-2xl">
            Frontend Web Development
          </h3>
          <p className="max-w-2xl text-sm text-slate-300 xl:text-base">
            Fast, responsive, and modern UI engineering built with open-source tools.
          </p>

          <div className="grid gap-6 md:grid-cols-2">
            {/* React & Vite */}
            <div className="rounded-xl border border-slate-800 bg-slate-900/60 p-5">
              <h4 className="text-sm font-semibold xl:text-lg">
                React & Vite Apps
              </h4>
              <ul className="mt-3 space-y-1 text-xs text-slate-300 xl:text-base">
                <li>• Single Page Applications (SPAs)</li>
                <li>• Modular component architecture</li>
                <li>• State management & React Router</li>
                <li>• Fast Vite build setups</li>
                <li>• Clean, scalable codebases</li>
              </ul>
            </div>

            {/* Tailwind CSS & FX */}
            <div className="rounded-xl border border-slate-800 bg-slate-900/60 p-5">
              <h4 className="text-sm font-semibold xl:text-lg">
                Tailwind CSS & Styling
              </h4>
              <ul className="mt-3 space-y-1 text-xs text-slate-300 xl:text-base">
                <li>• Mobile-first responsive UI</li>
                <li>• Custom keyframe CSS animations</li>
                <li>• Dark mode & custom theme palettes</li>
                <li>• Animated tooltips & interactive cards</li>
                <li>• Pixel-perfect layout alignment</li>
              </ul>
            </div>

            {/* Custom UI Components */}
            <div className="rounded-xl border border-slate-800 bg-slate-900/60 p-5">
              <h4 className="text-sm font-semibold xl:text-lg">
                Custom Page Components
              </h4>
              <ul className="mt-3 space-y-1 text-xs text-slate-300 xl:text-base">
                <li>• Custom 404 & landing pages</li>
                <li>• Multi-column pricing & feature tables</li>
                <li>• Special event & promotional views</li>
                <li>• Reusable UI element libraries</li>
                <li>• Dynamic routing layouts</li>
              </ul>
            </div>

            {/* Web Setup & Deployment */}
            <div className="rounded-xl border border-slate-800 bg-slate-900/60 p-5">
              <h4 className="text-sm font-semibold xl:text-lg">
                Domain & Server Setup
              </h4>
              <ul className="mt-3 space-y-1 text-xs text-slate-300 xl:text-base">
                <li>• Multi-domain web deployment</li>
                <li>• XML sitemap generation & SEO tags</li>
                <li>• .htaccess URL rewrite configurations</li>
                <li>• Static asset optimization & cdn prep</li>
                <li>• HTTPS and redirection setup</li>
              </ul>
            </div>
          </div>
        </section>

        <HackerBuddyBottom />

        {/* SCRIPTING & AUTOMATION SECTION */}
        <section className="space-y-6">
          <h3 className="text-xl font-semibold tracking-tight xl:text-2xl">
            Scripting, Automation & Media
          </h3>
          <p className="max-w-2xl text-sm text-slate-300 xl:text-base">
            Custom desktop scripts, Excel automation, and streaming pipeline setup.
          </p>

          <div className="grid gap-6 md:grid-cols-2">
            {/* PowerShell */}
            <div className="rounded-xl border border-slate-800 bg-slate-900/60 p-5">
              <h4 className="text-sm font-semibold xl:text-lg">
                PowerShell Automation
              </h4>
              <ul className="mt-3 space-y-1 text-xs text-slate-300 xl:text-base">
                <li>• Automated file & folder processing</li>
                <li>• Directory cleanup and backup scripts</li>
                <li>• Scheduled system task automation</li>
                <li>• Bulk file renaming and conversion</li>
                <li>• Custom CLI tools and utilities</li>
              </ul>
            </div>

            {/* Excel COM */}
            <div className="rounded-xl border border-slate-800 bg-slate-900/60 p-5">
              <h4 className="text-sm font-semibold xl:text-lg">
                Excel COM Scripting
              </h4>
              <ul className="mt-3 space-y-1 text-xs text-slate-300 xl:text-base">
                <li>• Auto-unmerge multi-cell workbooks</li>
                <li>• Custom cell border & color formatting</li>
                <li>• Automated financial currency formatting</li>
                <li>• Multi-file batch spreadsheet fixes</li>
                <li>• Raw data cleanup into formatted tables</li>
              </ul>
            </div>

            {/* OBS & Media Recording */}
            <div className="rounded-xl border border-slate-800 bg-slate-900/60 p-5">
              <h4 className="text-sm font-semibold xl:text-lg">
                OBS & Media Setup
              </h4>
              <ul className="mt-3 space-y-1 text-xs text-slate-300 xl:text-base">
                <li>• Open Broadcaster Software (OBS) config</li>
                <li>• High-fidelity MP4 video recording</li>
                <li>• Audio bitrate and output tuning</li>
                <li>• Custom stream overlays and sources</li>
                <li>• Video capture scene management</li>
              </ul>
            </div>

            {/* AI Prompts & Workflow */}
            <div className="rounded-xl border border-slate-800 bg-slate-900/60 p-5">
              <h4 className="text-sm font-semibold xl:text-lg">
                AI & Workflow Tools
              </h4>
              <ul className="mt-3 space-y-1 text-xs text-slate-300 xl:text-base">
                <li>• Stable Diffusion inpainting prompts</li>
                <li>• Background replacement workflows</li>
                <li>• Prompt engineering for UI graphics</li>
                <li>• Rapid prototyping with AI tools</li>
                <li>• Open-source tool integrations</li>
              </ul>
            </div>
          </div>
        </section>

        <NegotiablePricing />
      </main>
    </div>
  );
}