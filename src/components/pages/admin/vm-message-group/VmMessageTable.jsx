"use client";
import BasicTable from "@/components/common/BasicTable";
import Button from "@/components/common/Button";
import React from "react";

const VmMessageTable = () => {
  const campaignColumns = [
    {
      label: "Vm Group Id",
      key: "vmGroupId",
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
      label: "Megs",
      key: "megs",
    },
    {
      label: "Modify",
      key: "modify",
      render: (_, row) => (
        <Button
          variant="gradient"
        >
          Modify
        </Button>
      ),
    },
  ];

  const campaignData = [
    {
      vmGroupId: "VMG001",
      notes: "Sales Team Voicemail Group",
      active: "Y",
      group: "SALES",
      megs: "500",
    },
    {
      vmGroupId: "VMG002",
      notes: "Customer Support Messages",
      active: "Y",
      group: "SUPPORT",
      megs: "350",
    },
    {
      vmGroupId: "VMG003",
      notes: "Technical Department Inbox",
      active: "N",
      group: "TECH",
      megs: "200",
    },
    {
      vmGroupId: "VMG004",
      notes: "Billing Department Voice Mails",
      active: "Y",
      group: "BILLING",
      megs: "450",
    },
    {
      vmGroupId: "VMG005",
      notes: "Human Resource Queries",
      active: "Y",
      group: "HR",
      megs: "150",
    },
    {
      vmGroupId: "VMG006",
      notes: "Emergency Call Messages",
      active: "Y",
      group: "EMERGENCY",
      megs: "600",
    },
    {
      vmGroupId: "VMG007",
      notes: "Outbound Campaign Records",
      active: "N",
      group: "OUTBOUND",
      megs: "300",
    },
    {
      vmGroupId: "VMG008",
      notes: "General Inquiry Messages",
      active: "Y",
      group: "GENERAL",
      megs: "250",
    },
  ];

  return (
    <div className="bg-white rounded-xl border border-light space-y-4 mt-5 overflow-hidden">

      <div className="flex items-center gap-1.5 p-4 border-b border-light">
        <h2 className="heading font-lexend">
          SERVER LISTINGS
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

export default VmMessageTable;