import NegotiablePricing from "../../Components/PricingFolder/Negotiable";
import MeBeach from "../../img/Me_at_Beach_200x200.webp"

export default function PersonalAssistantPage() {
  return (
    <div className="w-full bg-slate-950 text-slate-50">
      <header className="sticky top-0 z-50 w-full border-b border-slate-800 bg-slate-950/90 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-5">
          <h1 className="text-xl font-semibold tracking-tight xl:text-3xl">
            Personal Assistant • Office Operations • Sales Support
          </h1>

          <a
            href="https://contact.mybabb.com"
            className="rounded-full bg-indigo-500 px-4 py-2 text-xs font-semibold hover:bg-indigo-400 xl:text-base"
          >
            Contact Brett
          </a>
        </div>
      </header>

      <main className="mx-auto max-w-6xl space-y-20 px-4 py-12">

        <section className="mx-auto max-w-4xl space-y-6 text-center">
          <h2 className="text-4xl font-bold tracking-tight xl:text-6xl">
            Your Personal Assistant For Business, Sales & Technology
          </h2>

          <p className="text-sm leading-relaxed text-slate-300 xl:text-xl">
            Need somebody who can handle office work, customer follow-up,
            sales support, computers, websites, organization, marketing,
            and video creation?
          </p>

          <p className="text-sm leading-relaxed text-slate-400 xl:text-lg">
            Think of me as an extra team member who can jump in wherever
            help is needed.
          </p>
        </section>

        <section className="space-y-8 border-t border-slate-800 pt-12 px-4 sm:px-6 lg:px-8">
  {/* Main Container: Stacks on mobile, side-by-side on desktop */}
  <div className="flex flex-col md:flex-row items-center md:items-start gap-8 lg:gap-12">
    
    {/* Profile Image Column */}
    <div className="flex-shrink-0 mx-auto md:mx-0">
      <div className="relative group">
        {/* Subtle decorative background glow */}
        <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-teal-400 rounded-3xl blur opacity-30 group-hover:opacity-60 transition duration-300"></div>
        
        <img 
          src={MeBeach} 
          alt="Brett at The Beach" 
          className="relative w-[220px] h-[220px] sm:w-[250px] sm:h-[250px] object-cover rounded-2xl shadow-xl border border-slate-700" 
        />
      </div>
    </div>

    {/* Content Column */}
    <div className="flex-1 space-y-4 text-center md:text-left">
      <div>
        <span className="text-xs font-semibold uppercase tracking-widest text-blue-400 bg-blue-950/60 px-3 py-1 rounded-full border border-blue-800/50">
          Operations & Administrative Support
        </span>
        <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-white mt-2">
          Meet Brett
        </h3>
      </div>

      <p className="text-sm sm:text-base leading-relaxed text-slate-300">
        I help businesses stay organized, productive, and profitable. 
        Whether you need dependable clerical support, customer follow-up, 
        tech assistance, website management, or day-to-day operations flow, 
        I am ready to step in and add value immediately.
      </p>

      {/* Quick Skill Badges / Highlights Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 pt-2 pb-1">
        <div className="bg-slate-900/80 border border-slate-800 px-3 py-2 rounded-lg text-xs text-slate-200 font-medium text-center">
          📊 Bookkeeping & 10-Key
        </div>
        <div className="bg-slate-900/80 border border-slate-800 px-3 py-2 rounded-lg text-xs text-slate-200 font-medium text-center">
          🗂️ Records Management
        </div>
        <div className="bg-slate-900/80 border border-slate-800 px-3 py-2 rounded-lg text-xs text-slate-200 font-medium text-center">
          💻 Web & Tech Ops
        </div>
        <div className="bg-slate-900/80 border border-slate-800 px-3 py-2 rounded-lg text-xs text-slate-200 font-medium text-center">
          🎨 Adobe & Media
        </div>
        <div className="bg-slate-900/80 border border-slate-800 px-3 py-2 rounded-lg text-xs text-slate-200 font-medium text-center">
          📞 Client Support
        </div>
        <div className="bg-slate-900/80 border border-slate-800 px-3 py-2 rounded-lg text-xs text-slate-200 font-medium text-center">
          ⚡ High Accountability
        </div>
      </div>

      <p className="text-sm sm:text-base leading-relaxed text-slate-300">
        With a strong background handling bookkeeping, precision 10-key entry, 
        and high-accountability office work from my time as a casino clerk—combined 
        with modern tech, programming, and digital media skills—I bridge 
        the gap between traditional administrative rigor and modern digital efficiency.
      </p>
    </div>

  </div>
</section>
        <section className="space-y-6 border-t border-slate-800 pt-10">
          <h3 className="text-xl font-semibold tracking-tight xl:text-2xl">
            Services
          </h3>

          <div className="grid gap-6 md:grid-cols-2">

            <div className="rounded-xl border border-slate-800 bg-slate-900/60 p-5">
              <h4 className="text-sm font-semibold text-slate-100 xl:text-lg">
                Office & Clerical Support
              </h4>

              <ul className="mt-3 space-y-1 text-xs text-slate-300 xl:text-base">
                <li>• Data Entry</li>
                <li>• Digital File Organization</li>
                <li>• Bookkeeping Assistance</li>
                <li>• Spreadsheet Updates</li>
                <li>• Document Management</li>
                <li>• Inventory Tracking</li>
                <li>• Customer Records</li>
                <li>• Administrative Support</li>
              </ul>
            </div>

            <div className="rounded-xl border border-slate-800 bg-slate-900/60 p-5">
              <h4 className="text-sm font-semibold text-slate-100 xl:text-lg">
                Sales & Customer Support
              </h4>

              <ul className="mt-3 space-y-1 text-xs text-slate-300 xl:text-base">
                <li>• Customer Follow-Up</li>
                <li>• Lead Tracking</li>
                <li>• Appointment Scheduling</li>
                <li>• CRM Updates</li>
                <li>• Customer Communication</li>
                <li>• Sales Assistance</li>
                <li>• Marketing Support</li>
                <li>• Business Development</li>
              </ul>
            </div>

            <div className="rounded-xl border border-slate-800 bg-slate-900/60 p-5">
              <h4 className="text-sm font-semibold text-slate-100 xl:text-lg">
                Computer & Technology
              </h4>

              <ul className="mt-3 space-y-1 text-xs text-slate-300 xl:text-base">
                <li>• Microsoft 365 Assistance</li>
                <li>• PowerShell Automation</li>
                <li>• Computer Troubleshooting</li>
                <li>• Windows Support</li>
                <li>• Software Installation</li>
                <li>• Technical Support</li>
                <li>• Workflow Improvements</li>
                <li>• System Organization</li>
              </ul>
            </div>

            <div className="rounded-xl border border-slate-800 bg-slate-900/60 p-5">
              <h4 className="text-sm font-semibold text-slate-100 xl:text-lg">
                Websites & Marketing
              </h4>

              <ul className="mt-3 space-y-1 text-xs text-slate-300 xl:text-base">
                <li>• Website Hosting</li>
                <li>• WordPress Websites</li>
                <li>• Landing Pages</li>
                <li>• Website Maintenance</li>
                <li>• SEO Improvements</li>
                <li>• Social Media Content</li>
                <li>• Advertising Campaigns</li>
                <li>• Online Promotions</li>
              </ul>
            </div>

          </div>
        </section>

        <section className="space-y-6 border-t border-slate-800 pt-10">
          <h3 className="text-xl font-semibold tracking-tight xl:text-2xl">
            Video Creation & Advertising
          </h3>

          <div className="rounded-xl border border-slate-800 bg-slate-900/60 p-6">
            <p className="text-sm text-slate-300 xl:text-base">
              Professional video editing and promotional content creation
              to help businesses showcase products, services, and inventory.
            </p>

            <ul className="mt-4 space-y-1 text-xs text-slate-300 xl:text-base">
              <li>• YouTube Videos</li>
              <li>• Vehicle Walkaround Videos</li>
              <li>• Social Media Videos</li>
              <li>• Commercial Editing</li>
              <li>• Motion Graphics</li>
              <li>• Adobe Premiere Pro</li>
              <li>• After Effects Animation</li>
              <li>• Video Optimization For Web & Mobile</li>
            </ul>
          </div>
        </section>
        

        <section className="space-y-6 border-t border-slate-800 pt-10">
          <h3 className="text-xl font-semibold tracking-tight xl:text-2xl">
            Why Businesses Work With Me
          </h3>

          <div className="grid gap-6 md:grid-cols-3">

            <div className="rounded-xl border border-slate-800 bg-slate-900/60 p-5 text-center">
              <h4 className="font-semibold">Casino Clerk Experience</h4>
              <p className="mt-2 text-sm text-slate-300">
                Bookkeeping support, 10-key entry, records management.
              </p>
            </div>

            <div className="rounded-xl border border-slate-800 bg-slate-900/60 p-5 text-center">
              <h4 className="font-semibold">Adobe Certified</h4>
              <p className="mt-2 text-sm text-slate-300">
                Graphics, marketing materials, and video production.
              </p>
            </div>

            <div className="rounded-xl border border-slate-800 bg-slate-900/60 p-5 text-center">
              <h4 className="font-semibold">Web Developer</h4>
              <p className="mt-2 text-sm text-slate-300">
                Websites, hosting, automation, and online marketing.
              </p>
            </div>

            <div className="rounded-xl border border-slate-800 bg-slate-900/60 p-5 text-center">
              <h4 className="font-semibold">Sales Focused</h4>
              <p className="mt-2 text-sm text-slate-300">
                Customer follow-up, lead engagement, and promotion.
              </p>
            </div>

            <div className="rounded-xl border border-slate-800 bg-slate-900/60 p-5 text-center">
              <h4 className="font-semibold">Technology Support</h4>
              <p className="mt-2 text-sm text-slate-300">
                Computers, Microsoft 365, and PowerShell support.
              </p>
            </div>

            <div className="rounded-xl border border-slate-800 bg-slate-900/60 p-5 text-center">
              <h4 className="font-semibold">Flexible & Reliable</h4>
              <p className="mt-2 text-sm text-slate-300">
                Comfortable wearing multiple hats and learning new systems.
              </p>
            </div>

          </div>
        </section>

        <section
          id="contact"
          className="rounded-2xl border border-indigo-500/30 bg-indigo-500/10 p-8 text-center"
        >
          <h3 className="text-3xl font-bold xl:text-5xl">
            Need An Extra Set Of Hands?
          </h3>

          <p className="mx-auto mt-4 max-w-3xl text-slate-300">
            Office work. Sales support. Customer follow-up. Technology help.
            Websites. Marketing. Video creation. One reliable person who can
            help keep your business moving forward.
          </p>

          <a
            href="https://contact.mybabb.com"
            className="mt-6 inline-block rounded-full bg-indigo-500 px-6 py-3 font-semibold transition hover:bg-indigo-400"
          >
            Contact Brett
          </a>
        </section>

        <NegotiablePricing />

      </main>
    </div>
  );
}