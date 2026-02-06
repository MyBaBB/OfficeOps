import React from "react";

export default function EbayOps() {
  return (
    <div className="w-full min-h-screen bg-gray-50 text-gray-900">

      {/* HERO */}
      <section className="w-full py-20 px-6 text-center bg-white shadow-sm">
        <h1 className="text-4xl font-bold mb-4">
          Your eBay Listings, Upgraded. Fast.
        </h1>
        <p className="text-lg max-w-2xl mx-auto text-gray-600">
          Professional product photos, SEO‑optimized titles, clean descriptions, and
          modern templates — powered by Adobe CC, Microsoft 365, and my OfficeOps workflow.
        </p>

      
      </section>

 
  {/* EXPERIENCE */}
      <section className="w-full py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-semibold mb-4">Experience That Actually Matters</h2>
          <p className="text-gray-600 leading-relaxed">
            I&apos;ve been working with eBay listings since 2012 — back when mobile optimization
            didn&apos;t even exist. I&apos;ve watched the platform evolve, and today I use Adobe CC,
            Microsoft 365, and my OfficeOps workflow to bring listings up to modern standards:
            clean photos, SEO‑rich titles, and mobile‑safe formatting.
          </p>
        </div>
      </section>


      {/* BEFORE / AFTER GALLERY */}
      <section className="w-full py-20 px-6 bg-gray-100">
        <h2 className="text-3xl font-semibold text-center mb-10">
          Before & After: Real Listing Transformations
        </h2>

        <p className="text-center max-w-3xl mx-auto text-gray-600 mb-12">
          Every seller knows the pain: dark photos, messy descriptions, inconsistent formatting.
          I turn cluttered listings into clean, high‑credibility product pages that convert.
        </p>

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10">

          {/* Pair 1 */}
          <div className="space-y-4">
            <img src="https://picsum.photos/id/1011/600/400" className="rounded-lg shadow" />
            <img src="https://picsum.photos/id/1012/600/400" className="rounded-lg shadow" />
          </div>

          {/* Pair 2 */}
          <div className="space-y-4">
            <img src="https://picsum.photos/id/1021/600/400" className="rounded-lg shadow" />
            <img src="https://picsum.photos/id/1022/600/400" className="rounded-lg shadow" />
          </div>

          {/* Pair 3 */}
          <div className="space-y-4">
            <img src="https://picsum.photos/id/1031/600/400" className="rounded-lg shadow" />
            <img src="https://picsum.photos/id/1032/600/400" className="rounded-lg shadow" />
          </div>

          {/* Pair 4 */}
          <div className="space-y-4">
            <img src="https://picsum.photos/id/1041/600/400" className="rounded-lg shadow" />
            <img src="https://picsum.photos/id/1042/600/400" className="rounded-lg shadow" />
          </div>

        </div>
      </section>

      {/* SERVICES */}
      <section className="w-full py-16 px-6 bg-white">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">

          <div>
            <h3 className="text-2xl font-semibold mb-4">Listing Optimization</h3>
            <ul className="space-y-2 text-gray-700">
              <li>• SEO‑driven titles</li>
              <li>• Keyword‑rich descriptions</li>
              <li>• Category + item specifics cleanup</li>
              <li>• Mobile‑safe formatting</li>
            </ul>
          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-4">Photo Enhancement</h3>
            <ul className="space-y-2 text-gray-700">
              <li>• Clean white backgrounds</li>
              <li>• Lighting + color correction</li>
              <li>• Multi‑image layout cards</li>
              <li>• “Amazon‑style” clarity</li>
            </ul>
          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-4">Store Cleanup</h3>
            <ul className="space-y-2 text-gray-700">
              <li>• Bulk edits</li>
              <li>• Template unification</li>
              <li>• Policy + shipping consistency</li>
              <li>• Brand‑safe storefront polish</li>
            </ul>
          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-4">Full Management</h3>
            <ul className="space-y-2 text-gray-700">
              <li>• Daily listing</li>
              <li>• Inventory updates</li>
              <li>• Message handling</li>
              <li>• Offer management</li>
            </ul>
          </div>

        </div>
      </section>



      {/* CTA FOOTER */}
      <section className="w-full py-16 px-6 text-center bg-white">
        <h2 className="text-3xl font-semibold mb-4">Ready to upgrade your listings?</h2>
        <p className="text-gray-600 mb-8">Let`s fix your store and get your products moving.</p>
      <a href="https://contact.mybabb.com/ebayhelper">  
        <button className="px-8 py-4 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition">
          Start My Listing Upgrade
        </button>
     </a> 
      </section>

    </div>
  );
}
