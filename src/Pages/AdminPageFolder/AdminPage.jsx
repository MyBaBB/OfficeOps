import React, { useState } from "react";

export default function OfficeOpsAdmin() {
  const forms = [
    {
      name: "OfficeOps",
      label: "OfficeOps Contact Form",
      url: "https://officehelper.brainbuddys.com/officeops",
    },
    {
      name: "EbayHelper",
      label: "eBay Helper Contact Form",
      url: "https://officehelper.brainbuddys.com/ebayHelper",
    },
  ];

  const [copied, setCopied] = useState(null);

  const copyToClipboard = (text, name) => {
    navigator.clipboard.writeText(text);
    setCopied(name);
    setTimeout(() => setCopied(null), 1500);
  };

  return (
    <div className="min-h-screen w-full bg-gray-900 p-10">
      <div className="mx-auto max-w-3xl rounded-xl bg-white p-8 shadow-lg">
        <h1 className="mb-6 text-center text-3xl font-bold">
          OfficeOps Admin Panel
        </h1>

        <p className="mb-10 text-center text-gray-600">
          Quick access to your OfficeOps contact form URLs. Click copy to grab
          the link instantly.
        </p>

        <div className="space-y-6">
          {forms.map((form) => (
            <div
              key={form.name}
              className="flex items-center justify-between rounded-lg border bg-gray-50 p-4"
            >
              <div>
                <h2 className="text-lg font-semibold">{form.label}</h2>
                <p className="text-sm text-gray-500">{form.url}</p>
              </div>

              <button
                onClick={() => copyToClipboard(form.url, form.name)}
                className="rounded-lg bg-blue-600 px-4 py-2 text-white transition hover:bg-blue-700"
              >
                {copied === form.name ? "Copied!" : "Copy"}
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
