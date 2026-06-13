"use client";
import BasicTable from "@/components/common/BasicTable";
import Button from "@/components/common/Button";
import React from "react";

const SettingTable = () => {
  const campaignColumns = [
    {
      label: "Container Id",
      key: "containerId",
    },
    {
      label: "Notes",
      key: "notes",
    },
    {
      label: "Type",
      key: "type",
    },
    {
      label: "Length",
      key: "length",
    },
    {
      label: "Admin Group",
      key: "adminGroup",
    },
    {
      label: "Modify",
      key: "modify",
      render: (_, row) => (
        <Button href="/admin/setting-container/modify-setting" variant="gradient">
          Modify
        </Button>
      ),
    },
  ];

  const campaignData = [
    {
      containerId: "CNT001",
      notes: "Sales Call Recordings",
      type: "AUDIO",
      length: "120 MB",
      adminGroup: "SALES",
    },
    {
      containerId: "CNT002",
      notes: "Customer Support Logs",
      type: "TEXT",
      length: "85 MB",
      adminGroup: "SUPPORT",
    },
    {
      containerId: "CNT003",
      notes: "Technical Server Backups",
      type: "BACKUP",
      length: "450 MB",
      adminGroup: "TECH",
    },
    {
      containerId: "CNT004",
      notes: "Billing Department Files",
      type: "PDF",
      length: "230 MB",
      adminGroup: "BILLING",
    },
    {
      containerId: "CNT005",
      notes: "HR Employee Documents",
      type: "DOCS",
      length: "150 MB",
      adminGroup: "HR",
    },
    {
      containerId: "CNT006",
      notes: "Emergency Audio Storage",
      type: "AUDIO",
      length: "600 MB",
      adminGroup: "EMERGENCY",
    },
    {
      containerId: "CNT007",
      notes: "Outbound Campaign Reports",
      type: "REPORT",
      length: "300 MB",
      adminGroup: "OUTBOUND",
    },
    {
      containerId: "CNT008",
      notes: "General Inquiry Attachments",
      type: "IMAGE",
      length: "95 MB",
      adminGroup: "GENERAL",
    },
  ];

  return (
    <div className="bg-white rounded-xl border border-light space-y-4 mt-5 overflow-hidden">

      <div className="flex items-center gap-1.5 p-4 border-b border-light">
        <h2 className="heading font-lexend">
          SETTING LISTINGS
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

export default SettingTable;