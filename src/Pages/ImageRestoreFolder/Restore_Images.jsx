import React from "react";
import Restore1 from "../../img/Restore1-600x400.webp";
import Restore2 from "../../img/Restore2-600x400.webp";
import Restore3 from "../../img/Restore3-600x400.webp";
import Restore4 from "../../img/Restore4-600x400.webp";
import Restore5 from "../../img/Restore5-600x400.webp";
import Restor1un from "../../img/Restore1-un-600x400.webp";
import Restor2un from "../../img/Restore2-un-600x400.webp";
import Restor3un from "../../img/Restore3-un-600x400.webp";
import Restor4un from "../../img/Restore4-un-600x400.webp";
import Restor5un from "../../img/Restore5-un-600x400.webp";

// Placeholder before/after images
const before1 = Restor1un;
const after1  = Restore1;

const before2 = Restor2un;
const after2  = Restore2;

const before3 = Restor3un;
const after3  = Restore3;

const before4 = Restor4un;
const after4  = Restore4;

const before5 = Restor5un;
const after5  = Restore5;



export default function ImageOps() {
  return (
    <div className="min-h-screen w-full bg-slate-950 text-slate-200">
      
      {/* HERO */}
      <section className="w-full bg-slate-900 px-6 py-20 text-center shadow-inner">
        <h1 className="mb-4 text-4xl font-bold text-white">
          Image Restoration & Editing — Done Right.
        </h1>

        <p className="mx-auto max-w-2xl text-lg text-slate-200">
          Professional image repair, restoration, color correction, object removal,
          and creative alterations — powered by Adobe CC, AI tools, and my
          OfficeOps workflow.
        </p>
      </section>

      {/* EXPERIENCE */}
      <section className="w-full px-6 py-16">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="mb-4 text-3xl font-semibold text-white">
            Bring Your Photos Back to Life
          </h2>
          <p className="leading-relaxed text-slate-200">
            Whether it&apos;s restoring old family photos, repairing damage, enhancing
            clarity, or creating artistic edits — I use Adobe Photoshop, Adobe Illustrator,and all of Adobe Products,and professional AI enhancement tools for 
             customizing workflows to deliver clean, modern, high‑credibility results.
          </p>
          <p className="mt-4 leading-relaxed text-slate-200">
            Whether it&apos;s restoring old family photos, repairing damage, enhancing
            clarity, or creating artistic edits — I deliver professional results with properly
            sized and formatted images.
          </p>
        </div>
      </section>

      {/* BEFORE / AFTER GALLERY */}
      <section className="w-full bg-slate-900 px-6 py-20">
        <h2 className="mb-10 text-center text-3xl font-semibold text-white">
          Before & After: Real Image Transformations
        </h2>

        <p className="mx-auto mb-12 max-w-3xl text-center text-slate-200">
          From faded prints to damaged photos, low‑quality images, or creative
          alterations — here&apos;s what professional editing can do.
        </p>

        <div className="flex flex-col xl:flex-row xl:space-x-4 space-y-4 xl:space-y-0 justify-center items-center">

          {/* Pair Component */}
          {[ 
            { before: before1, after: after1 },
            { before: before2, after: after2 },
            { before: before3, after: after3 },
            { before: before4, after: after4 },
            { before: before5, after: after5 },
          ].map((pair, i) => (
            <div key={i} className="relative space-y-4">
              <div className="absolute top-5 left-4 border-2 border-black bg-slate-900/80
               text-red-200 px-2 rounded-md">
                Before
              </div>
              <img src={pair.before} className="rounded-lg shadow-lg shadow-black/40" />

              <div className="absolute bottom-1 right-1 text-green-300 border-2 border-green-700
               bg-black px-2 rounded-md">
                After
              </div>
              <img src={pair.after} className="rounded-lg shadow-lg shadow-black/40" />
            </div>
          ))}

        </div>
      </section>

      {/* SERVICES */}
      <section className="w-full bg-slate-950 px-6 py-16">
        <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-2">

          <div>
            <h3 className="mb-4 text-2xl font-semibold text-white">
              Restoration
            </h3>
            <ul className="space-y-2 text-slate-300">
              <li>• Scratch & damage repair</li>
              <li>• Color restoration</li>
              <li>• Noise reduction</li>
              <li>• Detail enhancement</li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-2xl font-semibold text-white">
              Editing & Cleanup
            </h3>
            <ul className="space-y-2 text-slate-300">
              <li>• Object removal</li>
              <li>• Background cleanup</li>
              <li>• Lighting & color correction</li>
              <li>• Portrait retouching</li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-2xl font-semibold text-white">
              Creative Alterations
            </h3>
            <ul className="space-y-2 text-slate-300">
              <li>• Artistic edits</li>
              <li>• Color grading</li>
              <li>• Stylized effects</li>
              <li>• Composite images</li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-2xl font-semibold text-white">
              Full Project Support
            </h3>
            <ul className="space-y-2 text-slate-300">
              <li>• Batch editing</li>
              <li>• Album restoration</li>
              <li>• Print‑ready formatting</li>
              <li>• Custom requests</li>
            </ul>
          </div>

        </div>
      </section>

      {/* CTA FOOTER */}
      <section className="border border-slate-500 rounded-3xl">
        <div className="relative flex flex-col rounded-2xl border border-indigo-500/40 bg-indigo-500/10 p-6 xs:flex-row md:items-center md:justify-between">
          
          <div>
            <h3 className="text-lg font-semibold mb-2 text-white">
              Ready to restore or enhance your images?
            </h3>
            <p className="mb-8 text-slate-200">
              Send me your files and I’ll give you an estimated time before I start.
            </p>
          </div>

          <a
            href="https://contact.mybabb.com/image_restore"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="rounded-lg bg-blue-600 px-8 py-4 text-white shadow-lg shadow-blue-900/40 transition hover:bg-blue-700 hover:shadow-blue-800/50 border border-blue-400/20">
              Start My Image Upgrade
            </button>
          </a>

        </div>
      </section>

    </div>
  );
}
