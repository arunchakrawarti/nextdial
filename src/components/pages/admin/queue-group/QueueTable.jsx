"use client";
import BasicTable from "@/components/common/BasicTable";
import Button from "@/components/common/Button";
import React from "react";

const QueueTable = () => {
  const campaignColumns = [
    {
      label: "Queue Group Id",
      key: "queueGroupId",
    },
    {
      label: "Notes",
      key: "notes",
    },
    {
      label: "Active",
      key: "active",
    },
    {
      label: "Group",
      key: "group",
    },
    {
      label: "Entries",
      key: "entries",
    },
    {
      label: "Modify",
      key: "modify",
      render: (_, row) => (
        <Button variant="gradient">
          Modify
        </Button>
      ),
    },
  ];

  const campaignData = [
    {
      queueGroupId: "QG001",
      notes: "Sales Support Queue",
      active: "Y",
      group: "SALES",
      entries: "25",
    },
    {
      queueGroupId: "QG002",
      notes: "Customer Service Queue",
      active: "Y",
      group: "SUPPORT",
      entries: "40",
    },
    {
      queueGroupId: "QG003",
      notes: "Technical Helpdesk Queue",
      active: "N",
      group: "TECH",
      entries: "15",
    },
    {
      queueGroupId: "QG004",
      notes: "Billing Queries Queue",
      active: "Y",
      group: "BILLING",
      entries: "18",
    },
    {
      queueGroupId: "QG005",
      notes: "HR Assistance Queue",
      active: "Y",
      group: "HR",
      entries: "10",
    },
    {
      queueGroupId: "QG006",
      notes: "Emergency Priority Queue",
      active: "Y",
      group: "EMERGENCY",
      entries: "8",
    },
    {
      queueGroupId: "QG007",
      notes: "Outbound Campaign Queue",
      active: "N",
      group: "OUTBOUND",
      entries: "22",
    },
    {
      queueGroupId: "QG008",
      notes: "General Inquiry Queue",
      active: "Y",
      group: "GENERAL",
      entries: "30",
    },
  ];

  return (
    <div className="bg-white rounded-xl border border-light space-y-4 mt-5 overflow-hidden">

      <div className="flex items-center gap-1.5 p-4 border-b border-light">
        <h2 className="heading font-lexend">
          Queue Listings
        </h2>
      </div>

      <BasicTable
        columns={campaignColumns}
        data={campaignData}
        pagination={true}
      />
    </div>
  );
};

export default QueueTable;