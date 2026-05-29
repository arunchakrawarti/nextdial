"use client";

import React from "react";
import BasicTable from "@/components/common/BasicTable";

const AcCidTable = () => {
  const columns = [
    {
      label: "ID",
      key: "id",
    },
    {
      label: "DATE TIME",
      key: "dateTime",
    },
    {
      label: "USER",
      key: "user",
    },
    {
      label: "IP",
      key: "ip",
    },
    {
      label: "SECTION",
      key: "section",
    },
    {
      label: "TYPE",
      key: "type",
    },
    {
      label: "RECORD ID",
      key: "recordId",
    },
    {
      label: "GROUP",
      key: "group",
    },
    {
      label: "DESCRIPTION",
      key: "description",
    },
    {
      label: "GOTO",
      key: "goto",
      render: () => (
        <button className="text-primary hover:underline">
          View
        </button>
      ),
    },
  ];

  const data = [
    {
      id: 1,
      dateTime: "2025-08-20 10:15:22",
      user: "admin",
      ip: "192.168.1.10",
      section: "CAMPAIGN_AC-CID",
      type: "ADD",
      recordId: "AC1001",
      group: "Outbound",
      description: "New AC-CID added",
    },
    {
      id: 2,
      dateTime: "2025-08-20 11:30:10",
      user: "manager",
      ip: "192.168.1.15",
      section: "CAMPAIGN_AC-CID",
      type: "UPDATE",
      recordId: "AC1002",
      group: "Outbound",
      description: "CID number updated",
    },
    {
      id: 3,
      dateTime: "2025-08-20 12:45:05",
      user: "admin",
      ip: "192.168.1.20",
      section: "CAMPAIGN_AC-CID",
      type: "DELETE",
      recordId: "AC1003",
      group: "Outbound",
      description: "AC-CID removed",
    },
    {
      id: 4,
      dateTime: "2025-08-20 14:05:40",
      user: "supervisor",
      ip: "192.168.1.25",
      section: "CAMPAIGN_AC-CID",
      type: "ADD",
      recordId: "AC1004",
      group: "Outbound",
      description: "Campaign CID created",
    },
  ];

  return (
    <div className="bg-white rounded-xl border border-light overflow-hidden">
      <div className="px-6 py-4 border-b border-light">
        <h2 className="heading font-lexend">
          Admin Change Log: Section Records - Campaign AC-CID - Outbound
        </h2>
      </div>

      <BasicTable
        columns={columns}
        data={data}
        wrapperClassName="border-0"
      />
    </div>
  );
};

export default AcCidTable;