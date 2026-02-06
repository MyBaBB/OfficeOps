import React from "react";

export default function EbayOps() {
  return (
    <div className="min-h-screen w-full bg-gray-50 text-gray-900">
      {/* HERO */}
      <section className="w-full bg-white px-6 py-20 text-center shadow-sm">
        <h1 className="mb-4 text-4xl font-bold">
          Your eBay Listings, Upgraded. Fast.
        </h1>
        <p className="mx-auto max-w-2xl text-lg text-gray-600">
          Professional product photos, SEO‑optimized titles, clean descriptions,
          and modern templates — powered by Adobe CC, Microsoft 365, and my
          OfficeOps workflow.
        </p>
      </section>

      {/* EXPERIENCE */}
      <section className="w-full px-6 py-16">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="mb-4 text-3xl font-semibold">
            Experience That Actually Matters
          </h2>
          <p className="leading-relaxed text-gray-600">
            I&apos;ve been working with eBay listings since 2012 — back when
            mobile optimization didn&apos;t even exist. I&apos;ve watched the
            platform evolve, and today I use Adobe CC, Microsoft 365, and my
            OfficeOps workflow to bring listings up to modern standards: clean
            photos, SEO‑rich titles, and mobile‑safe formatting.
          </p>
        </div>
      </section>

      {/* BEFORE / AFTER GALLERY */}
      <section className="w-full bg-gray-100 px-6 py-20">
        <h2 className="mb-10 text-center text-3xl font-semibold">
          Before & After: Real Listing Transformations
        </h2>

        <p className="mx-auto mb-12 max-w-3xl text-center text-gray-600">
          Every seller knows the pain: dark photos, messy descriptions,
          inconsistent formatting. I turn cluttered listings into clean,
          high‑credibility product pages that convert.
        </p>

        <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-2">
          {/* Pair 1 */}
          <div className="space-y-4">
            <img
              src="https://picsum.photos/id/1011/600/400"
              className="rounded-lg shadow"
            />
            <img
              src="https://picsum.photos/id/1012/600/400"
              className="rounded-lg shadow"
            />
          </div>

          {/* Pair 2 */}
          <div className="space-y-4">
            <img
              src="https://picsum.photos/id/1021/600/400"
              className="rounded-lg shadow"
            />
            <img
              src="https://picsum.photos/id/1022/600/400"
              className="rounded-lg shadow"
            />
          </div>

          {/* Pair 3 */}
          <div className="space-y-4">
            <img
              src="https://picsum.photos/id/1031/600/400"
              className="rounded-lg shadow"
            />
            <img
              src="https://picsum.photos/id/1032/600/400"
              className="rounded-lg shadow"
            />
          </div>

          {/* Pair 4 */}
          <div className="space-y-4">
            <img
              src="https://picsum.photos/id/1041/600/400"
              className="rounded-lg shadow"
            />
            <img
              src="https://picsum.photos/id/1042/600/400"
              className="rounded-lg shadow"
            />
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="w-full bg-white px-6 py-16">
        <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-2">
          <div>
            <h3 className="mb-4 text-2xl font-semibold">
              Listing Optimization
            </h3>
            <ul className="space-y-2 text-gray-700">
              <li>• SEO‑driven titles</li>
              <li>• Keyword‑rich descriptions</li>
              <li>• Category + item specifics cleanup</li>
              <li>• Mobile‑safe formatting</li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-2xl font-semibold">Photo Enhancement</h3>
            <ul className="space-y-2 text-gray-700">
              <li>• Clean white backgrounds</li>
              <li>• Lighting + color correction</li>
              <li>• Multi‑image layout cards</li>
              <li>• “Amazon‑style” clarity</li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-2xl font-semibold">Store Cleanup</h3>
            <ul className="space-y-2 text-gray-700">
              <li>• Bulk edits</li>
              <li>• Template unification</li>
              <li>• Policy + shipping consistency</li>
              <li>• Brand‑safe storefront polish</li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-2xl font-semibold">Full Management</h3>
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
      <section className="w-full bg-white px-6 py-16 text-center">
        <h2 className="mb-4 text-3xl font-semibold">
          Ready to upgrade your listings?
        </h2>
        <p className="mb-8 text-gray-600">
          Let`s fix your store and get your products moving.
        </p>
        <a href="https://contact.mybabb.com/ebayhelper">
          <button className="rounded-lg bg-blue-600 px-8 py-4 text-white shadow transition hover:bg-blue-700">
            Start My Listing Upgrade
          </button>
        </a>
      </section>
    </div>
  );
}
