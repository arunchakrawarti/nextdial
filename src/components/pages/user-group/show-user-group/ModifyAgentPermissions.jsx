"use client";

import React from "react";
import Input from "@/components/common/Input";

const ModifyAgentPermissions = () => {
  return (
    <div className="space-y-8 mt-5">
      <div className="bg-white rounded-xl overflow-hidden border-light">
        <div className="px-8 py-5 border-b">
          <h2 className="uppercase text-sm font-semibold tracking-widest text-dark">
            Agent Status & Permissions
          </h2>
        </div>

        <div className="p-6">
          {/* Checkbox Section */}
          <div className="mb-8">
            <label className="block mb-4 text-sm font-medium text-gray-800">
              Agent Status Viewable Groups ?
            </label>

            <div className="space-y-3">
              <Input
                type="checkbox"
                defaultChecked
                checkboxLabel="ALL-GROUPS — All user groups in the system"
              />

              <Input
                type="checkbox"
                checkboxLabel="CAMPAIGN-AGENTS — All users logged into the same campaign as the agent"
              />

              <Input
                type="checkbox"
                checkboxLabel="NOT-LOGGED-IN-AGENTS — All users in the system, even not logged-in users"
              />

              <Input
                type="checkbox"
                checkboxLabel="ADMIN — ADMINISTRATORS"
              />

              <Input
                type="checkbox"
                checkboxLabel="agent — agent"
              />
            </div>
          </div>
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
            <Input
              label="Agent Status View Time ?"
              type="select"
              defaultValue="N"
              options={[
                { label: "Y", value: "Y" },
                { label: "N", value: "N" },
              ]}
            />

            <Input
              label="Agent Call Log View ?"
              type="select"
              defaultValue="N"
              options={[
                { label: "Y", value: "Y" },
                { label: "N", value: "N" },
              ]}
            />

            <Input
              label="Agent Fullscreen ?"
              type="select"
              defaultValue="N"
              options={[
                { label: "Y", value: "Y" },
                { label: "N", value: "N" },
              ]}
            />

            <Input
              label="Script Override ?"
              type="select"
              defaultValue="NONE"
              options={[
                { label: "NONE", value: "NONE" },
                { label: "SCRIPT-1", value: "SCRIPT-1" },
                { label: "SCRIPT-2", value: "SCRIPT-2" },
              ]}
            />
          </div>
        </div>
      </div>
      <div className="bg-white rounded-xl overflow-hidden border-light">
        <div className="px-8 py-5 border-b">
          <h2 className="uppercase text-sm font-semibold tracking-widest text-gray-500">
            Agent Transfer Options
          </h2>
        </div>

        <div className="p-6 grid grid-cols-1 xl:grid-cols-2 gap-6">
  <Input
    label="Agent Allow Consultative Xfer ?"
    type="select"
    defaultValue="Y"
    options={[
      { label: "Y", value: "Y" },
      { label: "N", value: "N" },
    ]}
  />

  <Input
    label="Agent Allow Dial Override Xfer ?"
    type="select"
    defaultValue="Y"
    options={[
      { label: "Y", value: "Y" },
      { label: "N", value: "N" },
    ]}
  />

  <Input
    label="Agent Allow Voicemail Message Xfer ?"
    type="select"
    defaultValue="Y"
    options={[
      { label: "Y", value: "Y" },
      { label: "N", value: "N" },
    ]}
  />

  <Input
    label="Agent Allow Blind Xfer ?"
    type="select"
    defaultValue="Y"
    options={[
      { label: "Y", value: "Y" },
      { label: "N", value: "N" },
    ]}
  />

  <Input
    label="Agent Allow Dial With Customer Xfer ?"
    type="select"
    defaultValue="Y"
    options={[
      { label: "Y", value: "Y" },
      { label: "N", value: "N" },
    ]}
  />

  <Input
    label="Agent Allow Park Customer Dial Xfer ?"
    type="select"
    defaultValue="Y"
    options={[
      { label: "Y", value: "Y" },
      { label: "N", value: "N" },
    ]}
  />
</div>
      </div>
    </div>
  );
};

export default ModifyAgentPermissions;