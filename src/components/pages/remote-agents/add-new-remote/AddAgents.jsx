"use client";

import React from "react";
import Input from "@/components/common/Input";
import Button from "@/components/common/Button";

const AddAgents = () => {
  return (
    <div className="w-full bg-white rounded-xl border-light overflow-hidden">
      <div>
        <h2 className="heading font-lexend p-4">
          Add New Remote Agents
        </h2>
      </div>

      <div className="p-4 sm:p-5 md:p-6">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">

          <Input
            label="User ID Start"
            type="text"
            placeholder="Enter User ID"
          />
          <Input
            label="Number of Lines"
            type="text"
            placeholder="Enter Number of Lines"
          />

          <Input
            label="Server IP"
            type="select"
            placeholder="Select Server"
            options={[
              {
                label: "192.168.0.203 - Server vicibox12 - Y - Y",
                value: "server1",
              },
              {
                label: "192.168.0.204 - Server vicibox13 - Y - Y",
                value: "server2",
              },
            ]}
          />
          <Input
            label="External Extension"
            type="text"
            placeholder="Enter Extension"
          />
          <Input
            label="Status"
            type="select"
            placeholder="Select Status"
            options={[
              { label: "ACTIVE", value: "active" },
              { label: "INACTIVE", value: "inactive" },
            ]}
          />
          <Input
            label="Campaign"
            type="select"
            placeholder="Select Campaign"
            options={[
              { label: "SALES", value: "sales" },
              { label: "SUPPORT", value: "support" },
              { label: "OUTBOUND", value: "outbound" },
            ]}
          />

        </div>
        <div className="mt-6">
          
          <label className="font-semibold mb-3 text-[12px] text-gray-600 uppercase tracking-wider font-lexend block">
            Inbound Groups
          </label>

          <div className="space-y-3">

            <Input
              type="checkbox"
              checkboxLabel="AGENTDIRECT - Single Agent Direct Queue - 99"
            />

            <Input
              type="checkbox"
              checkboxLabel="AGENTDIRECT_CHAT - Agent Direct Queue for Chats - 99"
            />

          </div>
        </div>
        <div className="flex justify-center sm:justify-end pt-6">
          <Button
            variant="gradient"
            className="w-full sm:w-auto min-w-[160px]"
          >
            SUBMIT
          </Button>
        </div>

      </div>
    </div>
  );
};

export default AddAgents;