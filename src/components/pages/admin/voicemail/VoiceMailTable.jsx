"use client";
import BasicTable from "@/components/common/BasicTable";
import Button from "@/components/common/Button";
import React from "react";

const VoiceMailTable = () => {
  const campaignColumns = [
    {
      label: "Voicemail Id",
      key: "voicemailId",
    },
    {
      label: "Name",
      key: "name",
    },
    {
      label: "Active",
      key: "active",
    },
    {
      label: "New Messages",
      key: "newMessages",
    },
    {
      label: "Old Messages",
      key: "oldMessages",
    },
    {
      label: "Delete",
      key: "delete",
    },
    {
      label: "Admin Group",
      key: "adminGroup",
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
      voicemailId: "VM001",
      name: "Sales Voicemail",
      active: "Y",
      newMessages: "12",
      oldMessages: "45",
      delete: "N",
      adminGroup: "SALES",
    },
    {
      voicemailId: "VM002",
      name: "Support Inbox",
      active: "Y",
      newMessages: "8",
      oldMessages: "30",
      delete: "N",
      adminGroup: "SUPPORT",
    },
    {
      voicemailId: "VM003",
      name: "Technical Queries",
      active: "Y",
      newMessages: "5",
      oldMessages: "18",
      delete: "N",
      adminGroup: "TECH",
    },
    {
      voicemailId: "VM004",
      name: "Billing Department",
      active: "N",
      newMessages: "0",
      oldMessages: "22",
      delete: "Y",
      adminGroup: "BILLING",
    },
    {
      voicemailId: "VM005",
      name: "HR Voice Mail",
      active: "Y",
      newMessages: "3",
      oldMessages: "11",
      delete: "N",
      adminGroup: "HR",
    },
    {
      voicemailId: "VM006",
      name: "Customer Feedback",
      active: "Y",
      newMessages: "15",
      oldMessages: "40",
      delete: "N",
      adminGroup: "FEEDBACK",
    },
    {
      voicemailId: "VM007",
      name: "Emergency Calls",
      active: "Y",
      newMessages: "2",
      oldMessages: "7",
      delete: "N",
      adminGroup: "EMERGENCY",
    },
    {
      voicemailId: "VM008",
      name: "Retention Team",
      active: "N",
      newMessages: "1",
      oldMessages: "13",
      delete: "Y",
      adminGroup: "RETENTION",
    },
    {
      voicemailId: "VM009",
      name: "Outbound Campaign",
      active: "Y",
      newMessages: "9",
      oldMessages: "28",
      delete: "N",
      adminGroup: "OUTBOUND",
    },
    {
      voicemailId: "VM010",
      name: "General Inquiry",
      active: "Y",
      newMessages: "6",
      oldMessages: "19",
      delete: "N",
      adminGroup: "GENERAL",
    },
  ];

  return (
    <div className="bg-white rounded-xl border border-light space-y-4 mt-5 overflow-hidden">
      <div className="flex items-center gap-1.5 p-4 border-b border-light">
        <h2 className="heading font-lexend">
          VoiceMail Table
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

export default VoiceMailTable;