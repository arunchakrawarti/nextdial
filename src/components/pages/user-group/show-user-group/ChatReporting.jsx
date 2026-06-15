"use client";

import React from "react";
import Input from "@/components/common/Input";

const ChatReporting = () => {
  return (
    <div className="space-y-8 mt-5">
      <div className="bg-white rounded-xl overflow-hidden border-light">
        <div className="px-8 py-5 border-b">
          <h2 className="heading font-lexend">
            Chat & Reporting
          </h2>
        </div>

        <div className="p-6">
          <div className="mb-8">
            <label className="block mb-4 text-sm font-medium text-gray-600">
              Agent Allowed Chat Groups ?
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

              <Input type="checkbox" checkboxLabel="ADMIN — ADMINISTRATORS" />

              <Input type="checkbox" checkboxLabel="agent — agent" />
            </div>
          </div>

          <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
            <Input
              label="Allowed Reports ?"
              type="select"
              defaultValue="all_reports"
              options={[
                { label: "ALL REPORTS", value: "all_reports" },
                { label: "NONE", value: "none" },
                { label: "Real-Time Main Report", value: "main_report" },
                {
                  label: "Real-Time Campaign Summary",
                  value: "campaign_summary",
                },
                {
                  label: "Real-Time Whiteboard Report",
                  value: "whiteboard_report",
                },
              ]}
            />
            <div>
              <label className="block mb-2 text-[12px] font-semibold text-gray-600 uppercase tracking-wider">
                Allowed Queue Groups ?
              </label>

              <Input
                type="checkbox"
                checkboxLabel="ALL-GROUPS - USERS CAN VIEW ANY QUEUE GROUP"
              />
            </div>
            <Input
              label="Reports Header Override ?"
              type="select"
              defaultValue="DISABLED"
              options={[
                { label: "DISABLED", value: "DISABLED" },
                { label: "ENABLED", value: "ENABLED" },
              ]}
            />
          </div>
        </div>
      </div>
      <div className="bg-white rounded-xl overflow-hidden border-light">
        <div className="px-8 py-5 border-b">
          <h2 className="heading font-lexend">
            URL & Webphone Overrides
          </h2>
        </div>

        <div className="p-6 grid grid-cols-1 xl:grid-cols-2 gap-6">
          <Input
            label="Home URL Override ?"
            type="text"
            placeholder="Enter Home URL"
          />

          <Input
            label="Webphone URL Override ?"
            type="text"
            placeholder="Enter Webphone URL"
          />

          <Input
            label="Webphone System Key Override ?"
            type="text"
            placeholder="Enter System Key"
          />

          <Input
            label="Webphone Dialpad Override ?"
            type="select"
            defaultValue="DISABLED"
            options={[
              { label: "DISABLED", value: "DISABLED" },
              { label: "ENABLED", value: "ENABLED" },
            ]}
          />

          <div className="xl:col-span-2">
            <Input
              label="Webphone Layout Override ?"
              type="text"
              placeholder="Enter Layout Override"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatReporting;
