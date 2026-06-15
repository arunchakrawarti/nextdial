"use client";

import BasicTable from "@/components/common/BasicTable";
import Button from "@/components/common/Button";
import React from "react";

const StatusGroupTable = () => {
  const campaignColumns = [
    {
      label: "Status Group Id",
      key: "statusGroupId",
    },
    {
      label: "Notes",
      key: "notes",
    },
    {
      label: "Group",
      key: "group",
    },
    {
      label: "Statuses",
      key: "statuses",
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
      statusGroupId: "SG001",
      notes: "Sales related call statuses",
      group: "SALES",
      statuses: "SALE CLOSESALE CALLBACK FOLLOWUP",
    },
    {
      statusGroupId: "SG002",
      notes: "Customer support handling",
      group: "SUPPORT",
      statuses: "SUPCALL TECHHELP ISSUEOPEN",
    },
    {
      statusGroupId: "SG003",
      notes: "Quality check monitoring",
      group: "QUALITY",
      statuses: "QCFAIL QCPASS QCVERIFY",
    },
    {
      statusGroupId: "SG004",
      notes: "Callback management statuses",
      group: "CALLBACK",
      statuses: "CALLBK CBHOLD CBPENDING",
    },
    {
      statusGroupId: "SG005",
      notes: "Inbound call tracking",
      group: "INBOUND",
      statuses: "INCALL ANSWERED TRANSFER",
    },
    {
      statusGroupId: "SG006",
      notes: "Outbound campaign statuses",
      group: "OUTBOUND",
      statuses: "DIALING NOANSWER BUSY DROP",
    },
    {
      statusGroupId: "SG007",
      notes: "DNC and blacklist records",
      group: "DNC",
      statuses: "DNCL DNCDNCC BLACKLIST",
    },
    {
      statusGroupId: "SG008",
      notes: "Survey response statuses",
      group: "SURVEY",
      statuses: "SVYCLM SVYEXT SVYREC",
    },
    {
      statusGroupId: "SG009",
      notes: "Lead generation statuses",
      group: "LEADS",
      statuses: "NEW HOTLEAD COLDLEAD FOLLOWUP",
    },
    {
      statusGroupId: "SG010",
      notes: "Call transfer routing statuses",
      group: "TRANSFER",
      statuses: "XFER IVRXFR ROXFER",
    },
  ];

  return (
    <div className="bg-white rounded-xl border border-light mt-5 overflow-hidden">
    
      <div className="flex items-center justify-between p-4 border-b border-light">
        <h2 className="heading font-lexend">
          Status Group Listings
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

export default StatusGroupTable;