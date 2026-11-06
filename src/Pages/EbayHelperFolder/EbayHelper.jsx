import React, { useState } from "react";
import meAtBeach from "../../img/Me_at_Beach_200x200.webp";
import EggsUn from "../../img/EasterEggArray600x400-un.webp";
import EggsEbay from "../../img/EasterEggArray600x400-Ebay.webp";
import PhonesUn from "../../img/phones600x400-un.webp";
import PhonesEbay from "../../img/phones600x400-Ebay.webp";
import BootsUn from "../../img/Rain-Boots-600x400-un.webp";
import BootsEbay from "../../img/Rain-Boots-600x400-Ebay.webp";
import ScrewDriverUn from "../../img/ScrewDiver600x400-un.webp";
import ScrewDriverEbay from "../../img/ScrewDiver600x400-Ebay.webp";
import SwimClothesUn from "../../img/SwimClothes600x400-un.webp";
import SwimClothesEbay from "../../img/SwimClothes-600x400-Ebay.webp";

import HackerBuddyBottom from "../../Components/HackerBuddyFolder/HackerBuddyBottom";

export default function EbayOps() {
  const [copied, setCopied] = useState(false);
  const [terminalText, setTerminalText] = useState(
    "status: ebay optimization online"
  );

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const cycleTerminal = () => {
    const quotes = [
      "status: ebay optimization online",
      "SEO titles tuned • conversion maxed",
      "Adobe CC background removal: pristine",
      "veteran workflow powering storefronts",
    ];
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    setTerminalText(randomQuote);
  };

  return (
    <div className="vibe-container relative min-h-screen overflow-hidden bg-slate-950 font-sans text-slate-100 selection:bg-cyan-500 selection:text-slate-950">
      {/* Dynamic Background FX */}
      <div className="scanline-overlay pointer-events-none absolute inset-0 z-10 opacity-30" />
      <div className="glow-orb pointer-events-none absolute -left-40 -top-40 h-96 w-96 rounded-full bg-cyan-600/20 blur-3xl" />
      <div className="glow-orb pointer-events-none absolute -right-40 top-1/2 h-96 w-96 rounded-full bg-amber-500/15 blur-3xl" />

      {/* FLOATING HOURLY RATES BUTTON */}
      <div className="absolute right-6 top-6 z-50">
        <a
          href="#rates"
          className="rounded-xl border border-cyan-500/30 bg-cyan-950/40 px-5 py-2 font-mono text-xs font-semibold uppercase tracking-wider text-cyan-200 backdrop-blur-md transition-all hover:bg-cyan-900/50 hover:text-white"
        >
          Hourly Rates
        </a>
      </div>

      <main className="relative z-20 mx-auto max-w-6xl space-y-20 px-6 py-16 md:py-24">
        
        {/* HERO SECTION */}
        <header className="grid grid-cols-1 items-center gap-10 md:grid-cols-12">
          <div className="space-y-6 text-center md:col-span-8 md:text-left">
            <div className="glow-border inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-950/40 px-3.5 py-1.5 font-mono text-xs uppercase tracking-widest text-cyan-300 backdrop-blur-md">
              <span className="h-2 w-2 animate-ping rounded-full bg-cyan-400" />
              Hybrid Webcraft • eBay Operations &amp; SEO
            </div>

            <h1 className="text-4xl font-extrabold tracking-tight leading-tight text-white sm:text-6xl">
              Seasoned coder. <br />
              <span className="bg-gradient-to-r from-amber-400 via-cyan-300 to-violet-400 bg-clip-text text-transparent">
                Your eBay Listings, Upgraded. Fast.
              </span>
            </h1>

            <p className="max-w-2xl text-lg font-normal leading-relaxed text-slate-200 md:text-xl">
              Professional product photos, SEO‑optimized titles, clean descriptions,
              and modern templates — powered by Adobe CC, Microsoft 365, and my
              veteran OfficeOps workflow.
            </p>

            {/* Action Row */}
            <div className="flex flex-wrap items-center justify-center gap-4 pt-4 md:justify-start">
              <a
                href="#rates"
                className="rounded-xl bg-gradient-to-r from-cyan-400 to-teal-300 px-8 py-3.5 font-medium text-slate-950 shadow-[0_0_25px_rgba(34,211,238,0.4)] transition-all duration-300 hover:-translate-y-0.5 hover:from-cyan-300 hover:to-teal-200 hover:shadow-[0_0_35px_rgba(34,211,238,0.6)]"
              >
                View Rates &amp; Services
              </a>

              <button
                onClick={handleCopyLink}
                className="rounded-xl border border-slate-700 bg-slate-900/80 px-6 py-3.5 font-mono text-xs uppercase tracking-wider text-slate-200 backdrop-blur-md transition-all duration-200 hover:bg-slate-800 hover:text-white"
              >
                {copied ? "Link Copied! ✓" : "Copy Profile Link 🔗"}
              </button>
            </div>
          </div>

          {/* Profile Picture Card */}
          <div className="flex justify-center md:col-span-4">
            <div
              className="group relative cursor-pointer"
              onClick={cycleTerminal}
              title="Click to cycle status!"
            >
              <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-cyan-500 to-amber-400 opacity-75 blur-lg transition duration-500 group-hover:scale-105 group-hover:opacity-100" />
              <div className="relative flex flex-col items-center space-y-3 rounded-3xl border border-slate-700/80 bg-slate-900 p-3 shadow-2xl backdrop-blur-xl">
                <img
                  src={meAtBeach}
                  alt="Brett at the beach"
                  className="h-48 w-48 rounded-2xl border border-slate-800 object-cover filter contrast-105"
                />
                <div className="w-full truncate rounded-xl border border-slate-800 bg-slate-950/80 px-3 py-1.5 text-center font-mono text-[11px] text-cyan-300">
                  ⚡ {terminalText}
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* EXPERIENCE */}
        <section className="space-y-6 rounded-3xl border border-slate-800 bg-slate-900/50 p-8 backdrop-blur-md">
          <div className="text-center space-y-2">
            <h2 className="text-3xl font-bold text-white">
              Experience That Actually Matters
            </h2>
            <p className="font-mono text-xs text-amber-300 uppercase tracking-widest font-medium">
              Listing on eBay Since 2012
            </p>
          </div>
          <p className="mx-auto max-w-3xl text-center leading-relaxed text-slate-200 font-normal">
            I&apos;ve been working with eBay listings since 2012 — back when
            mobile optimization didn&apos;t even exist. I&apos;ve watched the
            platform evolve, and today I use Adobe CC, Microsoft 365, and my
            OfficeOps workflow to bring listings up to modern standards: clean
            photos, SEO‑rich titles, and mobile‑safe formatting.
          </p>
         
        </section>

        {/* BEFORE / AFTER GALLERY */}
        <section className="space-y-8">
          <div className="border-l-2 border-cyan-400 pl-4">
            <h2 className="text-3xl font-bold tracking-wide text-white">
              Before &amp; After: Real Listing Transformations
            </h2>
            <p className="font-mono text-sm text-slate-300">
              Every seller knows the pain: cluttered images, dark shots, inconsistent formatting.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
            {/* Pair 1 */}
            <div className="glass-card relative space-y-3 rounded-2xl border border-slate-800 bg-slate-900/40 p-4">
              <div className="absolute left-6 top-7 z-10 rounded-md border border-black/40 bg-rose-950/90 px-2 py-0.5 text-xs font-mono text-rose-200">
                Before
              </div>
              <img
                src={EggsUn}
                alt="Before Eggs"
                className="h-40 w-full rounded-lg object-cover shadow-lg shadow-black/40"
              />
              <div className="absolute bottom-6 right-6 z-10 rounded-md border border-green-900/50 bg-emerald-950/90 px-2 py-0.5 text-xs font-mono text-emerald-200">
                After
              </div>
              <img
                src={EggsEbay}
                alt="After Eggs"
                className="h-40 w-full rounded-lg object-cover shadow-lg shadow-black/40"
              />
            </div>

            {/* Pair 2 */}
            <div className="glass-card relative space-y-3 rounded-2xl border border-slate-800 bg-slate-900/40 p-4">
              <div className="absolute left-6 top-7 z-10 rounded-md border border-black/40 bg-rose-950/90 px-2 py-0.5 text-xs font-mono text-rose-200">
                Before
              </div>
              <img
                src={PhonesUn}
                alt="Before Phones"
                className="h-40 w-full rounded-lg object-cover shadow-lg shadow-black/40"
              />
              <div className="absolute bottom-6 right-6 z-10 rounded-md border border-green-900/50 bg-emerald-950/90 px-2 py-0.5 text-xs font-mono text-emerald-200">
                After
              </div>
              <img
                src={PhonesEbay}
                alt="After Phones"
                className="h-40 w-full rounded-lg object-cover shadow-lg shadow-black/40"
              />
            </div>

            {/* Pair 3 */}
            <div className="glass-card relative space-y-3 rounded-2xl border border-slate-800 bg-slate-900/40 p-4">
              <div className="absolute left-6 top-7 z-10 rounded-md border border-black/40 bg-rose-950/90 px-2 py-0.5 text-xs font-mono text-rose-200">
                Before
              </div>
              <img
                src={BootsUn}
                alt="Before Boots"
                className="h-40 w-full rounded-lg object-cover shadow-lg shadow-black/40"
              />
              <div className="absolute bottom-6 right-6 z-10 rounded-md border border-green-900/50 bg-emerald-950/90 px-2 py-0.5 text-xs font-mono text-emerald-200">
                After
              </div>
              <img
                src={BootsEbay}
                alt="After Boots"
                className="h-40 w-full rounded-lg object-cover shadow-lg shadow-black/40"
              />
            </div>

            {/* Pair 4 */}
            <div className="glass-card relative space-y-3 rounded-2xl border border-slate-800 bg-slate-900/40 p-4">
              <div className="absolute left-6 top-7 z-10 rounded-md border border-black/40 bg-rose-950/90 px-2 py-0.5 text-xs font-mono text-rose-200">
                Before
              </div>
              <img
                src={ScrewDriverUn}
                alt="Before Screwdriver"
                className="h-40 w-full rounded-lg object-cover shadow-lg shadow-black/40"
              />
              <div className="absolute bottom-6 right-6 z-10 rounded-md border border-green-900/50 bg-emerald-950/90 px-2 py-0.5 text-xs font-mono text-emerald-200">
                After
              </div>
              <img
                src={ScrewDriverEbay}
                alt="After Screwdriver"
                className="h-40 w-full rounded-lg object-cover shadow-lg shadow-black/40"
              />
            </div>

            {/* Pair 5 */}
            <div className="glass-card relative space-y-3 rounded-2xl border border-slate-800 bg-slate-900/40 p-4 lg:col-span-1 xl:col-span-1">
              <div className="absolute left-6 top-7 z-10 rounded-md border border-black/40 bg-rose-950/90 px-2 py-0.5 text-xs font-mono text-rose-200">
                Before
              </div>
              <img
                src={SwimClothesUn}
                alt="Before Swimwear"
                className="h-40 w-full rounded-lg object-cover shadow-lg shadow-black/40"
              />
              <div className="absolute bottom-6 right-6 z-10 rounded-md border border-green-900/50 bg-emerald-950/90 px-2 py-0.5 text-xs font-mono text-emerald-200">
                After
              </div>
              <img
                src={SwimClothesEbay}
                alt="After Swimwear"
                className="h-40 w-full rounded-lg object-cover shadow-lg shadow-black/40"
              />
            </div>
          </div>
        </section>

        {/* SERVICES */}
        <section className="space-y-8 border-t border-slate-800/80 pt-12">
          <div className="border-l-2 border-amber-400 pl-4">
            <h2 className="text-3xl font-bold tracking-wide text-white">
              Comprehensive eBay Services
            </h2>
            <p className="font-mono text-sm text-slate-300">
              End-to-end optimization for your store and inventory
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <div className="glass-card space-y-3 rounded-2xl border border-slate-800 bg-slate-900/50 p-6">
              <h3 className="text-xl font-bold text-cyan-300">
                Listing Optimization
              </h3>
              <ul className="space-y-2 text-sm font-normal text-slate-200">
                <li className="flex items-center gap-2"><span className="text-cyan-400">✓</span> SEO‑driven titles</li>
                <li className="flex items-center gap-2"><span className="text-cyan-400">✓</span> Keyword‑rich descriptions</li>
                <li className="flex items-center gap-2"><span className="text-cyan-400">✓</span> Category + item specifics cleanup</li>
                <li className="flex items-center gap-2"><span className="text-cyan-400">✓</span> Mobile‑safe formatting</li>
              </ul>
            </div>

            <div className="glass-card space-y-3 rounded-2xl border border-slate-800 bg-slate-900/50 p-6">
              <h3 className="text-xl font-bold text-amber-300">
                Photo Enhancement
              </h3>
              <ul className="space-y-2 text-sm font-normal text-slate-200">
                <li className="flex items-center gap-2"><span className="text-amber-400">✓</span> Clean white backgrounds</li>
                <li className="flex items-center gap-2"><span className="text-amber-400">✓</span> Lighting + color correction</li>
                <li className="flex items-center gap-2"><span className="text-amber-400">✓</span> Multi‑image layout cards</li>
                <li className="flex items-center gap-2"><span className="text-amber-400">✓</span> “Amazon‑style” clarity</li>
              </ul>
            </div>

            <div className="glass-card space-y-3 rounded-2xl border border-slate-800 bg-slate-900/50 p-6">
              <h3 className="text-xl font-bold text-violet-300">
                Store Cleanup
              </h3>
              <ul className="space-y-2 text-sm font-normal text-slate-200">
                <li className="flex items-center gap-2"><span className="text-violet-400">✓</span> Bulk edits</li>
                <li className="flex items-center gap-2"><span className="text-violet-400">✓</span> Template unification</li>
                <li className="flex items-center gap-2"><span className="text-violet-400">✓</span> Policy + shipping consistency</li>
                <li className="flex items-center gap-2"><span className="text-violet-400">✓</span> Brand‑safe storefront polish</li>
              </ul>
            </div>

            <div className="glass-card space-y-3 rounded-2xl border border-slate-800 bg-slate-900/50 p-6">
              <h3 className="text-xl font-bold text-emerald-300">
                Full Management
              </h3>
              <ul className="space-y-2 text-sm font-normal text-slate-200">
                <li className="flex items-center gap-2"><span className="text-emerald-400">✓</span> Daily listing</li>
                <li className="flex items-center gap-2"><span className="text-emerald-400">✓</span> Inventory updates</li>
                <li className="flex items-center gap-2"><span className="text-emerald-400">✓</span> Message handling</li>
                <li className="flex items-center gap-2"><span className="text-emerald-400">✓</span> Offer management</li>
              </ul>
            </div>
          </div>
        </section>

        {/* HOURLY RATES & NEGOTIABLE PRICING CARDS */}
        <section id="rates" className="space-y-8 border-t border-slate-800/80 pt-12">
          <div className="text-center space-y-3">
            <h2 className="text-3xl font-extrabold tracking-tight text-white md:text-4xl">
              Flexible &amp; Friendly Pricing
            </h2>
            <p className="mx-auto max-w-2xl text-sm font-normal text-slate-200">
              Prices are completely negotiable and tailored to your project. Behind these numbers is custom-built React and dynamic code keeping everything running smoothly and transparently! Let&apos;s talk and find a fair rate that fits your budget.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 max-w-4xl mx-auto">
            <div className="glass-card space-y-4 rounded-2xl border border-slate-800 bg-slate-900/50 p-6 text-center">
              <div className="font-mono text-xs uppercase tracking-wider text-cyan-300 font-semibold">
                Remote Work Preferred
              </div>
              <h3 className="text-xl font-bold text-slate-100">
                Standard Office Work
              </h3>
              <p className="text-sm font-normal text-slate-200 pt-2">
                Remote optimization, digital file organization, structured management, and custom solutions tailored to your workflow.
              </p>
            </div>

            <div className="glass-card glow-border relative space-y-4 rounded-2xl border border-cyan-500/50 bg-slate-900/90 p-6 text-center shadow-[0_0_30px_rgba(6,182,212,0.15)]">
              <div className="font-mono text-xs uppercase tracking-wider text-amber-300 font-semibold">
                Travel Available Upon Request
              </div>
              <h3 className="text-xl font-bold text-white">
                On-Site Office Help
              </h3>
              <p className="text-sm font-normal text-slate-200 pt-2">
                In-person staging, equipment setup, hands-on inventory workflows, and personalized team assistance.
              </p>
            </div>
          </div>

          {/* Price Guidelines Link with Updated 5s Pulse Animations */}
          <div className="flex flex-col items-center justify-center pt-6 space-y-2">
            <a href="https://contact.mybabb.com" className="flex items-center gap-3">
              <span className="text-cyan-400 text-xl font-bold inline-block animate-[pulse_5s_ease-in-out_infinite]">
                👉
              </span>
              <div
                className="rounded-xl border border-cyan-500/40 bg-cyan-950/60 px-6 py-3 font-mono text-sm font-semibold text-cyan-200 backdrop-blur-md shadow-[0_0_20px_rgba(34,211,238,0.2)] transition-all duration-300 hover:bg-cyan-900 hover:text-white hover:scale-105"
              >
               💲 Friendly Price Negotiations
              </div>
              <span className="text-cyan-400 text-xl font-bold inline-block animate-[pulse_5s_ease-in-out_infinite]">
                👈
              </span>
            </a>
          </div>
        </section>

        {/* CTA FOOTER */}
        <section className="rounded-3xl border border-cyan-500/30 bg-slate-900/60 p-8 backdrop-blur-xl md:p-12">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div className="space-y-3">
              <h3 className="text-2xl font-extrabold text-white">
                Ready to upgrade your listings?
              </h3>
              <p className="text-slate-200 font-normal">
                Let&apos;s fix your store and get your products moving. Send me the file and I&apos;ll give you an estimated time before I start.
              </p>
            </div>

            <div>
              <a
                href="https://contact.mybabb.com/contactebay"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block"
              >
                <button className="rounded-xl bg-gradient-to-r from-cyan-400 to-amber-400 px-8 py-4 font-mono text-sm font-semibold text-slate-950 shadow-[0_0_30px_rgba(34,211,238,0.3)] transition-all duration-300 hover:scale-105 hover:from-cyan-300 hover:to-amber-300">
                  Start My Listing Upgrade &rarr;
                </button>
              </a>
            </div>
          </div>
        </section>
 <HackerBuddyBottom />
      </main>
    </div>
  );
}