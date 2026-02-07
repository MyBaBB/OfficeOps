import React from "react";

export default function EbayOps() {
  return (
    <div className="min-h-screen w-full bg-slate-950 text-slate-200">
        <a
            href="#rates"
            className="absolute right-6 top-6 rounded-full bg-indigo-500 px-4 py-2 text-xs font-semibold hover:bg-indigo-400 xl:text-base"
          >
            Hourly Rates
          </a>
      {/* HERO */}
      <section className="w-full bg-slate-900 px-6 py-20 text-center shadow-inner">
        <h1 className="mb-4 text-4xl font-bold text-white">
          Your eBay Listings, Upgraded. Fast.
        </h1>
      
        <p className="mx-auto max-w-2xl text-lg text-slate-200">
          Professional product photos, SEO‑optimized titles, clean descriptions,
          and modern templates — powered by Adobe CC, Microsoft 365, and my
          OfficeOps workflow.
        </p>
      </section>

      {/* EXPERIENCE */}
      <section className="w-full px-6 py-16">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="mb-4 text-3xl font-semibold text-white">
            Experience That Actually Matters
          </h2>
          <p className="leading-relaxed text-slate-200">
            I&apos;ve been working with eBay listings since 2012 — back when
            mobile optimization didn&apos;t even exist. I&apos;ve watched the
            platform evolve, and today I use Adobe CC, Microsoft 365, and my
            OfficeOps workflow to bring listings up to modern standards: clean
            photos, SEO‑rich titles, and mobile‑safe formatting.
          </p>
        </div>
      </section>

      {/* BEFORE / AFTER GALLERY */}
      <section className="w-full bg-slate-900 px-6 py-20">
        <h2 className="mb-10 text-center text-3xl font-semibold text-white">
          Before & After: Real Listing Transformations
        </h2>

        <p className="mx-auto mb-12 max-w-3xl text-center text-slate-200">
          Every seller knows the pain: dark photos, messy descriptions,
          inconsistent formatting. I turn cluttered listings into clean,
          high‑credibility product pages that convert.
        </p>

        <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-2">
          {/* Pair 1 */}
          <div className="space-y-4">
            <img
              src="https://picsum.photos/id/1011/600/400"
              className="rounded-lg shadow-lg shadow-black/40"
            />
            <img
              src="https://picsum.photos/id/1012/600/400"
              className="rounded-lg shadow-lg shadow-black/40"
            />
          </div>

          {/* Pair 2 */}
          <div className="space-y-4">
            <img
              src="https://picsum.photos/id/1021/600/400"
              className="rounded-lg shadow-lg shadow-black/40"
            />
            <img
              src="https://picsum.photos/id/1022/600/400"
              className="rounded-lg shadow-lg shadow-black/40"
            />
          </div>

          {/* Pair 3 */}
          <div className="space-y-4">
            <img
              src="https://picsum.photos/id/1031/600/400"
              className="rounded-lg shadow-lg shadow-black/40"
            />
            <img
              src="https://picsum.photos/id/1032/600/400"
              className="rounded-lg shadow-lg shadow-black/40"
            />
          </div>

          {/* Pair 4 */}
          <div className="space-y-4">
            <img
              src="https://picsum.photos/id/1041/600/400"
              className="rounded-lg shadow-lg shadow-black/40"
            />
            <img
              src="https://picsum.photos/id/1042/600/400"
              className="rounded-lg shadow-lg shadow-black/40"
            />
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="w-full bg-slate-950 px-6 py-16">
        <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-2">
          <div>
            <h3 className="mb-4 text-2xl font-semibold text-white">
              Listing Optimization
            </h3>
            <ul className="space-y-2 text-slate-300">
              <li>• SEO‑driven titles</li>
              <li>• Keyword‑rich descriptions</li>
              <li>• Category + item specifics cleanup</li>
              <li>• Mobile‑safe formatting</li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-2xl font-semibold text-white">
              Photo Enhancement
            </h3>
            <ul className="space-y-2 text-slate-300">
              <li>• Clean white backgrounds</li>
              <li>• Lighting + color correction</li>
              <li>• Multi‑image layout cards</li>
              <li>• “Amazon‑style” clarity</li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-2xl font-semibold text-white">
              Store Cleanup
            </h3>
            <ul className="space-y-2 text-slate-300">
              <li>• Bulk edits</li>
              <li>• Template unification</li>
              <li>• Policy + shipping consistency</li>
              <li>• Brand‑safe storefront polish</li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-2xl font-semibold text-white">
              Full Management
            </h3>
            <ul className="space-y-2 text-slate-300">
              <li>• Daily listing</li>
              <li>• Inventory updates</li>
              <li>• Message handling</li>
              <li>• Offer management</li>
            </ul>
          </div>
        </div>
      </section>

      {/* CTA FOOTER */}

<section className="  relative flex-row xs:flex  justify-between ">
        <div className=" border-2 border-slate-900 rounded-lg p-6  ">
              <h4 className="text-sm font-semibold xl:text-xl ">
                Standard Office Work
              </h4>
               <p className="text-xl text-green-300 ">
                $45
                   <span className="text-red-400">
                     &nbsp;-15%<span className="text-[aliceblue] font-semibold text-base">&nbsp;Winter Special</span>
                   </span>
                </p>
              <p className="mt-3 text-3xl font-semibold text-green-300"> $38.25/hr</p>
              <p className="mt-2 text-xs text-slate-200 xl:text-base">
              Remote work preferred
            </p>
        </div>



        <div className=" border-2 border-slate-900 rounded-lg p-6  ">
            <h4 className="text-sm font-semibold xl:text-xl underline text-indigo-300">
              On-Site Office Help
            </h4>

            <p className="text-xl text-green-300">
              $55
              <span className="text-red-400">&nbsp;-15% special offer</span>
            </p>

            <p id="rates" className="mt-3 text-3xl font-semibold text-green-300">
              $46.75/hr
            </p>

            <p className="mt-2 text-xs text-slate-200 xl:text-base">
              Travel available upon request
            </p>
         </div>
</section>

      <section className="border border-slate-500 rounded-3xl">
        <div className=" relative flex flex-col  rounded-2xl border border-indigo-500/40 bg-indigo-500/10 p-6
         xs:flex-row md:items-center md:justify-between ">
          <div className="relative">
          
          <div className="">
            <h3 className="text-lg font-semibold mb-2 text-white  ">
              Ready to upgrade your listings?
            </h3>
            <p className="mb-8 text-slate-200">
              Let&apos;s fix your store and get your products moving.
            </p>
          </div>
         

      <div className="relative flex       "> 

 

</div>
            <p className="mt-2 text-sm text-slate-300 xl:text-base ">
              Send me the file and I&apos;ll give you an estimated time before I
              start.
            </p>
          </div>





          <a
            href="https://contact.mybabb.com/contactebay"
            target="_blank"
            rel="noopener noreferrer"
            className=" "
          > 
            <button className=" rounded-lg bg-blue-600 px-8 py-4 text-white shadow-lg
             shadow-blue-900/40 transition hover:bg-blue-700 hover:shadow-blue-800/50 border border-blue-400/20">
              Start My Listing Upgrade
            </button>
          </a>
        </div>



      </section>
      
    </div>
  );
}
