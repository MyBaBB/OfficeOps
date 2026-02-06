import "./OfficeOps.css";

export default function OfficeOpsPage() {
  return (
    <div className="w-full bg-slate-950 text-slate-50">

      {/* HEADER */}
      <header className="w-full sticky top-0 z-50 border-b border-slate-800 bg-slate-950/90 backdrop-blur">
        <div className="mx-auto max-w-6xl px-4 py-5 flex items-center justify-between">
          <h1 className="text-xl xl:text-3xl font-semibold tracking-tight">
            OfficeOps • Microsoft 365 + Adobe Creative Cloud Support
          </h1>
          <a
            href="#rates"
            className="rounded-full bg-indigo-500 px-4 py-2 text-xs xl:text-base font-semibold hover:bg-indigo-400"
          >
            Hourly Rates
          </a>
        </div>
      </header>

      {/* MAIN CONTENT */}
      <main className="mx-auto max-w-6xl px-4 py-12 space-y-20">

        {/* INTRO */}
        <section className="max-w-3xl space-y-4">
          <h2 className="text-3xl xl:text-4xl text-center font-semibold tracking-tight">
            Professional office support when you need it.
          </h2>
          <p className="text-slate-300 text-sm xl:text-base leading-relaxed">
            I provide on-demand office help using Microsoft 365 and Adobe
            Creative Cloud. Whether you need documents cleaned up, spreadsheets
            fixed, graphics created, or presentations rebuilt, I handle the work
            quickly, accurately, and professionally — without the cost of a
            full-time hire.
          </p>
        </section>

        {/* TALENTS SECTION */}
        <section className="space-y-6 border-t border-slate-800 pt-10">
          <h3 className="text-xl xl:text-2xl font-semibold tracking-tight">
            What I Can Do For You (OfficeOps Capabilities)
          </h3>
          <p className="text-sm xl:text-base   text-slate-300 max-w-3xl">
            These are the real, practical skills I bring to your business using 
            Microsoft 365 and Adobe Creative Cloud. Everything below is hands-on, 
            production-ready support that keeps your office running smoothly and 
            your documents, graphics, and workflows clean and professional.
          </p>

          <div className="grid gap-6 md:grid-cols-2">

            {/* MICROSOFT 365 TALENTS */}
            <div className="rounded-xl border border-slate-800 bg-slate-900/60 p-5 space-y-3">
              <h4 className="text-sm  xl:text-lg font-semibold text-slate-100">
                Microsoft 365 — What I Do
              </h4>
              <ul className="text-xs xl:text-base text-slate-300 space-y-1">
                <li>• Clean up messy Word documents and rebuild them professionally</li>
                <li>• Fix headers, footers, spacing, margins, and TOCs</li>
                <li>• Create branded templates for proposals, reports, and contracts</li>
                <li>• Repair broken Excel formulas and rebuild logic</li>
                <li>• Create dashboards, trackers, and calculators</li>
                <li>• Clean and organize multi-sheet Excel workbooks</li>
                <li>• Rebuild outdated PowerPoint decks into clean, modern slides</li>
                <li>• Create branded PowerPoint templates for recurring meetings</li>
                <li>• Add charts, graphics, animations, and transitions</li>
                <li>• Organize Outlook inboxes, folders, rules, and signatures</li>
                <li>• Set up SharePoint/OneDrive shared drives and fix sync issues</li>
                <li>• Improve team workflows and document organization systems</li>
              </ul>
            </div>

            {/* ADOBE TALENTS */}
            <div className="rounded-xl border border-slate-800 bg-slate-900/60 p-5 space-y-3">
              <h4 className="text-sm xl:text-lg font-semibold text-slate-100">
                Adobe Creative Cloud — What I Do
              </h4>
              <ul className="text-xs xl:text-base text-slate-300 space-y-1">
                <li>• Resize, optimize, and clean up images in Photoshop</li>
                <li>• Remove backgrounds and fix lighting/color issues</li>
                <li>• Create social graphics, banners, and thumbnails</li>
                <li>• Clean up Illustrator vector files and rebuild logos</li>
                <li>• Create icons, badges, and simple illustrations</li>
                <li>• Convert artwork to vector and prep for print</li>
                <li>• Build brochures, flyers, and one-pagers in InDesign</li>
                <li>• Create branded InDesign templates for recurring documents</li>
                <li>• Prepare print-ready PDFs with bleeds and crop marks</li>
                <li>• Perform simple Premiere Pro video edits and add titles/captions</li>
                <li>• Compress videos for email, web, or social</li>
                <li>• Clean up PDFs, combine/split pages, and optimize file size</li>
              </ul>
            </div>

            {/* WORKFLOW TALENTS */}
            <div className="rounded-xl text-center border border-slate-800 bg-slate-900/60 p-5 space-y-3 md:col-span-2">
              <h4 className="text-sm  xl:text-lg font-semibold text-slate-100">
                Workflow, Integration & Problem Solving
              </h4>
              <ul className="text-xs xl:text-base text-slate-300 space-y-1">
                <li>• Build smooth pipelines between Adobe CC and Microsoft 365</li>
                <li>• Create shared asset libraries and template systems</li>
                <li>• Standardize branding across documents, slides, and graphics</li>
                <li>• Fix corrupted files, broken documents, and sync issues</li>
                <li>• Rebuild assets when originals are missing or unusable</li>
                <li>• Improve team workflows and reduce repetitive tasks</li>
                <li>• Provide fast, accurate turnaround with minimal instructions needed</li>
              </ul>
            </div>

          </div>
        </section>

        {/* MICROSOFT 365 SECTION */}
        <section className="space-y-6">
          <h3 className="text-xl xl:text-2xl font-semibold tracking-tight">
            Microsoft 365 Support
          </h3>
          <p className="text-sm xl:text-base text-slate-300 max-w-2xl">
            Fast, reliable help across Word, Excel, PowerPoint, Outlook,
            SharePoint, and OneDrive.
          </p>

          <div className="grid gap-6 md:grid-cols-2">
            {/* Word */}
            <div className="rounded-xl border border-slate-800 bg-slate-900/60 p-5">
              <h4 className="text-sm xl:text-lg font-semibold">Word — Documents</h4>
              <ul className="mt-3 text-xs xl:text-base text-slate-300 space-y-1">
                <li>• Clean up messy documents</li>
                <li>• Create branded templates</li>
                <li>• Fix headers, footers, spacing, TOCs</li>
                <li>• Convert documents to PDF</li>
                <li>• Build forms, contracts, reports</li>
              </ul>
            </div>

            {/* Excel */}
            <div className="rounded-xl border border-slate-800 bg-slate-900/60 p-5">
              <h4 className="text-sm xl:text-lg font-semibold">Excel — Spreadsheets</h4>
              <ul className="mt-3 text-xs xl:text-base text-slate-300 space-y-1">
                <li>• Fix broken formulas</li>
                <li>• Build calculators & trackers</li>
                <li>• Create dashboards & charts</li>
                <li>• Clean up data & formatting</li>
                <li>• Organize multi-sheet workbooks</li>
              </ul>
            </div>

            {/* PowerPoint */}
            <div className="rounded-xl border border-slate-800 bg-slate-900/60 p-5">
              <h4 className="text-sm xl:text-lg font-semibold">PowerPoint — Slides</h4>
              <ul className="mt-3 text-xs xl:text-base text-slate-300 space-y-1">
                <li>• Rebuild outdated slide decks</li>
                <li>• Create branded templates</li>
                <li>• Add charts, graphics, animations</li>
                <li>• Fix layout & alignment</li>
                <li>• Export to PDF or video</li>
              </ul>
            </div>

            {/* Outlook / SharePoint */}
            <div className="rounded-xl border border-slate-800 bg-slate-900/60 p-5">
              <h4 className="text-sm xl:text-lg font-semibold">
                Outlook, SharePoint & OneDrive
              </h4>
              <ul className="mt-3 text-xs xl:text-base text-slate-300 space-y-1">
                <li>• Organize inboxes & folders</li>
                <li>• Set up shared drives</li>
                <li>• Fix sync issues</li>
                <li>• Create shared templates</li>
                <li>• Improve team workflows</li>
              </ul>
            </div>
          </div>
        </section>

        {/* ADOBE SECTION */}
        <section className="space-y-6">
          <h3 className="text-xl xl:text-2xl font-semibold tracking-tight">
            Adobe Creative Cloud Support
          </h3>
          <p className="text-sm xl:text-base text-slate-300 max-w-2xl">
            Clean, professional graphics and document support across Photoshop,
            Illustrator, InDesign, Premiere Pro, and Acrobat.
          </p>

          <div className="grid gap-6 md:grid-cols-2">
            {/* Photoshop */}
            <div className="rounded-xl border border-slate-800 bg-slate-900/60 p-5">
              <h4 className="text-sm xl:text-lg font-semibold">Photoshop — Graphics</h4>
              <ul className="mt-3 text-xs xl:text-base text-slate-300 space-y-1">
                <li>• Resize and optimize images</li>
                <li>• Remove backgrounds</li>
                <li>• Create social graphics & banners</li>
                <li>• Fix lighting & color</li>
                <li>• Prep images for print/web</li>
              </ul>
            </div>

            {/* Illustrator */}
            <div className="rounded-xl border border-slate-800 bg-slate-900/60 p-5">
              <h4 className="text-sm xl:text-lg font-semibold">Illustrator — Vector</h4>
              <ul className="mt-3 text-xs xl:text-base text-slate-300 space-y-1">
                <li>• Clean up vector files</li>
                <li>• Rebuild logos</li>
                <li>• Create icons & simple graphics</li>
                <li>• Convert artwork to vector</li>
                <li>• Prep files for print</li>
              </ul>
            </div>

            {/* InDesign */}
            <div className="rounded-xl border border-slate-800 bg-slate-900/60 p-5">
              <h4 className="text-sm xl:text-lg font-semibold">InDesign — Layout</h4>
              <ul className="mt-3 text-xs xl:text-base text-slate-300 space-y-1">
                <li>• Build brochures & one-pagers</li>
                <li>• Create branded templates</li>
                <li>• Fix layout & typography</li>
                <li>• Prepare print-ready PDFs</li>
                <li>• Convert Word docs to clean layouts</li>
              </ul>
            </div>

            {/* Premiere / Acrobat */}
            <div className="rounded-xl border border-slate-800 bg-slate-900/60 p-5">
              <h4 className="text-sm xl:text-lg font-semibold">
                Premiere Pro & Acrobat
              </h4>
              <ul className="mt-3 text-xs xl:text-base text-slate-300 space-y-1">
                <li>• Simple video edits</li>
                <li>• Add titles & captions</li>
                <li>• Compress videos</li>
                <li>• Clean up PDFs</li>
                <li>• Combine, split, optimize PDFs</li>
              </ul>
            </div>
          </div>
        </section>

        {/* HOURLY RATES */}
        <section id="rates" className="space-y-8 border-t border-slate-800 pt-10">
          <h3 className="text-2xl xl:text-3xl font-semibold tracking-tight">
            Hourly Pricing
          </h3>
          <p className="text-sm xl:text-base text-slate-300 max-w-2xl">
            Simple, transparent hourly rates. No contracts. No minimums.
          </p>

          <div className="grid gap-6 md:grid-cols-3">
            {/* Standard */}
            <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
              <h4 className="text-sm xl:text-lg font-semibold">Standard Office Work</h4>
              <p className="mt-3 text-3xl font-semibold">$35/hr</p>
              <p className="mt-2 text-xs xl:text-base text-slate-400">
                Word, Excel, PowerPoint, Outlook, SharePoint, OneDrive
              </p>
            </div>

            {/* Adobe */}
            <div className="rounded-2xl border border-indigo-500 bg-slate-900/70 p-6 shadow-[0_0_0_1px_rgba(129,140,248,0.4)]">
              <h4 className="text-sm xl:text-lg font-semibold">Adobe Creative Cloud</h4>
              <p className="mt-3 text-3xl font-semibold">$45/hr</p>
              <p className="mt-2 text-xs xl:text-base text-slate-400">
                Photoshop, Illustrator, InDesign, Acrobat, Premiere Pro
              </p>
            </div>

            {/* On-site */}
            <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
              <h4 className="text-sm xl:text-lg font-semibold">On-Site Office Help</h4>
              <p className="mt-3 text-3xl font-semibold">$60/hr</p>
              <p className="mt-2 text-xs xl:text-base text-slate-400">
                Travel available upon request
              </p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="border-t border-slate-800 pt-10 pb-20">
          <div className="rounded-2xl border border-indigo-500/40 bg-indigo-500/10 p-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <h3 className="text-lg font-semibold">
                Need help with a document, graphic, or spreadsheet?
              </h3>
              <p className="mt-2 text-sm xl:text-base text-slate-200">
                Send me the file and I`ll give you an estimated time before I
                start.
              </p>
            </div>
            <a href="https://contact.mybabb.com">
             <button className="rounded-full bg-indigo-500 px-6 py-2 text-xs font-semibold hover:bg-indigo-400">
              Request Office Help
             </button>
             </a>
          </div>
        </section>

      </main>
    </div>
  );
}
