import "./CoderPricing.css";

const NegotiablePricing = () => {
  return (
    <>
      {/* NEGOTIABLE RATES */}
      <section
        id="rates"
        className="space-y-8 border-t border-slate-800 pt-10"
      >
        <h3 className="text-2xl font-semibold tracking-tight xl:text-3xl">
          Custom Development & Scripting Rates
        </h3>
        <p className="max-w-2xl text-center text-sm text-slate-200 xl:text-xl">
          Flexible project-based estimates or custom hourly packages built around your specific code requirements.
        </p>

        <div className="grid gap-6 md:grid-cols-3">
          {/* Custom Web Components */}
          <div className="rounded-2xl border border-indigo-500 bg-slate-900/70 p-6">
            <h4 className="text-sm font-semibold xl:text-xl">
              Frontend & UI Development
            </h4>
            <p className="text-xl text-green-300">
              Starting Rate
              <span className="text-red-400">
                <span className="font-semibold text-base text-[aliceblue]">
                  &nbsp;Flexible Scope
                </span>
              </span>
            </p>
            <p className="mt-3 text-3xl font-semibold text-green-300">
              Negotiable
            </p>
            <p className="mt-2 text-xs text-slate-400 xl:text-base">
              React, Vite, Tailwind CSS, Custom UI Components, Keyframe Animations & Responsive Layouts
            </p>
          </div>

          {/* Automation & Workflow Scripts */}
          <div className="rounded-2xl border border-indigo-500 bg-slate-900/70 p-6 shadow-[0_0_0_1px_rgba(129,140,248,0.4)]">
            <h4 className="text-sm font-semibold xl:text-xl">
              Scripting & Automation
            </h4>
            <p className="text-xl text-green-300">
              Per Project / Hour
              <span className="text-red-400">
                <span className="font-semibold text-base text-[aliceblue]">
                  &nbsp;Custom Scope
                </span>
              </span>
            </p>
            <p className="mt-3 text-3xl font-semibold text-green-300">
              Negotiable
            </p>
            <p className="mt-2 text-xs text-slate-400 xl:text-base">
              PowerShell Tools, Spreadsheet/Excel COM Automation, File Utilities & Task Scripts
            </p>
          </div>

          {/* Custom Web Apps & Integration */}
          <div className="rounded-2xl border border-indigo-500 bg-slate-900/70 p-6 shadow-[0_0_0_1px_rgba(129,140,248,0.4)]">
            <h4 className="text-sm font-semibold xl:text-xl">
              Custom Feature Engineering
            </h4>
            <p className="text-xl text-green-300">
              Per Project / Hour
              <span className="text-red-400">
                <span className="font-semibold text-base text-[aliceblue]">
                  &nbsp;Tailored Build
                </span>
              </span>
            </p>
            <p className="mt-3 text-3xl font-semibold text-green-300">
              Negotiable
            </p>
            <p className="mt-2 text-xs text-slate-400 xl:text-base">
              Interactive Tools, Dynamic Page Logic, Single-Page Applications & API Integrations
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-slate-800 pb-20 pt-10">
        <div className="flex flex-col gap-4 rounded-2xl border border-indigo-500/40 bg-indigo-500/10 p-6 md:flex-row md:items-center md:justify-between">
          <div>
            <h3 className="mb-2 text-lg font-semibold">
              Have a specialized coding project or custom script in mind?
            </h3>

            <h4 className="text-sm font-semibold underline xl:text-xl">
              Custom Scripting & Code Refactoring
            </h4>
            <p className="text-xl text-green-300">
              Custom Agreements
              <span className="text-red-400">&nbsp;Open to offer</span>
            </p>
            <p className="mt-3 text-3xl font-semibold text-green-300">
              Let&apos;s Discuss
            </p>
            <p className="mt-2 text-xs text-slate-400 xl:text-base">
              One-off scripts, full interface builds, or custom logic development available upon request
            </p>

            <p className="mt-2 text-sm text-slate-200 xl:text-base">
              Send over your project specs, component requirements, or wireframes and we can work out a rate that fits your budget.
            </p>
          </div>
          <a
            href="https://contact.mybabb.com/contactofficeops"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="rounded-full bg-indigo-500 px-6 py-2 text-xs font-semibold hover:bg-indigo-400">
              Get an Estimate
            </button>
          </a>
        </div>
      </section>
    </>
  );
};

export default NegotiablePricing;