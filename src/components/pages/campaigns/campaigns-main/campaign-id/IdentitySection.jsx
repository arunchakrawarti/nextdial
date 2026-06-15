import Input from "@/components/common/Input";
import React from "react";
import Button from "@/components/common/Button";

const IdentitySection = () => {
  return (
    <div>
      <div>
        <h3 className="text-sm font-semibold uppercase text-gray-500 tracking-wider mb-4 border-l-4 border-blue-500 pl-2">
          Campaign Identity & Basic Info
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Input label="Campaign ID" placeholder="outbound" type="text" />
          <Input label="Campaign Name" placeholder="outbound" type="text" />
          <Input
            label="Campaign Description"
            placeholder="outbound"
            type="text"
          />
          <Input
            label="Campaign Change Date"
            placeholder="2026-05-28 11:40:18"
            type="text"
            disabled
          />
          <Input
            label="Campaign Login Date"
            placeholder="2026-05-20 13:37:15"
            type="text"
            disabled
          />
          <Input
            label="Campaign Call Date"
            placeholder="2026-04-23 14:00:02"
            type="text"
            disabled
          />
          <Input label="Active" type="select" options={["Y", "N"]} />
          <Input
            label="Admin User Group"
            type="select"
            options={["agent", "Support", "Manager"]}
          />

          <Input
            label="Park Music-on-Hold"
            placeholder="Enter moh chooser"
            type="text"
          />

          <Input
            label="Web Form"
            placeholder="Enter Web Form URL"
            type="text"
          />

          <Input
            label="Web Form Two"
            placeholder="Enter Web Form Two URL"
            type="text"
          />

          <Input label="Web Form Target" placeholder="vdcwebform" type="text" />

          <Input label="Allow Closers" type="select" options={["N", "Y"]} />
          <Input
            label="Allow Inbound and Blended"
            type="select"
            options={["N", "Y"]}
          />

          <div className="flex gap-3 items-end">
            <div className="flex-1">
              <Input
                label="Add A Dial Status to Call"
                type="select"
                options={["- NONE -", "BUSY", "DISCONNECT"]}
              />
            </div>
            <Button variant="primary" type="button" className="h-11 px-4">
              ADD
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IdentitySection;
