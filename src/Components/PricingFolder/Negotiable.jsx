import "./Negotiable.css";

const NegotiablePricing = () => {
  return (
    <>
      {/* NEGOTIABLE RATES */}
      <section id="rates" className="space-y-8 border-t border-slate-800 pt-10">
        <h3 className="text-2xl font-semibold tracking-tight xl:text-3xl">
          Flexible & Negotiable Rates
        </h3>
        <p className="max-w-2xl text-center text-sm text-slate-200 xl:text-xl">
          Project-based or custom hourly packages tailored to your budget.
        </p>

        <div className="grid gap-6 md:grid-cols-3">
          {/* Standard */}
          <div className="rounded-2xl border border-indigo-500 bg-slate-900/70 p-6">
            <h4 className="text-sm font-semibold xl:text-xl">
              Standard Office Work
            </h4>
            <p className="text-xl text-green-300">
              Starting Rate
              <span className="text-red-400">
                <span className="text-base font-semibold text-[aliceblue]">
                  &nbsp;Flexible
                </span>
              </span>
            </p>
            <p className="mt-3 text-3xl font-semibold text-green-300">
              Negotiable
            </p>
            <p className="mt-2 text-xs text-slate-400 xl:text-base">
              Word, Excel, PowerPoint, Outlook, SharePoint, OneDrive
            </p>
          </div>

          {/* Adobe */}
          <div className="rounded-2xl border border-indigo-500 bg-slate-900/70 p-6 shadow-[0_0_0_1px_rgba(129,140,248,0.4)]">
            <h4 className="text-sm font-semibold xl:text-xl">
              Adobe Creative Cloud
            </h4>
            <p className="text-xl text-green-300">
              Per Project / Hour
              <span className="text-red-400">
                <span className="text-base font-semibold text-[aliceblue]">
                  &nbsp;Custom Scope
                </span>
              </span>
            </p>
            <p className="mt-3 text-3xl font-semibold text-green-300">
              Negotiable
            </p>
            <p className="mt-2 text-xs text-slate-400 xl:text-base">
              Photoshop, Illustrator, InDesign, Acrobat
            </p>
          </div>

          {/* Video */}
          <div className="rounded-2xl border border-indigo-500 bg-slate-900/70 p-6 shadow-[0_0_0_1px_rgba(129,140,248,0.4)]">
            <h4 className="text-sm font-semibold xl:text-xl">
              Advanced Video Editing
            </h4>
            <p className="text-xl text-green-300">
              Per Project / Hour
              <span className="text-red-400">
                <span className="text-base font-semibold text-[aliceblue]">
                  &nbsp;Custom Scope
                </span>
              </span>
            </p>
            <p className="mt-3 text-3xl font-semibold text-green-300">
              Negotiable
            </p>
            <p className="mt-2 text-xs text-slate-400 xl:text-base">
              Premiere Pro, After Effects, Adobe Audition
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-slate-800 pb-20 pt-10">
        <div className="flex flex-col gap-4 rounded-2xl border border-indigo-500/40 bg-indigo-500/10 p-6 md:flex-row md:items-center md:justify-between">
          <div>
            <h3 className="mb-2 text-lg font-semibold">
              Have a specific budget or large project in mind?
            </h3>

            <h4 className="text-sm font-semibold underline xl:text-xl">
              On-Site Office Help & Consultations
            </h4>
            <p className="text-xl text-green-300">
              Custom Agreements
              <span className="text-red-400">&nbsp;Open to offer</span>
            </p>
            <p className="mt-3 text-3xl font-semibold text-green-300">
              Let&apos;s Discuss
            </p>
            <p className="mt-2 text-xs text-slate-400 xl:text-base">
              Travel and retainer options available upon request
            </p>

            <p className="mt-2 text-sm text-slate-200 xl:text-base">
              Send over the project details or files and we can work out a rate
              that fits your timeline and budget.
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
