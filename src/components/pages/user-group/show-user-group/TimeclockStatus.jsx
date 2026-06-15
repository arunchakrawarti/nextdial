"use client";
import React, { useState } from "react";
import BasicTable from "@/components/common/BasicTable";
import Button from "@/components/common/Button";
import Input from "@/components/common/Input";

const TimeclockStatus = () => {
  const [selectedGroup, setSelectedGroup] = useState("ADMIN");
  const columns = [
    {
      label: "#",
      key: "index",
    },
    {
      label: "User",
      key: "user",
    },
    {
      label: "Name",
      key: "name",
    },
    {
      label: "Ip Address",
      key: "ipAddress",
    },
    {
      label: "Tc Time",
      key: "tcTime",
    },
    {
      label: "Tc Login",
      key: "tcLogin",
    },
    {
      label: "Vici Last Log",
      key: "viciLastLog",
    },
    {
      label: "Vici Campaign",
      key: "viciCampaign",
    },
  ];
  const tableData = [
    {
      index: "TOTALS",
      user: "-",
      name: "-",
      ipAddress: "-",
      tcTime: "0:00",
      tcLogin: "-",
      viciLastLog: "-",
      viciCampaign: "-",
    },
  ];
  const legends = [
    {
      color: "bg-[#99ff33]",
      text: "TC Logged in and VICI active",
    },
    {
      color: "bg-[#ffff33]",
      text: "TC Logged in only",
    },
    {
      color: "bg-[#ff6666]",
      text: "VICI active only",
    },
    {
      color: "bg-[#66cc66]",
      text: "TC Logged out and VICI active",
    },
    {
      color: "bg-[#cccc00]",
      text: "TC Logged out only",
    },
  ];

  return (
    <div className="w-full bg-white border-light rounded-2xl shadow-sm overflow-hidden">
      <div className="px-4 sm:px-6 py-4 border-b border-gray-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2">
        <h2 className="heading font-lexend">
          Timeclock Status for ADMIN
        </h2>

        <div className="uppercase text-xs sm:text-sm font-semibold text-slate-500">
          Timeclock Report |
          <span className="ml-1 underline cursor-pointer text-primary">
            User Group
          </span>
        </div>
      </div>

      <div className="p-4 sm:p-6 border-b border-gray-200">
        <div className="flex flex-col lg:flex-row items-start lg:items-end gap-4">

          <div className="w-full lg:max-w-xs">
            <Input
              label="Select Group"
              type="select"
              value={selectedGroup}
              onChange={(e) => setSelectedGroup(e.target.value)}
              options={[
                { label: "ADMIN", value: "ADMIN" },
                { label: "AGENT", value: "AGENT" },
                { label: "SUPPORT", value: "SUPPORT" },
              ]}
            />
          </div>

          <Button
            variant="gradient"
            onClick={() => alert("Submitted")}
          >
            Submit
          </Button>
        </div>
      </div>

      {/* Legend Section */}
      <div className="p-4 sm:p-6 border-b border-gray-200">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">

          {legends.map((item, index) => (
            <div
              key={index}
              className="flex items-center gap-3"
            >
              <div
                className={`w-12 h-8 rounded border border-gray-300 shadow-sm ${item.color}`}
              />

              <span className="text-sm text-dark font-medium">
                {item.text}
              </span>
            </div>
          ))}

        </div>
      </div>
      <div className="px-4 sm:px-6 pt-6 flex flex-col sm:flex-row items-center gap-2 text-center">
        <h3 className="heading font-lexend">
          User Status for User Group: {selectedGroup}
        </h3>

        <a
          href="#"
          className="text-primary font-bold text-sm hover:underline uppercase"
        >
          [Download]
        </a>
      </div>
      <div className="p-4 sm:p-6 overflow-x-auto">
        <BasicTable
          columns={columns}
          data={tableData}
          pagination={false}
          wrapperClassName="border border-gray-200 rounded-xl"
        />
      </div>
    </div>
  );
};

export default TimeclockStatus;