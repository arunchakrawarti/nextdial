"use client";

import React from "react";
import Input from "@/components/common/Input";
import Button from "@/components/common/Button";

const MainUser = () => {
  return (
    <div className="space-y-[1.5rem]">

      <div className="rounded-[1rem]  border-light bg-white p-[1.5rem]">

        <div>
          <h1 className="font-lexend font-semibold text-[1.5rem] leading-[2rem] text-dark">
            User Stats Report
          </h1>

          <p className="mt-[0.25rem] font-lexend font-light text-[0.875rem] leading-[1.375rem] mb-5 text-gray-muted">
            View agent time, status and activity reports
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-[1.5rem]">

          <Input
            label="DATE FROM"
            type="date"
            defaultValue="2026-05-16"
          />

          <Input
            label="DATE TO"
            type="date"
            defaultValue="2026-05-16"
          />

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
            label="USER"
            type="select"
            placeholder="Select User"
            options={[
              { label: "Manish", value: "manish" },
              { label: "Admin", value: "admin" },
              { label: "Agent", value: "agent" },
            ]}
          />
        </div>

        
        <div className="mt-[1.5rem] flex items-center gap-[0.5rem]">

          <input
            type="checkbox"
            id="archivedData"
            className="h-[1rem] w-[1rem] cursor-pointer rounded border-light accent-primary"
          />

          <label
            htmlFor="archivedData"
            className="cursor-pointer font-lexend font-light text-[0.875rem] leading-[1.375rem] text-gray-muted"
          >
            Search archived data
          </label>
        </div>
        
        <div className="mt-[2rem]">
          <Button
            variant="gradient"
            icon="arrow-right-line"
            iconPosition="right"
            className="rounded-[0.75rem]"
          >
            Submit
          </Button>

        </div>

      </div>
    </div>
  );
};

export default MainUser;