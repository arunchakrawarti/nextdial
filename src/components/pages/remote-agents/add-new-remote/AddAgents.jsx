"use client";

import React from "react";
import Input from "@/components/common/Input";
import Button from "@/components/common/Button";

const AddAgents = () => {
  return (
    <div className="w-full bg-white rounded-xl border-light overflow-hidden">
      
      {/* Heading */}
      <div>
        <h2 className="heading uppercase text-[20px] sm:text-[24px] md:text-[28px] p-4">
          Add New Remote Agents
        </h2>
      </div>

      {/* Form */}
      <div className="p-4 sm:p-5 md:p-6">

        {/* 2 Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">

          {/* User ID Start */}
          <Input
            label="User ID Start"
            type="text"
            placeholder="Enter User ID"
          />

          {/* Number of Lines */}
          <Input
            label="Number of Lines"
            type="text"
            placeholder="Enter Number of Lines"
          />

          {/* Server IP */}
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

          {/* External Extension */}
          <Input
            label="External Extension"
            type="text"
            placeholder="Enter Extension"
          />

          {/* Status */}
          <Input
            label="Status"
            type="select"
            placeholder="Select Status"
            options={[
              { label: "ACTIVE", value: "active" },
              { label: "INACTIVE", value: "inactive" },
            ]}
          />

          {/* Campaign */}
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

        {/* Inbound Groups */}
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

        {/* Submit Button */}
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