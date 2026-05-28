"use client";
import BasicTable from "@/components/common/BasicTable";
import Input from "@/components/common/Input";
import React, { useState } from "react";
import Button from "@/components/common/Button"
import StatuesInput from "./StatuesInput";

const CampaignStatusesTable = () => {
  const [data] = useState([
    { id: 1, status: "ABU", description: "Abusive", category: "", agentSelectable: "Y", humanAnswer: "N", sale: "N", dnc: "N", customerContact: "N", notInterested: "N", unworkable: "N", scheduledCallback: "N", completed: "N", answeringMachine: "N", minSec: 0, maxSec: 0 },
    { id: 2, status: "HU", description: "Hang Up", category: "", agentSelectable: "Y", humanAnswer: "N", sale: "N", dnc: "N", customerContact: "N", notInterested: "N", unworkable: "N", scheduledCallback: "N", completed: "N", answeringMachine: "N", minSec: 0, maxSec: 0 },
    { id: 3, status: "INV", description: "Invalid Number", category: "", agentSelectable: "Y", humanAnswer: "N", sale: "N", dnc: "N", customerContact: "N", notInterested: "N", unworkable: "N", scheduledCallback: "N", completed: "N", answeringMachine: "N", minSec: 0, maxSec: 0 },
    { id: 4, status: "RPC", description: "Right Party Contact", category: "", agentSelectable: "Y", humanAnswer: "N", sale: "N", dnc: "N", customerContact: "N", notInterested: "N", unworkable: "N", scheduledCallback: "N", completed: "N", answeringMachine: "N", minSec: 0, maxSec: 0 },
    { id: 5, status: "SCB", description: "Scheduled Callback", category: "", agentSelectable: "Y", humanAnswer: "N", sale: "N", dnc: "N", customerContact: "N", notInterested: "N", unworkable: "Y", scheduledCallback: "Y", completed: "Y", answeringMachine: "Y", minSec: 0, maxSec: 0 },
  ]);

  const handleModify = (row) => {
    console.log("Modify clicked for:", row);
  };

  const columns = [
    {
      label: "Status",
      key: "status",
      render: (value) => <span className="font-bold text-gray-900">{value}</span>,
    },
    {
      label: "Description",
      key: "description",
      render: () => (
        <Input
          type="text"
          className="!py-1 max-w-[180px]"

        />
      ),
    },
    {
      label: "Category",
      key: "category",
      render: () => (
        <Input
          type="select"
          className="!py-0 max-w-[160px]"
          placeholder="-"
          options={[{ label: "Category 1", value: "cat1" }]} 
        />
      ),
    },
    {
      label: "Agent Selectable",
      key: "agentSelectable",
      render: () => (
        <Input
          type="select"
          className="!py-0 max-w-[70px]"
          options={["Y", "N"]}
        />
      ),
    },
    {
      label: "Human Answer",
      key: "humanAnswer",
      render: () => (
        <Input
          type="select"
          className="!py-0 max-w-[70px]"
          options={["Y", "N"]}
        />
      ),
    },
    {
      label: "Sale",
      key: "sale",
      render: () => (
        <Input
          type="select"
          className="!py-0 w-[70px] !min-w-[70px]"
          options={["Y", "N"]}
        />
      ),
    },
    {
      label: "Dnc",
      key: "dnc",
      render: () => (
         <Input
          type="select"
          className="!py-0 w-[70px] !min-w-[70px]"
          options={["Y", "N"]}
        />
      ),
    },
    {
      label: "Customer Contact",
      key: "customerContact",
      render: () => (
        <Input
          type="select"
          className="!py-0 max-w-[70px]"
          options={["Y", "N"]}  
        />
      ),
    },
    {
      label: "Not Interested",
      key: "notInterested",
      render: () => (
        <Input
          type="select"
          className="!py-0 max-w-[70px]"
          options={["Y", "N"]} 
        />
      ),
    },
    {
      label: "Unworkable",
      key: "unworkable",
      render: () => (
        <Input
          type="select"
          className="!py-0 max-w-[70px]"
          options={["Y", "N"]}         
        />
      ),
    },
    {
      label: "Scheduled Callback",
      key: "scheduledCallback",
      render: () => (
        <Input
          type="select"
          className="!py-0 max-w-[70px]"
          options={["Y", "N"]}  
        />
      ),
    },
    {
      label: "Completed",
      key: "completed",
      render: () => (
        <Input
          type="select"
          className="!py-0 max-w-[70px]"
          options={["Y", "N"]}
        />
      ),
    },
    {
      label: "Answering Machine",
      key: "answeringMachine",
      render: () => (
        <Input
          type="select"
          className="!py-0 max-w-[70px]"
          options={["Y", "N"]}
        />
      ),
    },
    {
      label: "Min Sec",
      key: "minSec",
      render: () => (
        <Input
          type="number"
          className="!py-1 w-[70px] !min-w-[70px]"
        />
      ),
    },
    {
      label: "Max Sec",
      key: "maxSec",
      render: () => (
        <Input
          type="number"
          className="!py-1 w-[70px] !min-w-[70px]"
        />
      ),
    },
  ];
  
  const actions = [
    ({ row }) => (
      <Button variant="outline"
      >
        Modify
      </Button>
    ),
    () => (
      <Button variant="warning"
      >
        Delete
      </Button>
    ),
  ];

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <div className="mb-4 flex items-center gap-2">
        <h2 className="text-lg font-bold text-gray-800 tracking-wide font-lexend uppercase">
          Custom Statuses Within This Campaign
        </h2>
        <span className="bg-blue-100 text-blue-600 rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold cursor-pointer">
          ?
        </span>
      </div>

      <BasicTable
        columns={columns}
        data={data}
        actions={actions}
        pagination={false} 
      />

      <StatuesInput/>
    </div>
  );
};

export default CampaignStatusesTable;