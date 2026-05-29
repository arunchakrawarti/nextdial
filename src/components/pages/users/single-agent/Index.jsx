"use client";

import React from "react";
import Button from "@/components/common/Button";
import Input from "@/components/common/Input";
import NoRecordsAlert from "./NoRecordsAlert";

const MainSingleAgent = () => {
  return (
    <div className="space-y-6">
      <div className="rounded-2xl border border-light bg-white p-4 sm:p-6">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <h2 className="heading font-lexend">
            Single Agent Daily
          </h2>

          <div className="flex flex-wrap gap-2 sm:gap-3">
            <Button variant="gradient">Download</Button>

            <Button href="/users/show-user" variant="success">
              USER
            </Button>

            <Button href="/users/user-stats" variant="success">
              USER STATS
            </Button>

            <Button href="/" variant="success">
              REPORTS
            </Button>
          </div>
        </div>

        {/* Form */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-6 mt-6">
          <Input label="DATE FROM" type="date" />

          <Input label="DATE TO" type="date" />

          <Input
            label="CALL STATUS"
            type="select"
            placeholder="Select Call Status"
            options={[
              { label: "Answered", value: "answered" },
              { label: "Busy", value: "busy" },
              { label: "No Answer", value: "no-answer" },
            ]}
          />

          <Input
            label="CAMPAIGNS"
            type="select"
            placeholder="Select Campaign"
            options={[
              { label: "Manish", value: "manish" },
              { label: "Admin", value: "admin" },
              { label: "Agent", value: "agent" },
            ]}
          />

          <Input
            label="DISPLAY AS"
            type="select"
            placeholder="Select Display Type"
            options={[
              { label: "Text", value: "text" },
              { label: "Html", value: "html" },
              { label: "Js", value: "js" },
            ]}
          />

          <Input
            label="USER"
            type="text"
            placeholder="1002"
          />

          <Input
            label="SHIFT"
            type="select"
            placeholder="Select Shift"
            options={[
              { label: "All", value: "all" },
              { label: "AM", value: "am" },
              { label: "PM", value: "pm" },
            ]}
          />
        </div>

        <div className="mt-6">
          <Input
            type="checkbox"
            label="Search archived data"
          />
        </div>

        <div className="mt-8 flex justify-stretch sm:justify-end">
          <Button
            variant="gradient"
            icon="arrow-right-line"
            iconPosition="right"
            className="w-full sm:w-auto rounded-xl"
          >
            Submit
          </Button>
        </div>
      </div>

      <NoRecordsAlert />
    </div>
  );
};

export default MainSingleAgent;