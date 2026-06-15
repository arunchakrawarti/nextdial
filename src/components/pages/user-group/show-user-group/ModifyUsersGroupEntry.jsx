"use client";
import React from "react";
import Input from "@/components/common/Input";
import ModifyAgentPermissions from "./ModifyAgentPermissions";
import ChatReporting from "./ChatReporting";
import ChatReportingTable from "./ChatReportingTable";
import UserGroupDetails from "./UserGroupDetails";

const ModifyUsersGroupEntry = () => {
  return (
    <div className="bg-white font-lexend">
      <div className="rounded-xl border-light p-6">
        <h1 className="heading font-lexend mb-6">
        Modify a Users Group Entry
      </h1>
      <div className="border rounded-xl overflow-hidden mb-8">
        <div className="bg-gray-50 px-6 py-4 border-b">
          <h2 className="heading font-lexend">
            Basic Settings
          </h2>
        </div>

        <div className="p-6 space-y-5">
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-700">
              Group ?
            </label>

            <div className="text-indigo-600 text-lg font-bold">
              ADMIN
            </div>
          </div>

          <Input
            label="Description ?"
            type="text"
            defaultValue="ADMINISTRATORS"
          />

          <p className="-mt-3 text-xs text-gray-500">
            description of group
          </p>

          <div className="max-w-sm">
            <Input
              label="Force Timeclock Login ?"
              type="select"
              defaultValue="N"
              options={[
                { label: "Y", value: "Y" },
                { label: "N", value: "N" },
              ]}
            />
          </div>

          <div className="max-w-sm">
            <Input
              label="Shift Enforcement ?"
              type="select"
              defaultValue="OFF"
              options={[
                { label: "OFF", value: "OFF" },
                { label: "ON", value: "ON" },
              ]}
            />
          </div>
        </div>
      </div>
      </div>

      <div className="border rounded-xl overflow-hidden border-light mt-5">
        <div className=" px-6 py-4 border-b">
          <h2 className="heading font-lexend">
            Campaigns & Shifts
          </h2>
        </div>

        <div className="p-6 space-y-6">
          <div>
            <Input
              label="Allowed Campaigns ?"
              type="checkbox"
              defaultChecked
              checkboxLabel="ALL-CAMPAIGNS - USERS CAN VIEW ANY CAMPAIGN"
            />

            <div className="mt-4">
              <Input
                type="checkbox"
                checkboxLabel="outbound - outbound"
              />
            </div>
          </div>

          <div>
            <Input
              label="Group Shifts ?"
              type="checkbox"
              checkboxLabel="24HRMIDNIGHT — 24 hours 7 days a week"
            />
          </div>
        </div>
      </div>
      <ModifyAgentPermissions/>
      <ChatReporting/>
      <ChatReportingTable/>
      <UserGroupDetails/>
    </div>
  );
};

export default ModifyUsersGroupEntry;