"use client";
import React, { useState } from "react";
import BasicTable from "../common/BasicTable"; 

const initialAgentData = [
  { id: "1002", user: "1002 - 1002", group: "agent", selected: false, rank: 0, grade: 1, limit: "-1", callsToday: 0 },
  { id: "1003", user: "1003 - 1003", group: "agent", selected: false, rank: 0, grade: 1, limit: "-1", callsToday: 0 },
  { id: "1004", user: "1004 - 1003", group: "agent", selected: false, rank: 0, grade: 1, limit: "-1", callsToday: 0 },
  { id: "1005", user: "1005 - 1003", group: "agent", selected: false, rank: 0, grade: 1, limit: "-1", callsToday: 0 },
  { id: "1006", user: "1006 - 1003", group: "agent", selected: false, rank: 0, grade: 1, limit: "-1", callsToday: 0 },
  { id: "1007", user: "1007 - 1003", group: "agent", selected: false, rank: 0, grade: 1, limit: "-1", callsToday: 0 },
  { id: "1008", user: "1008 - 1003", group: "agent", selected: false, rank: 0, grade: 1, limit: "-1", callsToday: 0 },
  { id: "1009", user: "1009 - 1003", group: "agent", selected: false, rank: 0, grade: 1, limit: "-1", callsToday: 0 },
  { id: "1010", user: "1010 - 1003", group: "agent", selected: false, rank: 0, grade: 1, limit: "-1", callsToday: 0 },
  { id: "1011", user: "1011 - 1005", group: "agent", selected: false, rank: 0, grade: 1, limit: "-1", callsToday: 0 },
  { id: "1012", user: "1012 - 1005", group: "agent", selected: false, rank: 0, grade: 1, limit: "-1", callsToday: 0 },
  { id: "1013", user: "1013 - 1005", group: "agent", selected: false, rank: 0, grade: 1, limit: "-1", callsToday: 0 },
  { id: "5001", user: "5001 - 5001", group: "agent", selected: false, rank: 0, grade: 1, limit: "-1", callsToday: 0 },
  { id: "5002", user: "5002 - 5002", group: "agent", selected: true, rank: 0, grade: 1, limit: "-1", callsToday: 0 },
];

const AgentRanksSection = () => {
  const [data, setData] = useState(initialAgentData);
  const handleSelectAll = (e) => {
    e.preventDefault();
    setData((prev) => prev.map((item) => ({ ...item, selected: true })));
  };
  const handleRowChange = (index, key, value) => {
    setData((prev) => {
      const updated = [...prev];
      updated[index] = { ...updated[index], [key]: value };
      return updated;
    });
  };
  const columns = [
    {
      label: "USER",
      key: "user",
      render: (val) => (
        <a href={`#user-${val}`} className="text-blue-600 font-medium hover:underline">
          {val}
        </a>
      ),
    },
    {
      label: "GROUP",
      key: "group",
      render: (val) => (
        <a href={`#group-${val}`} className="text-blue-600 hover:underline">
          {val}
        </a>
      ),
    },
    {
      label: "SELECTED", 
      key: "selected",
      render: (val, row, index) => (
        <div className="flex flex-col items-start gap-1">
          {index === 0 && (
            <button
              onClick={handleSelectAll}
              className="text-blue-600 hover:underline text-[11px] font-normal lowercase block -mt-2 mb-1"
            >
              select all
            </button>
          )}
          <input
            type="checkbox"
            checked={!!val}
            onChange={(e) => handleRowChange(index, "selected", e.target.checked)}
            className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500 cursor-pointer accent-blue-600"
          />
        </div>
      ),
    },
    {
      label: "RANK",
      key: "rank",
      render: (val, row, index) => (
        <select
          value={val}
          onChange={(e) => handleRowChange(index, "rank", Number(e.target.value))}
          className="bg-white border border-gray-300 rounded px-2 py-1 text-sm outline-none focus:border-blue-500 w-16 cursor-pointer text-gray-800"
        >
          {[...Array(11).keys()].map((num) => (
            <option key={num} value={num}>
              {num}
            </option>
          ))}
        </select>
      ),
    },
    {
      label: "GRADE",
      key: "grade",
      render: (val, row, index) => (
        <select
          value={val}
          onChange={(e) => handleRowChange(index, "grade", Number(e.target.value))}
          className="bg-white border border-gray-300 rounded px-2 py-1 text-sm outline-none focus:border-blue-500 w-16 cursor-pointer text-gray-800"
        >
          {[...Array(10).keys()].map((num) => (
            <option key={num + 1} value={num + 1}>
              {num + 1}
            </option>
          ))}
        </select>
      ),
    },
    {
      label: "DAILY LIMIT",
      key: "limit",
      render: (val, row, index) => (
        <input
          type="text"
          value={val}
          onChange={(e) => handleRowChange(index, "limit", e.target.value)}
          className="w-20 bg-white border border-gray-300 rounded px-2 py-1 text-sm outline-none text-center focus:border-blue-500 text-gray-800"
        />
      ),
    },
    {
      label: "CALLS TODAY",
      key: "callsToday",
      render: (val, row) => (
        <a href={`#calls-${row.id}`} className="text-blue-600 hover:underline">
          {val}
        </a>
      ),
    },
  ];

  return (
    <div className="w-full mt-8 bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden font-lexend">
      <div className="bg-gray-50 border-b border-gray-200 px-6 py-4">
        <h3 className="text-xs font-bold uppercase tracking-wider text-blue-900 text-center underline decoration-blue-900 decoration-1 underline-offset-4">
          AGENT RANKS FOR THIS INBOUND GROUP:
        </h3>
      </div>
      
      <BasicTable
        columns={columns}
        data={data}
        pagination={false} 
        wrapperClassName="!rounded-none" 
      />
    </div>
  );
};

export default AgentRanksSection;