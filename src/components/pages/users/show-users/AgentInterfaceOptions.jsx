"use client";
import React from "react";
import Input from "@/components/common/Input"; 

const AgentInterfaceOptions = () => {
  return (
    <div className="w-full space-y-6">
      <div className="bg-white rounded-xl p-6 border-light space-y-6">
        <div className="flex items-center gap-2 pb-3 border-b border-[#f4f5f9]">
          <h2 className="text-[15px] font-bold text-dark uppercase tracking-wide">
            Agent Interface Options
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-6 gap-y-4">
          <Input
            label="Agent Choose Ingroups"
            type="select"
            options={["1", "2", "3"]}
          />

          <Input
            label="Next-Dial My Callbacks Override"
            type="select"
            options={["NOT_ACTIVE", "ACTIVE"]}
          />

          <Input
            label="Agent Choose Blended"
            type="select"
            options={["1", "0"]}
          />

          <Input label="Agent Call Manual" type="select" options={["1", "0"]} />

          <Input label="Hot Keys Active" type="select" options={["0", "1"]} />

          <Input
            label="Scheduled Callbacks"
            type="select"
            options={["1", "0"]}
          />

          <Input
            label="Agent-Only Callbacks"
            type="select"
            options={["1", "0"]}
          />

          <Input label="Agent Recording" type="select" options={["1", "0"]} />

          <Input label="Agent Transfers" type="select" options={["1", "0"]} />

          <Input
            label="Agent Recording Override"
            type="select"
            options={["DISABLED", "ENABLED"]}
          />

          <Input
            label="Agent Alter Customer Data Override"
            type="select"
            options={["NOT_ACTIVE", "ACTIVE"]}
          />

          <Input
            label="Agent Alter Customer Phone Override"
            type="select"
            options={["NOT_ACTIVE", "ACTIVE"]}
          />

          <Input
            label="Agent Shift Enforcement Override"
            type="select"
            options={["DISABLED", "ENABLED"]}
          />

          <Input
            label="Agent Call Log View Override"
            type="select"
            options={["DISABLED", "ENABLED"]}
          />

          <div className="lg:col-span-2">
            <Input
              label="Manual Dial Filter Override"
              type="select"
              options={["DISABLED", "ENABLED"]}
            />
          </div>

          <Input
            label="Manual Dial by Lead ID Override"
            type="select"
            options={["DISABLED", "ENABLED"]}
          />

          <Input
            label="Closer Default Blended"
            type="select"
            options={["0", "1"]}
          />

          <Input label="Alert Enabled" type="select" options={["0", "1"]} />

          <Input label="Allow Alerts" type="select" options={["0", "1"]} />

          <Input
            label="Preset Contact Search"
            type="select"
            options={["NOT_ACTIVE", "ACTIVE"]}
          />

          <div>
            <label className="flex items-center gap-1 text-xs font-semibold text-gray-500 mb-1.5">
              Max Inbound Calls{" "}
              <span className="text-gray-400 italic font-normal ml-1">
                inbound calls today: 0
              </span>
            </label>
            <Input type="text" placeholder="0" />
          </div>

          <Input
            label="Max Inbound Calls Filtering Enabled"
            type="select"
            options={["0", "1"]}
          />

          <div>
            <label className="flex items-center gap-1 text-xs font-semibold text-gray-500 mb-1.5">
              Max Manual Dial Hopper Calls{" "}
              <span className="text-gray-400 italic font-normal ml-1">
                hopper calls today: 0
              </span>
            </label>
            <Input type="text" placeholder="0" />
          </div>

          <div>
            <label className="flex items-center gap-1 text-xs font-semibold text-gray-500 mb-1.5">
              Max Manual Dial Hopper Calls Per Hour{" "}
              <span className="text-gray-400 italic font-normal ml-1">
                hopper calls this hour: 0
              </span>
            </label>
            <Input type="text" placeholder="0" />
          </div>

          <Input label="Wrap Seconds Override" type="text" placeholder="-1" />

          <Input
            label="Agent Ready Max Logout Override"
            type="text"
            placeholder="-1"
          />

          <div className="relative">
            <label className="flex items-center gap-1 text-xs font-semibold text-[#5a52cd] mb-1.5">
              Lead Filter{" "}
              <span className="text-gray-400 italic font-normal ml-1">
                only enabled with no-hopper manual dialing
              </span>
            </label>
            <Input type="select" options={["NONE -"]} />
          </div>

          <div className="lg:col-span-2">
            <Input
              label="Additional Status Group"
              type="select"
              options={["NONE"]}
            />
          </div>
        </div>

        <div className="space-y-4">
  <h3 className="text-sm font-semibold text-gray-600">
    Max Inbound Calls Filtering Options
  </h3>

  <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
    
    {/* 1. Filter Statuses */}
    <div className="md:col-span-2">
      <Input
        label="Filter Statuses"
        type="select"
        options={["AA", "AB", "ADAIR", "ADC", "ADCT", "AFAX", "AFTHRS"]}
      />
    </div>

    {/* 2. Filter In-Groups */}
    <div className="md:col-span-2">
      <Input
        label="Filter In-Groups"
        type="select"
        options={[
          "12345 - Inbound_Testing",
          "AGENTDIRECT - Single Agent Direct Queue",
          "AGENTDIRECT_CHAT - Agent Direct Queue for Chats",
        ]}
      />
    </div>

    {/* 3. Filter Minimum Seconds */}
    <div className="md:col-span-1">
      <Input
        label="Filter Minimum Seconds"
        type="text"
        placeholder="-1"
      />
    </div>

  </div>
</div>
      </div>
    </div>
  );
};

export default AgentInterfaceOptions;
