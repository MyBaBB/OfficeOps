import { useState } from "react";

export default function Admin() {
  const [copied, setCopied] = useState(null);

  const forms = [
    {
      name: "Office-Ops",
      url: "https://officehelper.brainbuddys.com/officeops",
    },
    {
      name: "Ebay-Helper",
      url: "https://officehelper.brainbuddys.com/ebayhelper",
    },

    {
      name: "Image_Restore",
      url: "https://officehelper.brainbuddys.com/image_restore",
    },
    {
      name: "Computer-Technician",
      url: "https://officehelper.brainbuddys.com/comptech",
    },
    {
      name: "Open-Source-Coder",
      url: "https://officehelper.brainbuddys.com/open_source",
    },
  ];

  const copyToClipboard = async (text, name) => {
    await navigator.clipboard.writeText(text);
    setCopied(name);
    setTimeout(() => setCopied(null), 1500);
  };

  return (
    <div className="min-h-screen bg-gray-900 p-6 text-white">
      <h1 className="mb-6 text-3xl font-bold">Admin Panel</h1>

      <div className="space-y-4">
        {forms.map((form) => (
          <div
            key={form.name}
            className="flex flex-col items-center justify-between rounded-lg bg-gray-800 p-4 shadow xs:flex-row"
          >
            <div>
              <p className="text-lg font-semibold">{form.name}</p>
              <p className="text-sm text-gray-400">{form.url}</p>
            </div>

            <div className="relative flex w-[100px] flex-col gap-3">
              {/* COPY BUTTON */}
              <button
                onClick={() => copyToClipboard(form.url, form.name)}
                className="w-[5rem] rounded-md bg-blue-600 px-4 py-2 text-sm hover:bg-blue-700"
              >
                {copied === form.name ? "Copied!" : "Copy"}
              </button>

              {/* GO TO BUTTON */}
              <a
                href={form.url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-[5rem] rounded-md bg-green-600 px-4 py-2 text-center text-sm hover:bg-green-700"
              >
                Go To
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
