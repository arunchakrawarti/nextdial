"use client";
import BasicTable from "@/components/common/BasicTable";
import Button from "@/components/common/Button";
import React from "react";

const CidTable = () => {
  const campaignColumns = [
    {
      label: "Cid Group Id",
      key: "cidGroupId",
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
      label: "Group",
      key: "group",
    },
    {
      label: "Cids",
      key: "cids",
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
      cidGroupId: "CID001",
      notes: "Sales outbound caller IDs",
      type: "OUTBOUND",
      group: "SALES",
      cids: "18005550101, 18005550102",
    },
    {
      cidGroupId: "CID002",
      notes: "Inbound support caller IDs",
      type: "INBOUND",
      group: "SUPPORT",
      cids: "18005550201, 18005550202",
    },
    {
      cidGroupId: "CID003",
      notes: "Technical support numbers",
      type: "INBOUND",
      group: "TECH",
      cids: "18005550301, 18005550302",
    },
    {
      cidGroupId: "CID004",
      notes: "Callback routing caller IDs",
      type: "CALLBACK",
      group: "CALLBACK",
      cids: "18005550401, 18005550402",
    },
    {
      cidGroupId: "CID005",
      notes: "Survey campaign caller IDs",
      type: "OUTBOUND",
      group: "SURVEY",
      cids: "18005550501, 18005550502",
    },
    {
      cidGroupId: "CID006",
      notes: "Lead generation numbers",
      type: "OUTBOUND",
      group: "LEADS",
      cids: "18005550601, 18005550602",
    },
    {
      cidGroupId: "CID007",
      notes: "Emergency response lines",
      type: "HOTLINE",
      group: "EMERGENCY",
      cids: "18005550701, 18005550702",
    },
    {
      cidGroupId: "CID008",
      notes: "Customer retention campaign",
      type: "OUTBOUND",
      group: "RETENTION",
      cids: "18005550801, 18005550802",
    },
    {
      cidGroupId: "CID009",
      notes: "Billing department caller IDs",
      type: "INBOUND",
      group: "BILLING",
      cids: "18005550901, 18005550902",
    },
    {
      cidGroupId: "CID010",
      notes: "Transfer and routing numbers",
      type: "TRANSFER",
      group: "ROUTING",
      cids: "18005551001, 18005551002",
    },
  ];

  return (
    <div className="bg-white rounded-xl border border-light space-y-4 mt-5 overflow-hidden">
      <div className="flex items-center gap-1.5 p-4 border-b border-light">
        <h2 className="heading font-lexend">
          CID Group Table
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

export default CidTable;