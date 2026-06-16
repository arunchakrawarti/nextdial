"use client";

import React from "react";
import BasicTable from "@/components/common/BasicTable";
import Input from "@/components/common/Input";
import Button from "@/components/common/Button"

const ChatReportingTable = () => {
  const userColumns = [
    {
      label: "User",
      key: "user",
    },
    {
      label: "Full Name",
      key: "fullName",
    },
    {
      label: "Level",
      key: "level",
      render: (value) => (
        <span className="px-3 py-1 rounded-full bg-purple-100 text-purple-700 text-sm font-medium">
          {value}
        </span>
      ),
    },
    {
      label: "Active",
      key: "active",
      render: (value) => (
        <span
          className={`px-3 py-1 rounded-full text-sm font-medium ${
            value === "Y"
              ? "bg-green-100 text-green-700"
              : "bg-gray-100 text-gray-600"
          }`}
        >
          {value}
        </span>
      ),
    },
  ];

  const userData = [
    {
      user: "6666",
      fullName: "Admin",
      level: 9,
      active: "Y",
    },
    {
      user: "VDAD",
      fullName: "Outbound Auto Dial",
      level: 1,
      active: "N",
    },
    {
      user: "VDCL",
      fullName: "Inbound No Agent",
      level: 1,
      active: "N",
    },
    {
      user: "manish",
      fullName: "Manish kumar",
      level: 9,
      active: "Y",
    },
  ];

  return (
    <div className="space-y-8 mt-5">
      
      <div className="bg-white rounded-xl overflow-hidden border border-gray-200">
        <div className="px-8 py-5 border-b">
          <h2 className="heading font-lexend">
            Visibility & Access
          </h2>
        </div>

        <div className="p-6">
          <div className="space-y-4">
            <label className="block text-sm font-medium text-gray-700">
              Allowed User Groups 
            </label>

            <div className="space-y-3">
              <Input
                type="checkbox"
                defaultChecked
                checkboxLabel="ALL-GROUPS — All user groups in the system"
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
          <div className="space-y-4 border-t mt-8 pt-8">
            <label className="block text-sm font-medium text-gray-700">
              Allowed Call Times ?
            </label>

            <div className="space-y-3">
              <Input
                type="checkbox"
                defaultChecked
                checkboxLabel="ALL-CALLTIMES — All call times in the system"
              />

              <Input
                type="checkbox"
                checkboxLabel="12pm-5pm — default 12pm to 5pm calling"
              />

              <Input
                type="checkbox"
                checkboxLabel="12pm-9pm — default 12pm to 9pm calling"
              />

              <Input
                type="checkbox"
                checkboxLabel="24hours — default 24 hours calling"
              />

              <Input
                type="checkbox"
                checkboxLabel="5pm-9pm — default 5pm to 9pm calling"
              />

              <Input
                type="checkbox"
                checkboxLabel="9am-5pm — default 9am to 5pm calling"
              />

              <Input
                type="checkbox"
                checkboxLabel="9am-9pm — default 9am to 9pm calling"
              />
            </div>
          </div>
          <div className="flex  border-t mt-8 pt-6">
            <Button variant="gradient">
              SUBMIT
            </Button>
          </div>
        </div>
      </div>

     <div className="bg-white rounded-xl overflow-hidden border border-gray-200">
  <div className="px-4 sm:px-6 lg:px-8 py-5 border-b flex items-center gap-3">
    <h2 className="heading font-lexend">
      Users Within This User Group
    </h2>
  </div>
  <div className="overflow-x-auto">
    <BasicTable
      columns={userColumns}
      data={userData}
      pagination={false}
    />
  </div>
  <div className="p-4 sm:p-6 border-t border-gray-200">
  
    <h2 className="font-lexend heading mb-5">
      Add or Remove In-Group Selected For Active Users in This User Group
    </h2>
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
      <Input
        label="Add"
        type="select"
        defaultValue="DISABLED"
        options={[
          { label: "DISABLED", value: "DISABLED" },
          { label: "ENABLED", value: "ENABLED" },
        ]}
      />

      <Input
        label="In-Group"
        type="select"
        defaultValue="DISABLED"
        options={[
          { label: "DISABLED", value: "DISABLED" },
          { label: "ENABLED", value: "ENABLED" },
        ]}
      />
    </div>

    <div className="mt-6">
      <Button variant="gradient">
        Submit
      </Button>
    </div>
  </div>
</div>
      
    </div>
  );
};

export default ChatReportingTable;