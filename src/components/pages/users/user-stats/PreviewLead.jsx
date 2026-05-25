"use client";
import React from "react";
import BasicTable from "@/components/common/BasicTable";
import Button from "@/components/common/Button";
import Badge from "@/components/common/Badge";

const PreviewLead = () => {
  const columns = [
    {
      label: "Date/Time",
      key: "date/time",
    },
    {
      label: "Lead Id",
      key: "lead-id",
    },
    {
      label: "Status",
      key: "status",
      render: (value) => <Badge text={value} customStyle="capitalize" />,
    },
    {
      label: "Count",
      key: "count",
    },
    {
      label: "Campaign",
      key: "campaign",
    },
  ];

  const Data = [
    {
      "date/time": "2026-05-16 09:00:15",
      "lead-id": "LD1001",
      status: "active",
      count: 15,
      campaign: "Sales Campaign",
    },
    {
      "date/time": "2026-05-16 09:30:42",
      "lead-id": "LD1002",
      status: "pending",
      count: 8,
      campaign: "Support Campaign",
    },
    {
      "date/time": "2026-05-16 10:15:20",
      "lead-id": "LD1003",
      status: "completed",
      count: 22,
      campaign: "Marketing Campaign",
    },
    {
      "date/time": "2026-05-16 11:05:55",
      "lead-id": "LD1004",
      status: "hold",
      count: 5,
      campaign: "Customer Care",
    },
    {
      "date/time": "2026-05-16 11:45:10",
      "lead-id": "LD1005",
      status: "inactive",
      count: 12,
      campaign: "Technical Support",
    },
    {
      "date/time": "2026-05-16 12:20:35",
      "lead-id": "LD1006",
      status: "active",
      count: 18,
      campaign: "Retention Campaign",
    },
    {
      "date/time": "2026-05-16 13:10:18",
      "lead-id": "LD1007",
      status: "pending",
      count: 7,
      campaign: "Lead Generation",
    },
    {
      "date/time": "2026-05-16 14:25:40",
      "lead-id": "LD1008",
      status: "completed",
      count: 25,
      campaign: "Email Campaign",
    },
    {
      "date/time": "2026-05-16 15:40:22",
      "lead-id": "LD1009",
      status: "hold",
      count: 4,
      campaign: "Follow Up Campaign",
    },
    {
      "date/time": "2026-05-16 16:55:05",
      "lead-id": "LD1010",
      status: "active",
      count: 30,
      campaign: "Outbound Campaign",
    },
  ];
  return (
    <div>
      <div className="bg-white border-light rounded-2xl  overflow-hidden">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 p-4">
          <div>
            <h2 className="text-lg font-bold text-gray-900">
             Preview Lead Skips for this Time Period
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

export default PreviewLead;
