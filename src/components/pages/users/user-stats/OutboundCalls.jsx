"use client";
import React from "react";
import BasicTable from "@/components/common/BasicTable";
import Button from "@/components/common/Button";
import Badge from "@/components/common/Badge";

const OutboundCalls = () => {
  const columns = [
    {
      label: "Date/Time",
      key: "date-time",
    },
    {
      label: "Length",
      key: "length",
    },
    {
      label: "Status",
      key: "status",
      render: (value) => <Badge text={value} customStyle="capitalize" />,
    },
    {
      label: "Phone",
      key: "phone",
    },
    {
      label: "Campaign",
      key: "campaign",
    },
    {
      label: "Group",
      key: "group",
    },
    {
      label: "List",
      key: "list",
    },
    {
      label: "Lead",
      key: "lead",
    },
    {
      label: "Hangup Reason",
      key: "hangup reason",
    },
  ];
  const Data = [
    {
      "date-time": "2026-05-16 09:00:15",
      length: "00:02:45",
      status: "ANSWERED",
      phone: "+91 9876543210",
      campaign: "Sales Campaign",
      group: "Agent Team A",
      list: "Sales List 01",
      lead: "LD1001",
      "hangup reason": "Customer Ended",
    },

    {
      "date-time": "2026-05-16 10:20:40",
      length: "00:01:18",
      status: "BUSY",
      phone: "+91 9876543211",
      campaign: "Support Campaign",
      group: "Support Team",
      list: "Support Leads",
      lead: "LD1002",
      "hangup reason": "Busy Line",
    },

    {
      "date-time": "2026-05-16 11:45:22",
      length: "00:04:10",
      status: "NO ANSWER",
      phone: "+91 9876543212",
      campaign: "Marketing Campaign",
      group: "Marketing Team",
      list: "Marketing List",
      lead: "LD1003",
      "hangup reason": "No Response",
    },

    {
      "date-time": "2026-05-16 01:15:05",
      length: "00:03:32",
      status: "ANSWERED",
      phone: "+91 9876543213",
      campaign: "Customer Care",
      group: "Care Team",
      list: "Customer Follow-up",
      lead: "LD1004",
      "hangup reason": "Agent Ended",
    },

    {
      "date-time": "2026-05-16 03:30:50",
      length: "00:05:12",
      status: "TRANSFERRED",
      phone: "+91 9876543214",
      campaign: "Technical Support",
      group: "Tech Team",
      list: "Tech Support List",
      lead: "LD1005",
      "hangup reason": "Transferred Call",
    },
  ];
  return (
    <div>
      <div className="bg-white border-light rounded-2xl  overflow-hidden">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 p-4">
          <div>
            <h2 className="text-lg font-bold text-gray-900">
              Outbound Calls for this Time Period
            </h2>
          </div>
          <Button type="button" variant="success" icon="download-2-line">
            Download
          </Button>
        </div>
        <div className="  overflow-hidden">
          <BasicTable
            columns={columns}
            data={Data}
            pagination={true}
            total={Data.length}
            pageSize={10}
          />
        </div>
      </div>
    </div>
  );
};

export default OutboundCalls;
