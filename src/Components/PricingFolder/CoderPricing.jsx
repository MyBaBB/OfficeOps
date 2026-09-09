import "./CoderPricing.css";

const NegotiablePricing = () => {
  return (
    <>
      {/* NEGOTIABLE RATES */}
      <section id="rates" className="space-y-8 border-t border-slate-800 pt-10">
        <h3 className="text-2xl font-semibold tracking-tight xl:text-3xl">
          Simple, Negotiable Pricing
        </h3>
        <p className="max-w-2xl text-center text-sm text-slate-200 xl:text-xl">
          Straightforward rates for clean UI work, small features, and
          automation tools.
        </p>

        <div className="grid gap-6 md:grid-cols-3">
          {/* Frontend */}
          <div className="rounded-2xl border border-indigo-500 bg-slate-900/70 p-6">
            <h4 className="text-sm font-semibold xl:text-xl">Frontend Work</h4>
            <p className="text-xl text-green-300">Per Project / Hour</p>
            <p className="mt-3 text-3xl font-semibold text-green-300">
              Negotiable
            </p>
            <p className="mt-2 text-xs text-slate-400 xl:text-base">
              React components, page layouts, Tailwind styling, responsive
              fixes.
            </p>
          </div>

          {/* Automation */}
          <div className="rounded-2xl border border-indigo-500 bg-slate-900/70 p-6 shadow-[0_0_0_1px_rgba(129,140,248,0.4)]">
            <h4 className="text-sm font-semibold xl:text-xl">
              Automation Scripts
            </h4>
            <p className="text-xl text-green-300">Per Project / Hour</p>
            <p className="mt-3 text-3xl font-semibold text-green-300">
              Negotiable
            </p>
            <p className="mt-2 text-xs text-slate-400 xl:text-base">
              PowerShell tools, Excel cleanup scripts, file utilities.
            </p>
          </div>

          {/* Features */}
          <div className="rounded-2xl border border-indigo-500 bg-slate-900/70 p-6 shadow-[0_0_0_1px_rgba(129,140,248,0.4)]">
            <h4 className="text-sm font-semibold xl:text-xl">
              Custom Features
            </h4>
            <p className="text-xl text-green-300">Per Project / Hour</p>
            <p className="mt-3 text-3xl font-semibold text-green-300">
              Negotiable
            </p>
            <p className="mt-2 text-xs text-slate-400 xl:text-base">
              Interactive tools, page logic, small apps, API connections.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-slate-800 pb-20 pt-10">
        <div className="flex flex-col gap-4 rounded-2xl border border-indigo-500/40 bg-indigo-500/10 p-6 md:flex-row md:items-center md:justify-between">
          <div>
            <h3 className="mb-2 text-lg font-semibold">
              Need a small feature, UI fix, or automation script?
            </h3>

            <h4 className="text-sm font-semibold underline xl:text-xl">
              Custom Work Available
            </h4>
            <p className="text-xl text-green-300">Flexible Pricing</p>
            <p className="mt-3 text-3xl font-semibold text-green-300">
              Let&apos;s Talk
            </p>
            <p className="mt-2 text-xs text-slate-400 xl:text-base">
              Send your idea, issue, or feature request — I’ll give you a simple
              estimate.
            </p>

            <p className="mt-2 text-sm text-slate-200 xl:text-base">
              No complicated contracts. Just clear work and clear pricing.
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
