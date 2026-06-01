"use client";

import React from "react";
import BasicTable from "@/components/common/BasicTable";
import Input from "@/components/common/Input";

const AgentRanksTable = () => {
  const columns = [
    {
      label: "User",
      key: "user",
      render: (value) => (
        <a href="#" className="text-blue-700 underline">
          {value}
        </a>
      ),
    },
    {
      label: "Group",
      key: "group",
      render: (value) => (
        <span className="text-blue-700 underline cursor-pointer">
          {value}
        </span>
      ),
    },
    {
      label: "Selected",
      key: "selected",
      render: () => (
        <Input
          type="checkbox"
          className="border-0 shadow-none"
        />
      ),
    },
    {
      label: "Rank",
      key: "rank",
      render: (value) => (
        <div className="w-[90px]">
          <Input
            type="select"
            defaultValue={value}
            options={[0, 1, 2, 3, 4, 5]}
            className="!py-0"
          />
        </div>
      ),
    },
    {
      label: "Grade",
      key: "grade",
      render: (value) => (
        <div className="w-[90px]">
          <Input
            type="select"
            defaultValue={value}
            options={[1, 2, 3, 4, 5]}
            className="!py-0"
          />
        </div>
      ),
    },
    {
      label: "Daily Limit",
      key: "dailyLimit",
      render: (value) => (
        <div className="w-[100px]">
          <Input
            type="text"
            defaultValue={value}
          />
        </div>
      ),
    },
    {
      label: "Calls Today",
      key: "callsToday",
      render: (value) => (
        <a href="#" className="text-blue-700 underline">
          {value}
        </a>
      ),
    },
  ];

  const data = [
    {
      user: "1002 - 1002",
      group: "agent",
      selected: false,
      rank: 0,
      grade: 1,
      dailyLimit: -1,
      callsToday: 0,
    },
    {
      user: "1003 - 1003",
      group: "agent",
      selected: false,
      rank: 0,
      grade: 1,
      dailyLimit: -1,
      callsToday: 0,
    },
    {
      user: "1004 - 1004",
      group: "agent",
      selected: false,
      rank: 0,
      grade: 1,
      dailyLimit: -1,
      callsToday: 0,
    },
    {
      user: "1005 - 1005",
      group: "agent",
      selected: false,
      rank: 0,
      grade: 1,
      dailyLimit: -1,
      callsToday: 0,
    },
    {
      user: "1006 - 1006",
      group: "agent",
      selected: false,
      rank: 0,
      grade: 1,
      dailyLimit: -1,
      callsToday: 0,
    },
    {
      user: "1007 - 1007",
      group: "agent",
      selected: false,
      rank: 0,
      grade: 1,
      dailyLimit: -1,
      callsToday: 0,
    },
    {
      user: "1008 - 1008",
      group: "agent",
      selected: false,
      rank: 0,
      grade: 1,
      dailyLimit: -1,
      callsToday: 0,
    },
    {
      user: "1009 - 1009",
      group: "agent",
      selected: false,
      rank: 0,
      grade: 1,
      dailyLimit: -1,
      callsToday: 0,
    },
    {
      user: "1010 - 1010",
      group: "agent",
      selected: false,
      rank: 0,
      grade: 1,
      dailyLimit: -1,
      callsToday: 0,
    },
    {
      user: "1011 - 1011",
      group: "agent",
      selected: false,
      rank: 0,
      grade: 1,
      dailyLimit: -1,
      callsToday: 0,
    },
    {
      user: "1012 - 1012",
      group: "agent",
      selected: false,
      rank: 0,
      grade: 1,
      dailyLimit: -1,
      callsToday: 0,
    },
    {
      user: "1013 - 1013",
      group: "agent",
      selected: false,
      rank: 0,
      grade: 1,
      dailyLimit: -1,
      callsToday: 0,
    },
  ];

  return (
    <div className="w-full bg-white rounded-xl border-light mt-5">
      <div className="border-b p-4">
        <h2 className="heading font-lexend">
          Agent Ranks For This Inbound Group
        </h2>
      </div>

      <BasicTable
        columns={columns}
        data={data}
        wrapperClassName=""
      />
    </div>
  );
};

export default AgentRanksTable;