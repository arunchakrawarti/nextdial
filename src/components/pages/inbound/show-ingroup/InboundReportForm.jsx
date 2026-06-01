"use client";

import React, { useState } from "react";
import Input from "@/components/common/Input";
import Button from "@/components/common/Button";

const InboundReportForm = () => {
  const [version, setVersion] = useState("v2");
  const [showIvrOptions, setShowIvrOptions] = useState(false);

  return (
    <div className="bg-white rounded-xl border-light p-6 mt-5">
      {/* Top Links */}
      <div className="flex flex-wrap justify-end gap-2 text-primary text-sm font-medium mb-6">
        <a
          href="/inbound/show-ingroup/modify-group"
          className="hover:underline"
        >
          MODIFY
        </a>

        <span>|</span>

        {!showIvrOptions ? (
          <>
            <button
              type="button"
              onClick={() => setShowIvrOptions(true)}
              className="hover:underline"
            >
              IVR REPORT
            </button>

            <span>|</span>

            <button
              type="button"
              onClick={() =>
                setVersion((prev) => (prev === "v1" ? "v2" : "v1"))
              }
              className="hover:underline"
            >
              {version.toUpperCase()}
            </button>
          </>
        ) : (
          <>
            <button
              type="button"
              className="hover:underline"
            >
              DOWNLOAD
            </button>

            <span>|</span>

            <button
              type="button"
              onClick={() => setShowIvrOptions(false)}
              className="hover:underline"
            >
              CLOSER REPORT
            </button>
          </>
        )}

        <span>|</span>

        <a href="/" className="hover:underline">
          REPORTS
        </a>
      </div>

      {/* Heading */}
      <h2 className="heading font-lexend mb-6">
        Inbound Report
      </h2>

      {/* Form */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Date Range */}
        <div>
          <label className="block text-sm font-semibold mb-2">
            Date Range
          </label>

          <div className="flex items-center gap-2">
            <Input
              type="date"
              defaultValue="2026-06-01"
            />

            <span className="text-sm font-medium">to</span>

            <Input
              type="date"
              defaultValue="2026-06-01"
            />
          </div>
        </div>

        {/* Inbound Groups */}
        <Input
          label="Inbound Groups"
          type="select"
          defaultValue="AGENTDIRECT"
          options={[
            {
              label: "---NONE--- None selected",
              value: "",
            },
            {
              label: "AGENTDIRECT - Single Agent Direct Queue",
              value: "AGENTDIRECT",
            },
          ]}
        />

        {/* Shift */}
        <Input
          label="Shift"
          type="select"
          defaultValue="ALL"
          options={[
            { label: "ALL", value: "ALL" },
            { label: "DAY", value: "DAY" },
            { label: "NIGHT", value: "NIGHT" },
          ]}
        />

        {/* Display As */}
        <Input
          label="Display As"
          type="select"
          defaultValue="TEXT"
          options={[
            { label: "TEXT", value: "TEXT" },
            { label: "HTML", value: "HTML" },
          ]}
        />

        {/* Checkbox */}
        <div className="lg:col-span-2">
          <Input
            type="checkbox"
            checkboxLabel="Search archived data"
          />
        </div>
      </div>

      {/* Submit Button */}
      <div className="mt-6">
        <Button variant="gradient">
          Submit
        </Button>
      </div>

      {/* Demo Content */}
      {!showIvrOptions && (
        <div className="mt-8 rounded-lg border-light p-4">
          <h3 className="font-semibold text-lg mb-2">
            {version.toUpperCase()} Report View
          </h3>
          <p className="text-gray-600">
            Currently showing {version.toUpperCase()} report.
          </p>
        </div>
      )}

      {showIvrOptions && (
        <div className="mt-8 rounded-lg border-light p-4">
          <h3 className="font-semibold text-lg mb-2">
            IVR Report Options
          </h3>
          <p className="text-gray-600">
            Download or view closer report options from above links.
          </p>
        </div>
      )}
    </div>
  );
};

export default InboundReportForm;