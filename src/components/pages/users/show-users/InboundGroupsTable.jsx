"use client";
import React from "react";
import BasicTable from "@/components/common/BasicTable";
import Input from "@/components/common/Input";

const InboundGroups = () => {
  const inboundColumns = [
    {
      label: "Inbound Group",
      key: "groupName",

      render: (value, row) => (
        <Input
          type="checkbox"
          label={value}
          defaultChecked={row.checked}
          className="accent-[#5a52cd]"
        />
      ),
    },
    {
      label: "Rank",
      key: "rank",
      render: (value) => (
        <Input
          type="select"
          options={["0", "1"]}
          defaultValue={value}
          className="h-9 w-24"
        />
      ),
    },
    {
      label: "Grade",
      key: "grade",
      render: (value) => (
        <Input
          type="select"
          options={["1", "2"]}
          defaultValue={value}
          className="h-9 w-24"
        />
      ),
    },
    {
      label: "Calls",
      key: "calls",
    },
    {
      label: "Limit",
      key: "limit",
      render: (value) => (
        <Input
          type="text"
          placeholder="-1"
          defaultValue={value}
          className="h-9 w-20 text-center"
        />
      ),
    },
    {
      label: "Web Vars",
      key: "webVars",
      render: (value) => (
        <Input type="text" defaultValue={value} className="h-9 w-full" />
      ),
    },
  ];

  const inboundData = [
    {
      groupName: "12345 - Inbound_Testing",
      checked: false,
      rank: "0",
      grade: "1",
      calls: "0",
      limit: "-1",
      webVars: "",
    },
    {
      groupName: "AGENTDIRECT - Single Agent Direct Queue",
      checked: false,
      rank: "0",
      grade: "1",
      calls: "0",
      limit: "-1",
      webVars: "",
    },
    {
      groupName: "AGENTDIRECT_CHAT - Agent Direct Queue for Chats",
      checked: true,
      rank: "0",
      grade: "1",
      calls: "0",
      limit: "-1",
      webVars: "",
    },
  ];

  return (
    <div>
        <div className="bg-white rounded-xl border-light  space-y-4">
      <div className="flex items-center gap-1.5 p-4">
        <h2 className="text-[15px] font-bold text-dark font-lexend">
          Inbound Groups
        </h2>
      </div>
      <BasicTable
        columns={inboundColumns}
        data={inboundData}
        pagination={false}
      />
      
    </div>
    <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 mt-5 gap-4">
        <Input label="Custom 1" type="text" />
        <Input label="Custom 2" type="text" />
        <Input label="Custom 3" type="text" />
        <Input label="Custom 4" type="text" />
        <Input label="Custom 5" type="text" />
      </div>
    </div>

  );
};

export default InboundGroups;
