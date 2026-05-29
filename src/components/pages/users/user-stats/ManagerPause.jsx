"use client";
import React from "react";
import BasicTable from "@/components/common/BasicTable";
import Button from "@/components/common/Button";
import Badge from "@/components/common/Badge";

const ManagerPause = () => {
  const columns = [
    {
      label: "Date/Time",
      key: "date/time",
    },
    {
      label: "Agent",
      key: "agent",
    },
    {
      label: "Agent User Group",
      key: "agent-user-group",
    },
    {
      label: "Campaign",
      key: "campaign",
    },
    {
      label: "Pause Code",
      key: "pause-code",
    },
  ];

const Data = [
  {
    "date/time": "2026-05-16 09:00:15",
    agent: "AG1001",
    "agent-user-group": "Sales Team",
    campaign: "Sales Campaign",
    "pause-code": "BREAK",
  },
  {
    "date/time": "2026-05-16 09:25:40",
    agent: "AG1002",
    "agent-user-group": "Support Team",
    campaign: "Support Campaign",
    "pause-code": "LUNCH",
  },
  {
    "date/time": "2026-05-16 10:10:22",
    agent: "AG1003",
    "agent-user-group": "Marketing Team",
    campaign: "Marketing Campaign",
    "pause-code": "MEETING",
  },
  {
    "date/time": "2026-05-16 10:55:48",
    agent: "AG1004",
    "agent-user-group": "Customer Care",
    campaign: "Customer Care",
    "pause-code": "TRAINING",
  },
  {
    "date/time": "2026-05-16 11:40:12",
    agent: "AG1005",
    "agent-user-group": "Technical Support",
    campaign: "Technical Support",
    "pause-code": "BREAK",
  },
  {
    "date/time": "2026-05-16 12:15:30",
    agent: "AG1006",
    "agent-user-group": "Retention Team",
    campaign: "Retention Campaign",
    "pause-code": "LUNCH",
  },
  {
    "date/time": "2026-05-16 13:05:50",
    agent: "AG1007",
    "agent-user-group": "Lead Generation",
    campaign: "Lead Generation",
    "pause-code": "MEETING",
  },
  {
    "date/time": "2026-05-16 14:20:18",
    agent: "AG1008",
    "agent-user-group": "Email Support",
    campaign: "Email Campaign",
    "pause-code": "TEA",
  },
  {
    "date/time": "2026-05-16 15:35:42",
    agent: "AG1009",
    "agent-user-group": "Follow Up Team",
    campaign: "Follow Up Campaign",
    "pause-code": "TRAINING",
  },
  {
    "date/time": "2026-05-16 16:50:05",
    agent: "AG1010",
    "agent-user-group": "Outbound Team",
    campaign: "Outbound Campaign",
    "pause-code": "BREAK",
  },
];
  return (
    <div>
      <div className="bg-white border-light rounded-2xl  overflow-hidden">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 p-4">
          <div>
            <h2 className="heading font-lexend">
             Manager Pause Code Approvals for this Time Period
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

export default ManagerPause;
