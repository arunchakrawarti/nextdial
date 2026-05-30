"use client";
import React, { useState } from "react";
import Button from "@/components/common/Button";
import Input from "@/components/common/Input";

const LoadLeadsForm = () => {
  const [fileLayout, setFileLayout] = useState("standard");

  return (
    <div className="bg-white rounded-lg p-6 mt-5 border-light">
      <h2 className="heading font-lexend mb-4">List Loader 4th Gen</h2>

      <form className="grid grid-cols-1 xl:grid-cols-2 gap-4">
        <Input label="Load Leads From File" type="file" />

        <Input
          label="List ID Override"
          type="select"
          options={["Load from Lead File", "Custom List ID"]}
        />

        <Input
          label="Phone Code Override"
          type="select"
          options={["Load from Lead File", "Custom Phone Code"]}
        />

        <Input
          label="Custom Layout To Use"
          type="select"
          options={["--Select Custom Template--"]}
        />

        <Input
          label="Lead Duplicate Check"
          type="select"
          options={[
            "NO DUPLICATE CHECK",
            "CHECK BY PHONE NUMBER",
            "CHECK BY PHONE NUMBER AND LIST ID",
          ]}
        />

        <Input
          label="USA-Canada Check"
          type="select"
          options={[
            "NO USACAN VALID CHECK",
            "CHECK FOR VALID USA-CANADA NUMBERS",
          ]}
        />

        <Input
          label="Lead Time Zone Lookup"
          type="select"
          options={[
            "COUNTRY CODE AND AREA CODE ONLY",
            "POSTAL CODE FIRST",
            "AREA CODE FIRST",
          ]}
        />

        <Input
          label="State Abbreviation Lookup"
          type="select"
          options={["DISABLED", "ENABLED"]}
        />

        <Input
          label="Required Phone Number Length"
          type="select"
          options={["DISABLED", "10 DIGITS", "11 DIGITS"]}
        />
        <div>
          <label className="block mb-2 text-sm font-medium text-gray-700">
            File Layout To Use
          </label>

          <div className="flex flex-wrap gap-4">
            <label className="flex items-center text-gray-400 gap-2 text-sm">
              <input
                type="radio"
                name="fileLayout"
                checked={fileLayout === "standard"}
                onChange={() => setFileLayout("standard")}
              />
              Standard Format
            </label>

            <label className="flex items-center text-gray-400 gap-2 text-sm">
              <input
                type="radio"
                name="fileLayout"
                checked={fileLayout === "custom_layout"}
                onChange={() => setFileLayout("custom_layout")}
              />
              Custom Layout
            </label>

            <label className="flex items-center text-gray-400 gap-2 text-sm">
              <input
                type="radio"
                name="fileLayout"
                checked={fileLayout === "custom_template"}
                onChange={() => setFileLayout("custom_template")}
              />
              Custom Template
            </label>
          </div>
        </div>
        <div className="xl:col-span-2">
          <Input
            label="Status Duplicate Check"
            type="select"
            options={[
              "--ALL DISPOSITIONS--",
              "A - Answering Machine",
              "AA - Answering Machine Auto",
              "AB - Busy Auto",
              "ADAIR - Dead Air Auto",
            ]}
          />
        </div>
        <div className="xl:col-span-2 flex justify-end gap-3 mt-4">
          <Button variant="gradient" className="px-16">
            Submit
          </Button>

          <Button type="reset" variant="secondary" className="px-16">
            Start Over
          </Button>
        </div>
      </form>
    </div>
  );
};

export default LoadLeadsForm;
