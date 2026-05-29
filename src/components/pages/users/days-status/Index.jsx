import React from "react";
import Button from "@/components/common/Button";
import Input from "@/components/common/Input";

const MainStatus = () => {
  return (
    <div>
      <div className="rounded-[1rem]  border-light bg-white p-[1.5rem]">
        <div>
          <h1 className="heading font-lexend">
            Single Agent Daily
          </h1>

          <p className="mt-[0.25rem] font-lexend font-light text-[0.875rem] mb-5 text-gray-muted">
            Please select a user and date-time below and click submit. Note:
            stats taken from shift specified
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-[1.5rem]">
          <Input label="DATE FROM" type="date" />

          <Input label="DATE TO" type="date" />

          <Input
            label="CAMPAIGNS"
            type="select"
            placeholder="Select Call Status"
            options={[
              { label: "Answered", value: "answered" },
              { label: "Busy", value: "busy" },
              { label: "No Answer", value: "no-answer" },
            ]}
          />
          <Input
            label="DISPLAY AS"
            type="select"
            placeholder="Select User"
            options={[
              { label: "Manish", value: "manish" },
              { label: "Admin", value: "admin" },
              { label: "Agent", value: "agent" },
            ]}
          />
          <Input
            label="USER"
            type="text"
            placeholder="Enter User"
          />
          <Input
            label="SHIFT"
            type="select"
            placeholder="Select User"
            options={[
              { label: "ALL", value: "all" },
              { label: "AM", value: "am" },
              { label: "PM", value: "pm" },
            ]}
          />
        </div>

        <div className="mt-[1.5rem] flex items-center gap-[0.5rem]">
          <Input type="checkbox" label="Search archived data" />
        </div>

        <div className="mt-[2rem] flex justify-end">
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

export default MainStatus;
