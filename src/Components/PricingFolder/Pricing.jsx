import "./Pricing.css";
const Pricing = () => {
  return (
    <>
      {/* HOURLY RATES */}
      <section id="rates" className="space-y-8 border-t border-slate-800 pt-10">
        <h3 className="text-2xl font-semibold tracking-tight xl:text-3xl">
          Hourly Pricing
        </h3>
        <p className="max-w-2xl text-center text-sm text-slate-200 xl:text-xl">
          Simple, transparent hourly rates. No contracts. No minimums.
        </p>

        <div className="grid gap-6 md:grid-cols-3">
          {/* Standard */}
          <div className="rounded-2xl border border-indigo-500 bg-slate-900/70 p-6">
            <h4 className="text-sm font-semibold xl:text-xl">
              Standard Office Work
            </h4>
            <p className="text-xl text-green-300">
              $45
              <span className="text-red-400">
                &nbsp;-15%
                <span className="text-base font-semibold text-[aliceblue]">
                  &nbsp;Special
                </span>
              </span>
            </p>
            <p className="mt-3 text-3xl font-semibold text-green-300">
              {" "}
              $38.25/hr
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
              $45
              <span className="text-red-400">
                &nbsp;-15%
                <span className="text-base font-semibold text-[aliceblue]">
                  &nbsp;Special
                </span>
              </span>
            </p>
            <p className="mt-3 text-3xl font-semibold text-green-300">
              {" "}
              $38.25/hr
            </p>

            <p className="mt-2 text-xs text-slate-400 xl:text-base">
              Photoshop, Illustrator, InDesign, Acrobat
            </p>
          </div>

          <div className="rounded-2xl border border-indigo-500 bg-slate-900/70 p-6 shadow-[0_0_0_1px_rgba(129,140,248,0.4)]">
            <h4 className="text-sm font-semibold xl:text-xl">
              Advanced Video Editing
            </h4>

            <p className="text-xl text-green-300">
              $45
              <span className="text-red-400">
                &nbsp;-15%
                <span className="text-base font-semibold text-[aliceblue]">
                  &nbsp;Special
                </span>
              </span>
            </p>
            <p className="mt-3 text-3xl font-semibold text-green-300">
              {" "}
              $38.25/hr
            </p>

            <p className="mt-2 text-xs text-slate-400 xl:text-base">
              Premiere Pro, After Effects, Adobe Audition
            </p>
          </div>

          {/* On-site */}
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-slate-800 pb-20 pt-10">
        <div className="flex flex-col gap-4 rounded-2xl border border-indigo-500/40 bg-indigo-500/10 p-6 md:flex-row md:items-center md:justify-between">
          <div>
            <h3 className="mb-2 text-lg font-semibold">
              Need help with a document, graphic, or spreadsheet?
            </h3>

            <h4 className="text-sm font-semibold underline xl:text-xl">
              On-Site Office Help
            </h4>
            <p className="text-xl text-green-300">
              $55
              <span className="text-red-400">&nbsp;-15% special offer</span>
            </p>
            <p className="mt-3 text-3xl font-semibold text-green-300">
              {" "}
              $46.75/hr
            </p>
            <p className="mt-2 text-xs text-slate-400 xl:text-base">
              Travel available upon request
            </p>

            <p className="mt-2 text-sm text-slate-200 xl:text-base">
              Send me the file and I`ll give you an estimated time before I
              start.
            </p>
          </div>
          <a
            href="https://contact.mybabb.com/contactofficeops"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="rounded-full bg-indigo-500 px-6 py-2 text-xs font-semibold hover:bg-indigo-400">
              Request Office Help
            </button>
          </a>
        </div>
      </section>
    </>
  );
};

export default Pricing;
