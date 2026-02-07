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
   
  ];

  const copyToClipboard = async (text, name) => {
    await navigator.clipboard.writeText(text);
    setCopied(name);
    setTimeout(() => setCopied(null), 1500);
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white p-6">
      <h1 className="text-3xl font-bold mb-6">Admin Panel</h1>

      <div className="space-y-4 ">
        {forms.map((form) => (
          <div
            key={form.name}
            className="flex flex-col xs:flex-row items-center justify-between bg-gray-800 p-4 rounded-lg shadow
                       "
          >
            <div>
              <p className="text-lg font-semibold">{form.name}</p>
              <p className="text-sm text-gray-400">{form.url}</p>
            </div>

            <div className="relative flex flex-col    gap-3 w-[100px]">
  {/* COPY BUTTON */}
  <button
    onClick={() => copyToClipboard(form.url, form.name)}
    className="w-[5rem] px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-md text-sm"
  >
    {copied === form.name ? "Copied!" : "Copy"}
  </button>

  {/* GO TO BUTTON */}
  <a
    href={form.url}
    target="_blank"
    rel="noopener noreferrer"
    className="w-[5rem] px-4 py-2 bg-green-600 hover:bg-green-700 rounded-md text-sm text-center"
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
