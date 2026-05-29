"use client";
import React from "react";
import Input from "@/components/common/Input";
import BasicTable from "@/components/common/BasicTable";
import Button from "@/components/common/Button";
import { Pencil, Trash2 } from "lucide-react";

const PauseCode = () => {
  const pauseCodes = [
    { code: "PEA", name: "Toilet Break", billable: "YES", mgrApproval: "NO" },
    { code: "TEA", name: "Tea Break", billable: "YES", mgrApproval: "NO" },
  ];

  const columns = [
    {
      key: "code",
      label: "Pause Code",
      render: (value) => <span>{value}</span>,
    },

    {
      key: "name",
      label: "Name",
      render: (value) => <Input type="text" defaultValue={value} />,
    },

    {
      key: "billable",
      label: "Billable",
      render: (value) => (
        <Input type="select" value={value} options={["YES", "NO"]} />
      ),
    },

    {
      key: "mgrApproval",
      label: "Mgr Approval",
      render: (value) => (
        <Input type="select" value={value} options={["YES", "NO"]} />
      ),
    },

    {
      key: "modify_btn",
      label: "MODIFY",
      render: () => (
        <button title="Modify">
          <Pencil className="w-4 h-4 text-indigo-700" />
        </button>
      ),
    },

    {
      key: "delete_btn",
      label: "DELETE",
      render: () => (
        <button title="Delete">
          <Trash2 className="w-4 h-4 text-red-500" />
        </button>
      ),
    },
  ];

  return (
    <div className="flex flex-col gap-6">
      <div className="bg-white rounded-xl p-6 border border-light w-full">
        <h2 className="heading font-lexend mb-6">
          Agent Pause Codes For This Campaign
        </h2>

        <BasicTable columns={columns} data={pauseCodes} pagination={false} />
      </div>
      <div className="bg-white rounded-2xl p-6 border border-light w-full">
        <h2 className="heading font-lexend mb-6">
          Add New Agent Pause Code
        </h2>

        <form className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <Input label="Pause Code" type="text" placeholder="e.g. BRK" />

          <Input label="Name" type="text" placeholder="Enter name" />

          <Input
            label="Billable"
            type="select"
            options={["YES", "NO"]}
            defaultValue="YES"
          />

          <Input
            label="Mgr Approve"
            type="select"
            options={["YES", "NO"]}
            defaultValue="NO"
          />
        </form>

        <div className="flex justify-end mt-6">
          <Button variant="gradient">
            + ADD
          </Button>
        </div>
      </div>
    </div>
  );
};

export default PauseCode;
