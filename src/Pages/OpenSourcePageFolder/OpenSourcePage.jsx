import "./OpenSourcePage.css";
import CoderPricing from "../../Components/PricingFolder/CoderPricing";
import HackerBuddyBottom from "../../Components/HackerBuddyFolder/HackerBuddyBottom";

const SERVICES = [
  {
    title: "Websites & UI",
    desc: "Modern, mobile-friendly sites and layout fixes built with React and Tailwind.",
    items: [
      "Custom web pages",
      "Mobile-responsive design",
      "Layout fixes & polish",
    ],
  },
  {
    title: "Interactive Web Features",
    desc: "Adding functionality, forms, and dynamic content to your web pages.",
    items: [
      "Navigation & user forms",
      "API integrations",
      "Smooth transitions & animations",
    ],
  },
  {
    title: "Media & Stream Setup",
    desc: "Configuring high-quality video and audio settings for content creators.",
    items: [
      "OBS recording config",
      "Audio tuning & filters",
      "Scene layouts & overlays",
    ],
  },
  {
    title: "AI Graphics & Mockups",
    desc: "Clean visual edits and quick design mockups for web projects.",
    items: [
      "AI image background cleanup",
      "Visual edits & touch-ups",
      "Quick UI mockups",
    ],
  },
];

export default function OpenSourceCoderPage() {
  return (
    <div className="w-full bg-slate-950 text-slate-50">
      {/* HEADER */}
      <header className="sticky top-0 z-50 w-full border-b border-slate-800 bg-slate-950/90 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
          <h1 className="text-lg font-semibold tracking-tight xl:text-2xl">
            OpenSourceCoder
          </h1>
          <a
            href="#rates"
            className="rounded-full bg-indigo-500 px-4 py-2 text-xs font-semibold hover:bg-indigo-400 xl:text-sm"
          >
            View Rates
          </a>
        </div>
      </header>

      {/* MAIN */}
      <main className="mx-auto max-w-6xl space-y-16 px-4 py-12">
        {/* INTRO */}
        <section className="mx-auto max-w-3xl space-y-3 text-center">
          <h2 className="text-3xl font-semibold tracking-tight xl:text-4xl">
            Clean websites, solid UI components, and media setup.
          </h2>
          <p className="text-sm leading-relaxed text-slate-300 xl:text-base">
            I build modern web pages, fix frustrating layout bugs, and help
            optimize video recording setups.
          </p>
        </section>

        {/* SERVICES */}
        <section className="space-y-6 border-t border-slate-800 pt-10">
          <h3 className="text-xl font-semibold tracking-tight xl:text-2xl">
            How I Can Help
          </h3>

          <div className="grid gap-6 md:grid-cols-2">
            {SERVICES.map((service, index) => (
              <div
                key={index}
                className="space-y-3 rounded-xl border border-slate-800 bg-slate-900/60 p-6"
              >
                <h4 className="text-base font-semibold text-slate-100 xl:text-lg">
                  {service.title}
                </h4>
                <p className="text-xs text-slate-400 xl:text-sm">
                  {service.desc}
                </p>
                <ul className="space-y-1 pt-2 text-xs text-slate-300 xl:text-sm">
                  {service.items.map((item, i) => (
                    <li key={i}>• {item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <HackerBuddyBottom />

        <CoderPricing />
      </main>
    </div>
  );
}
