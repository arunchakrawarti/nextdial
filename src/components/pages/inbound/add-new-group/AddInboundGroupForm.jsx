"use client";

import React from "react";
import Input from "@/components/common/Input";
import Button from "@/components/common/Button";

const AddInboundGroupForm = () => {
  return (
    <div className="bg-white rounded-xl border-light p-6 mt-5">
      <h2 className="heading font-lexend mb-6">
        Add A New Inbound Group
      </h2>

      {/* Single Wrapper Div */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

        <Input
          label="Group ID"
          type="text"
          placeholder="no spaces"
        />

        <Input
          label="Group Name"
          type="text"
          placeholder="Enter group name"
        />

        <Input
          label="Group Color"
          type="text"
          placeholder="e.g. FF5733"
        />

        <Input
          label="Active"
          type="select"
          defaultValue="Y"
          options={[
            { label: "Y", value: "Y" },
            { label: "N", value: "N" },
          ]}
        />

        <Input
          label="Admin User Group"
          type="select"
          defaultValue="ALL"
          options={[
            { label: "All Admin User Groups", value: "ALL" },
            { label: "Agent", value: "agent" },
            { label: "Admin", value: "admin" },
          ]}
        />

        <Input
          label="Voicemail"
          type="text"
          placeholder="Extension"
        />

        {/* Full Width */}
        <div className="lg:col-span-2">
          <Input
            label="Web Form"
            type="text"
            placeholder="https://"
          />
        </div>

        <Input
          label="Next Agent Call"
          type="select"
          defaultValue="random"
          options={[
            { label: "random", value: "random" },
            { label: "oldest_call_start", value: "oldest_call_start" },
            { label: "fewest_calls", value: "fewest_calls" },
          ]}
        />

        <Input
          label="Fronter Display"
          type="select"
          defaultValue="Y"
          options={[
            { label: "Y", value: "Y" },
            { label: "N", value: "N" },
          ]}
        />

        <Input
          label="Script"
          type="select"
          defaultValue="NONE"
          options={[
            { label: "NONE", value: "NONE" },
            { label: "Sales Script", value: "sales" },
            { label: "Support Script", value: "support" },
          ]}
        />

        <Input
          label="Get Call Launch"
          type="select"
          defaultValue="NONE"
          options={[
            { label: "NONE", value: "NONE" },
            { label: "Launch 1", value: "launch1" },
            { label: "Launch 2", value: "launch2" },
          ]}
        />
      </div>

      <div className="border-t mt-8 pt-6 flex justify-end">
        <Button
          variant="gradient"
        >
          Submit
        </Button>
      </div>
    </div>
  );
};

export default AddInboundGroupForm;