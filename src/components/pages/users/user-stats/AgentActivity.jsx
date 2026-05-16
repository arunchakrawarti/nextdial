"use client";
import React from "react";
import BasicTable from "@/components/common/BasicTable";
import Button from "@/components/common/Button";
import Badge from "@/components/common/Badge";

const AgentActivity = () => {

const columns = [
  {
    label: "Date/Time",
    key: "date-time",
  },
  {
    label: "Pause",
    key: "pause",
  },

  {
    label: "Wait",
    key: "wait",
  },
  {
    label: "Talk",
    key: "talk",
  },
  {
    label: "Dispo",
    key: "dispo",
  },
  {
    label: "Dead",
    key: "dead",
  },
  {
    label: "Customer",
    key: "customer",
  },
  {
    label: "Visible",
    key: "visible",
  },
  {
    label: "Hidden",
    key: "hidden",
  },
   {
    label: "Status",
    key: "status",
    render: (value) => (
      <Badge
        text={value}
        customStyle="capitalize"
      />
    ),
  },
  {
    label: "Lead",
    key: "lead",
  },
  {
    label: "Type",
    key: "type",
  },
  {
    label: "Campaign",
    key: "campaign",
  },
   {
    label: "Pause Code",
    key: "pause code",
  },
];

const Data = [
  {
    "date-time": "2026-05-16 09:00:15",
    pause: "00:02:10",
    wait: "00:00:35",
    talk: "00:05:45",
    dispo: "00:01:10",
    dead: "00:00:15",
    customer: "00:04:30",
    visible: "Yes",
    hidden: "No",
    status: "active",
    lead: "LD1001",
    type: "Inbound",
    campaign: "Sales Campaign",
    "pause code": "BREAK",
  },

  {
    "date-time": "2026-05-16 10:20:40",
    pause: "00:01:30",
    wait: "00:00:20",
    talk: "00:03:12",
    dispo: "00:00:50",
    dead: "00:00:05",
    customer: "00:02:45",
    visible: "Yes",
    hidden: "No",
    status: "inactive",
    lead: "LD1002",
    type: "Outbound",
    campaign: "Support Campaign",
    "pause code": "LUNCH",
  },

  {
    "date-time": "2026-05-16 11:45:22",
    pause: "00:03:00",
    wait: "00:01:10",
    talk: "00:06:25",
    dispo: "00:01:20",
    dead: "00:00:25",
    customer: "00:05:10",
    visible: "No",
    hidden: "Yes",
    status: "pending",
    lead: "LD1003",
    type: "Blended",
    campaign: "Marketing Campaign",
    "pause code": "MEETING",
  },

  {
    "date-time": "2026-05-16 01:15:05",
    pause: "00:00:50",
    wait: "00:00:15",
    talk: "00:04:05",
    dispo: "00:00:40",
    dead: "00:00:08",
    customer: "00:03:25",
    visible: "Yes",
    hidden: "No",
    status: "completed",
    lead: "LD1004",
    type: "Inbound",
    campaign: "Customer Care",
    "pause code": "TEA",
  },

  {
    "date-time": "2026-05-16 03:30:50",
    pause: "00:04:15",
    wait: "00:01:45",
    talk: "00:08:30",
    dispo: "00:02:10",
    dead: "00:00:40",
    customer: "00:07:05",
    visible: "No",
    hidden: "Yes",
    status: "hold",
    lead: "LD1005",
    type: "Outbound",
    campaign: "Technical Support",
    "pause code": "TRAINING",
  },
];
  return (
    <div>
      <div className="bg-white border-light rounded-2xl  overflow-hidden">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 p-4">
          <div>
            <h2 className="text-lg font-bold text-gray-900">
              Agent Activity for this time period
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

export default AgentActivity;
